import { useState } from "react";
import "./Settings.css";
import SettingsIcon from "@mui/icons-material/Settings";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Switch from "@mui/material/Switch";

export default function Settings({
	bedrooms,
	setBedrooms,
	familyRooms,
	setFamilyRooms,
	geolocateBool,
	setGeolocateBool,
	geolocate,
	stations,
	setStations,
	nearbyCitiesBool,
	setNearbyCitiesBool,
	stationFormat,
	setStationFormat,
}) {
	const [anchor, setAnchor] = useState(null);

	function handleGeolocate() {
		setGeolocateBool(!geolocateBool);
		localStorage.setItem("geolocate", JSON.stringify(!geolocateBool));
		if (!geolocateBool) {
			geolocate(stations);
		} else {
			setStations(stations.slice(5));
		}
	}

	function handleNearbyCities() {
		setNearbyCitiesBool(!nearbyCitiesBool);
		localStorage.setItem("nearby-cities", JSON.stringify(!nearbyCitiesBool));
	}

	function handleStationFormat(newStationFormat) {
		localStorage.setItem("station-format", newStationFormat);
		setStationFormat(newStationFormat);
	}

	return (
		<div>
			<IconButton
				disableRipple
				id="settings-button"
				onClick={(e) => setAnchor(e.currentTarget)}
			>
				<SettingsIcon />
			</IconButton>
			<Menu
				anchorEl={anchor}
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "right",
				}}
				onClose={() => {
					setAnchor(null);
				}}
				open={Boolean(anchor)}
				transformOrigin={{
					vertical: "top",
					horizontal: "right",
				}}
			>
				<div id="settings-popover">
					<div className="settings-row">
						<span>Bedrooms</span>
						<Switch
							checked={bedrooms}
							onChange={() => setBedrooms(!bedrooms)}
						/>
					</div>
					<div className="settings-row">
						<span>Family Rooms</span>
						<Switch
							checked={familyRooms}
							onChange={() => setFamilyRooms(!familyRooms)}
						/>
					</div>
					<div className="settings-row">
						<span>Geolocation</span>
						<Switch checked={geolocateBool} onChange={handleGeolocate} />
					</div>
					<div className="settings-row">
						<span>Nearby cities</span>
						<Switch checked={nearbyCitiesBool} onChange={handleNearbyCities} />
					</div>
					<div className="settings-row">
						<span>Station format</span>
						<Select
							className="select-station-format"
							disableUnderline
							onChange={(e) => handleStationFormat(e.target.value)}
							value={stationFormat}
							variant="standard"
						>
							<MenuItem key="name-and-code" value="name-and-code">
								name and code
							</MenuItem>
							<MenuItem key="name-only" value="name-only">
								name only
							</MenuItem>
							<MenuItem key="code-only" value="code-only">
								code only
							</MenuItem>
						</Select>
					</div>
				</div>
			</Menu>
		</div>
	);
}
