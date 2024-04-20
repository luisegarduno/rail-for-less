## Instructions

**Deprecated**

Please see the following instructions for deployment via Windows

1. Clone the [Rails-For-Less](https://github.com/luisegarduno/rail-for-less) repository
```bash
git clone https://github.com/luisegarduno/rail-for-less.git
```

2. Add the following line to `rail-for-less/client/package.json` 
```json
"proxy": "http://localhost:5000"
```

3. Follow instructions in `rail-for-less/client/src/Form.js` to change WebSocket address

4. Install Python packages in `rail-for-less/server/`:
```bash
pip3 install -r server/requirements.txt
```

5. Download chromedriver for your Chrome version from [ChromeDriver](https://chromedriver.chromium.org/downloads), name this file "chromedriver" and place it in `rail-for-less/server/`

6. Follow instructions in `rail-for-less/server/ws.py` to disable pyvirtualdisplay

7. Install Flask-CORS:
```bash
pip3 install flask-cors
```

8. Follow instructions in `rail-for-less/server/api.py` to enable Flask-CORS

9. Run the API:
```bash
python3 rail-for-less/server/api.py
```

10. Run websocket?
```bash
python3 rail-for-less/server/ws.py
```

11. Open React development server in `rail-for-less/client`
```bash
npm start
```
