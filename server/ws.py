import asyncio
import websockets

import json

from pyvirtualdisplay import Display
from seleniumwire import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.keys import Keys

import pickle
import time
import random
import math


async def handler(websocket):
    async def send_progress(date_index, percent_index, numDates, info, time=None):
        progress = dict()

        progress["percentComplete"] = round(
            round(percent_index / (numDates + math.ceil(numDates / 3)), 2) * 100)
        if time:
            progress["time"] = time
        progress["info"] = info
        progress["date"] = f'Fetching date {date_index + 1} of {numDates}'

        await websocket.send(json.dumps({"progress": progress}))
        await asyncio.sleep(0.1)

    def delay():
        time.sleep(random.randint(10, 20) / 100)

    def get_proxy():
        with open("./proxy.pk", "rb") as pk:
            proxy = pickle.load(pk)
        old_proxy_port = int(proxy[-5:])
        proxy_port = old_proxy_port
        while (proxy_port == old_proxy_port):
            proxy_port = random.randint(10001, 10100)
        with open("./proxy.pk", "wb") as pk:
            pickle.dump(proxy[:-5] + str(proxy_port), pk)
        return proxy

    try:
        request = await websocket.recv()

        with open("./status.pk", "wb") as pk:
            pickle.dump(False, pk)

        args = json.loads(request)
        dept_station, arrival_station = args["deptStation"], args["arrivalStation"]
        dept_code, arrival_code = args["deptCode"], args["arrivalCode"]
        request_time = args["requestTime"]
        dates = args["dates"]
        coach, business, first = args["coach"], args["business"], args["first"]
        cheapest_room, roomette, bedroom, family_room = args[
            "cheapestRoom"], args["roomette"], args["bedroom"], args["familyRoom"]
        pref_route, time_of_day = args["route"], args["timeOfDay"]
        traveler_quantity, traveler_type = int(
            args["travelerQuantity"]), args["travelerType"]
        share = args["share"]
        auto_train = dept_station in ["Lorton (VA)", "Sanford (FL)"]

        noTrains = False
        fares = list()
        addInfo = dict()
        fares.append(addInfo)

        date_index, percent_index = 0, 0
        while (date_index < len(dates)):
            date = dates[date_index]
            if (date_index % 3 == 0):
                await send_progress(date_index, percent_index, len(
                    dates), f"Connecting to proxy {math.ceil((date_index + 1) / 3)} of {math.ceil(len(dates) / 3)}", 19)

                if (date_index != 0):
                    driver.quit()

                    # comment out the line below when developing on Windows
                    display.stop()

                # comment out the two lines below when developing on Windows
                display = Display(visible=1, size=(
                    random.randint(1100, 1200), random.randint(1000, 1100)))
                display.start()

                seleniumwire_options = {
                    "proxy": {
                        "http": get_proxy()
                    }
                }

                details = Service(r"chromedriver")
                options = webdriver.ChromeOptions()
                options.add_argument("--no-sandbox")
                options.add_argument("--remote-debugging-port=9225")
                options.add_argument("ignore-certificate-errors")
                options.add_argument(
                    "--disable-blink-features=AutomationControlled")
                options.add_experimental_option(
                    "useAutomationExtension", False)
                options.add_experimental_option(
                    "excludeSwitches", ["enable-automation"])

                driver = webdriver.Chrome(
                    options=options, seleniumwire_options=seleniumwire_options, service=details)
                driver.maximize_window()
                driver.set_page_load_timeout(30)
                try:
                    driver.get("https://www.amtrak.com/" +
                               ("auto-train-experience" if auto_train else ""))
                except Exception:
                    pass

                percent_index += 1

            if (date_index % 3 != 0 and not noTrains):
                await send_progress(date_index, percent_index, len(dates), "Beginning new search")
                await asyncio.sleep(0.1)

                new_search_button = driver.find_element(
                    By.XPATH, "//button[contains(.,'New Search')]")
                new_search_button.click()
                delay()

            if (date_index % 3 == 0):
                await send_progress(date_index, percent_index, len(dates), "Entering departure station")
                await asyncio.sleep(0.1)

                if (not auto_train):
                    dept_station_input = driver.find_element(
                        By.XPATH, "//input[@data-placeholder='From']")
                    dept_station_input.click()
                    delay()
                    dept_station_input.send_keys(dept_code)
                    delay()

                    await send_progress(date_index, percent_index, len(dates), "Entering arrival station")
                    await asyncio.sleep(0.1)

                    arrival_station_input = driver.find_element(
                        By.XPATH, "//input[@data-placeholder='To']")
                    arrival_station_input.click()
                    delay()
                    arrival_station_input.send_keys(arrival_code)
                    delay()
                elif (dept_station == "Sanford (FL)"):
                    switch_button = driver.find_element(
                        By.XPATH, "//img[@alt='Switch departure and arrival stations.']")
                    switch_button.click()
                    delay()

            await send_progress(date_index, percent_index, len(dates), "Entering travel date")
            await asyncio.sleep(0.1)

            dept_date_input = WebDriverWait(driver, 3).until(EC.element_to_be_clickable((
                By.XPATH, "//input[@data-julie='departdisplay_booking_oneway']")))
            dept_date_input.click()
            delay()
            dept_date_input.clear()
            delay()
            dept_date_input.send_keys(date)
            delay()

            done_button = driver.find_element(
                By.XPATH, "//button[contains(.,'Done')]")
            done_button.click()
            delay()

            if (date_index % 3 == 0 and (traveler_quantity > 1 or traveler_type != "adult")):
                await send_progress(date_index, percent_index, len(dates), "Entering traveler information")
                await asyncio.sleep(0.1)

                travelers_button = driver.find_element(
                    By.XPATH, "//img[@alt='Add travelers and discounts']")
                travelers_button.click()
                delay()

                adult_sub_button = driver.find_element(
                    By.XPATH, "//button[@amt-auto-test-id='traveler-component-adult-dcr-button']")
                adult_sub_button.click()
                delay()

                adult_add_button = driver.find_element(
                    By.XPATH, "//button[@amt-auto-test-id='traveler-component-adult-incr-button']")
                senior_add_button = driver.find_element(
                    By.XPATH, "//button[@amt-auto-test-id='traveler-component-senior-incr-button']")
                for traveler in range(traveler_quantity):
                    (adult_add_button if traveler_type ==
                     "adult" else senior_add_button).click()
                    delay()

            noTrains = False

            await send_progress(date_index, percent_index, len(dates), "Submitting request")
            await asyncio.sleep(0.1)

            find_trains_button = driver.find_element(
                By.XPATH, "(//button[@data-julie='findtrains'])[1]")
            find_trains_button.click()

            await send_progress(date_index, percent_index, len(dates), "Waiting on amtrak.com", 10)
            await asyncio.sleep(0.1)

            try:
                WebDriverWait(driver, 10).until(
                    EC.any_of(EC.element_to_be_clickable((By.XPATH, "//button[contains(.,'New Search')]")),
                              EC.element_to_be_clickable(
                        (By.XPATH, "//button[@aria-label='Cancel']")),
                        EC.presence_of_element_located((By.XPATH, "//div[@class='col-12 d-inline-flex']"))))
            except Exception:
                pass
            if (driver.find_elements(By.XPATH, "//button[@aria-label='Cancel']") or
                    driver.find_elements(By.XPATH, "//div[@class='col-12 d-inline-flex']")):
                if driver.find_elements(By.XPATH, "//button[@aria-label='Cancel']"):
                    cancel_button = driver.find_element(
                        By.XPATH, "//button[@aria-label='Cancel']")
                    cancel_button.click()
                    delay()
                noTrains = True

            if (not noTrains):
                filter_button = driver.find_elements(
                    By.XPATH, "//span[contains(.,'Sort/Filter')]")
                if (pref_route or time_of_day != "earliest-available") and filter_button:
                    await send_progress(date_index, percent_index, len(dates), "Filtering results")
                    await asyncio.sleep(0.1)

                    filter_button[0].click()
                    time.sleep(0.75)

                    time_of_day_button = driver.find_elements(
                        By.XPATH, f"//button[contains(.,'{time_of_day}')]")
                    if (time_of_day != "earliest-available" and time_of_day_button):
                        time_of_day_button[0].click()

                    route_button = driver.find_elements(
                        By.XPATH, f"//button[contains(.,'{pref_route}')]")
                    try:
                        route_button[0].click()
                        delay()
                    except Exception:
                        while (True):
                            try:
                                arrow_button = driver.find_element(
                                    By.XPATH, "//button[@class='am-carousel--arrow right position-absolute ng-star-inserted']")
                                arrow_button.click()
                                time.sleep(0.75)
                            except Exception:
                                break
                            route_button = driver.find_elements(
                                By.XPATH, f"//button[contains(.,'{pref_route}')]")
                            try:
                                route_button[0].click()
                                delay()
                            except Exception:
                                continue

                    filter_button = driver.find_element(
                        By.XPATH, "//button[@class='close pull-right']")
                    filter_button.click()
                    delay()

                details = driver.find_elements(
                    By.XPATH, "//div[contains(@amt-auto-test-id,'autoId-one-way-journey-solution-0-0')]")
                if (details):
                    fare = dict()

                    details = details[0]

                    fare["date"] = date

                    route = details.find_elements(
                        By.XPATH, "(.//span[@class='mix-name'])[1]"
                    )
                    if (route):
                        route = route[0].text
                    else:
                        route = details.find_elements(
                            By.XPATH, ".//a[@class='handpointer']")
                        if (route):
                            route = route[0].text
                        else:
                            route = "Multiple Trains"
                    fare["route"] = route

                    if (coach):
                        coach_price = details.find_elements(
                            By.XPATH, ".//p[contains(text(),'Coach')]/parent::div//span[contains(@class,'price-tag')]")
                        if (coach_price and coach_price[0].text.isnumeric()):
                            fare["coach"] = "$" + coach_price[0].text

                    if (business):
                        business_price = details.find_elements(
                            By.XPATH, ".//p[contains(text(),'Business')]/parent::div//span[contains(@class,'price-tag')]")
                        if (business_price and business_price[0].text.isnumeric()):
                            fare["business"] = "$" + business_price[0].text

                    if (first):
                        first_price = details.find_elements(
                            By.XPATH, ".//p[contains(text(),'First')]/parent::div//span[contains(@class,'price-tag')]")
                        if (first_price and first_price[0].text.isnumeric()):
                            fare["first"] = "$" + first_price[0].text

                    rooms_button = details.find_elements(
                        By.XPATH, ".//p[contains(text(),'Private Rooms')]/parent::div/parent::div")
                    rooms_price = details.find_elements(
                        By.XPATH, ".//p[contains(text(),'Private Rooms')]/parent::div/parent::div//span[contains(@class,'price-tag')]")
                    if (rooms_button and rooms_price):
                        rooms_button, rooms_price = rooms_button[0], "$" + \
                            rooms_price[0].text
                        if (cheapest_room):
                            fare["rooms"] = rooms_price
                        elif ((roomette or bedroom or family_room) and route != "Mixed Service" and route != "Multiple Trains"):
                            await send_progress(date_index, percent_index, len(dates), "Getting rooms prices")
                            await asyncio.sleep(0.1)

                            rooms_button.click()
                            time.sleep(2)

                            if (roomette):
                                roomette_price = details.find_elements(
                                    By.XPATH, ".//div[contains(text(),'ROOMETTE')]/parent::div/parent::div/parent::div//span[@class='price-currency']")
                                if (roomette_price):
                                    fare["roomette"] = roomette_price[0].text
                            if (bedroom):
                                bedroom_price = details.find_elements(
                                    By.XPATH, ".//div[contains(text(),'BEDROOM')]/parent::div/parent::div/parent::div//span[@class='price-currency']")
                                if (bedroom_price):
                                    fare["bedroom"] = bedroom_price[0].text
                            if (family_room):
                                family_room_price = details.find_elements(
                                    By.XPATH, ".//div[contains(text(),'FAMILY ROOM')]/parent::div/parent::div/parent::div//span[@class='price-currency']")
                                if family_room_price:
                                    fare["familyRoom"] = family_room_price[0].text

                            html = driver.find_element(By.TAG_NAME, "html")
                            html.send_keys(Keys.HOME)
                            time.sleep(0.5)
                            details.find_element(
                                By.XPATH, ".//p[contains(text(),'Private Rooms')]/parent::div").click()
                            delay()
                            html.send_keys(Keys.HOME)
                            time.sleep(0.5)

                    capacity = details.find_element(
                        By.XPATH, ".//div[@class='seat-capacity-text']").text
                    if (capacity):
                        fare["capacity"] = capacity.split()[0]

                    depart_time = details.find_element(
                        By.XPATH, "(.//span[contains(@class,'time font-light')])[1]").text
                    depart_period = details.find_element(
                        By.XPATH, "(.//span[contains(@class,'time-period')])[1]").text
                    fare["departs"] = depart_time + depart_period

                    fare["duration"] = details.find_element(
                        By.XPATH, ".//div[contains(@class,'journey-travel-time')]//span[@class='text-center ng-star-inserted']").text

                    arrival_time = details.find_element(
                        By.XPATH, "(.//span[contains(@class,'time font-light')])[2]").text
                    arrival_period = details.find_element(
                        By.XPATH, "(.//span[contains(@class,'time-period')])[2]").text
                    fare["arrives"] = arrival_time + arrival_period

                    if (any(fare_type in ["coach", "business", "first", "rooms", "roomette", "bedroom", "familyRoom"] for fare_type in fare)):
                        fares.append(fare)

            if (date_index == len(dates) - 1):
                percent_index += 1

                await send_progress(date_index, percent_index, len(dates), "Finishing up")
                await asyncio.sleep(0.1)

                driver.quit()
                # comment out the line below when developing on Windows
                display.stop()
                break
            else:
                date_index += 1
                percent_index += 1
    except Exception:
        try:
            driver.quit()
        except Exception:
            pass

        # comment out the try-except block below when developing on Windows
        try:
            display.stop()
        except Exception:
            pass

    try:
        with open("./status.pk", "wb") as pk:
            pickle.dump(True, pk)

        if (len(fares) == 1):
            await send_progress(date_index, percent_index, len(dates), "No trains found!")
            await asyncio.sleep(0.1)
        else:
            await websocket.send(json.dumps({"fares": fares}))

        if (len(fares) > 1 and share):
            with open("./recent_searches.pk", "rb") as pk:
                recent_searches = list()
                fares[0]["deptStation"] = dept_station
                fares[0]["arrivalStation"] = arrival_station
                fares[0]["travelerInfo"] = f"{traveler_quantity} {traveler_type.capitalize()}{'s' if traveler_quantity > 1 else ''}"
                fares[0]["requestTime"] = request_time
                try:
                    recent_searches = pickle.load(pk)
                    recent_searches.insert(0, fares)
                    if (len(recent_searches) > 100):
                        recent_searches = recent_searches[:100]
                except Exception:
                    pass
            with open("./recent_searches.pk", "wb") as pk:
                pickle.dump(
                    recent_searches if recent_searches else [fares], pk)
    except Exception:
        pass


async def main():
    async with websockets.serve(handler, "", 5001):
        await asyncio.Future()

asyncio.run(main())
