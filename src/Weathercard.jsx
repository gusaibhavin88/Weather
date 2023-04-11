import clear from "./assets/clear-sky.png";
import smoke from "./assets/weather.png";
import cloud from "./assets/cloudy.png";
import rain from "./assets/rain.png";
import React, { useEffect } from "react";
import "./app.css";
import { useState } from "react";
function Weathercard({ tempInfo }) {
  const [wethericon, setweathericon] = useState("");
  const {
    temp,
    humidity,
    pressure,
    weathermood,
    name,
    speed,
    country,
    sunset,
  } = tempInfo;

  const sec = sunset;
  const date = new Date(sec * 1000);
  const time = `${date.getHours()} : ${date.getMinutes()}`;

  const changeicon = () => {
    if (weathermood) {
      switch (weathermood) {
        case "Clear":
          setweathericon(clear);
          break;
        case "Smoke":
          setweathericon(smoke);
          break;
        case "Clouds":
          setweathericon(cloud);
          break;
        case "Rain":
          setweathericon(rain);
          break;

        default:
          break;
      }
    }
  };
  useEffect(() => {
    changeicon();
  }, [weathermood]);
  return (
    <>
      <div className="weatherdata">
        <img src={wethericon} alt="" />
        <div className="blackwhite">
          <div className="black">
            <span>{temp}°C</span>
            <div className="blackdiv">
              <h2>{weathermood}</h2>
              <p style={{ fontWeight: "100" }}>
                {name}, {country}
              </p>
            </div>
          </div>
          <div className="green">
            <h3>{new Date().toLocaleString()}</h3>
          </div>
        </div>
        <div className="bottomdata">
          <div className="bd">
            <i class="fa-regular fa-lightbulb"></i>
            <div className="bdin">
              <span>{time}</span>
              <span>Sunset</span>
            </div>
          </div>
          <div className="bd">
            <i class="fa-solid fa-droplet"></i>
            <div className="bdin">
              <span>{humidity}</span>
              <span>Humidity</span>
            </div>
          </div>
          <div className="bd">
            <i class="fa-solid fa-cloud-moon-rain"></i>
            <div className="bdin">
              <span>Pressure</span>
              <span>{pressure}</span>
            </div>
          </div>

          <div className="bd">
            <i class="fa-solid fa-wind"></i>
            <div className="bdin">
              <span>Wind</span>
              <span>{speed}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Weathercard;
