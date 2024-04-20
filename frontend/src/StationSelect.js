import DirectionsRailwayIcon from "@mui/icons-material/DirectionsRailway";
import ErrorIcon from "@mui/icons-material/Error";
import RailwayAlertIcon from "@mui/icons-material/RailwayAlert";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function StationSelect({
	departing,
	origin,
	setOrigin,
	destination,
	setDestination,
	updateMap,
	setUpdateMap,
	stations,
	nearbyCitiesBool,
	stationFormat,
}) {
	const filterStations = (options, state) => {
		const nearbyCitiesStations = [];
		const input = state.inputValue.toLowerCase();
		if (input && nearbyCitiesBool) {
			for (const option of options) {
				for (const nearbyCity of option.nearbyCities.filter((city) =>
					city.toLowerCase().includes(input)
				)) {
					nearbyCitiesStations.push({
						...option,
						group: nearbyCity,
					});
				}
			}
		}
		const filteredOptions = options.filter(
			(option) =>
				option.name.toLowerCase().includes(input) ||
				option.code.toLowerCase().includes(input) ||
				option.stateLong.toLowerCase().includes(input) ||
				option.city.toLowerCase().includes(input)
		);
		const nearbyStations = filteredOptions.filter(
			(option) => option.group === "Nearby"
		);
		return nearbyStations
			.concat(
				[
					...new Map(
						nearbyCitiesStations.map((station) => [
							JSON.stringify([station.id, station.group]),
							station,
						])
					).values(),
				]
					.sort((a, b) => a.name.localeCompare(b.name))
					.sort((a, b) => a.group.localeCompare(b.group))
			)
			.concat(filteredOptions.filter((option) => option.group !== "Nearby"));
	};

	const getStationIcon = (option, station) =>
		option.id === station.id ? (
			<ErrorIcon fontSize="small" />
		) : option.routes.some((route) => station.routes.includes(route)) ? (
			<DirectionsRailwayIcon fontSize="small" />
		) : (
			<RailwayAlertIcon fontSize="small" />
		);

	const getStationLabels = (station) =>
		stationFormat === "name-and-code"
			? `${station.name} (${station.code})`
			: stationFormat === "name-only"
			? station.name
			: station.code;

	return (
		<Autocomplete
			disableClearable
			disabled={!departing && !origin}
			filterOptions={filterStations}
			getOptionLabel={getStationLabels}
			isOptionEqualToValue={(option, value) => option.id === value.id}
			loadingText="Getting stations..."
			noOptionsText="No stations found"
			onChange={(e, v) => {
				departing ? setOrigin(v) : setDestination(v);
				setUpdateMap(!updateMap);
			}}
			options={stations}
			renderInput={(params) => (
				<TextField
					{...params}
					label={departing ? "Departing" : "Arriving"}
					placeholder="name/code/state/city"
				/>
			)}
			renderOption={(props, option) => (
				<Box
					component="li"
					sx={{
						paddingLeft: destination ? "0 !important" : "",
						"& > svg": { margin: "0 0.5rem" },
					}}
					{...props}
				>
					{(departing ? destination : origin) &&
						getStationIcon(option, departing ? destination : origin)}
					{getStationLabels(option)}
				</Box>
			)}
			groupBy={(station) => station.group}
			value={departing ? origin : destination}
		/>
	);
}
