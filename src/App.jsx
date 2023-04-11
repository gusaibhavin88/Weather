import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import Weathercard from "./Weathercard";
function App() {
  const [input, setinput] = useState("Surat");
  const [tempinfo, settempInfo] = useState("");

  const getWeatherinfo = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=e92802bc072b0ddbdcab2342f33f98c3`;
      let res = await fetch(url);
      let data = await res.json();
      const { temp, humidity, pressure } = data.main;
      const { main: weathermood } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset } = data.sys;
      const myNewWeatherInfo = {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset,
      };
      settempInfo(myNewWeatherInfo);
    } catch (error) { }
  };
  useEffect(() => {
    getWeatherinfo();
  }, []);

  return (
    <div className="app">
      <div className="search">
        <input
          type="text"
          value={input}
          onChange={(e) => setinput(e.target.value)}
          placeholder="City Name dfs"
        />
        <button onClick={getWeatherinfo}>Search</button>
      </div>
      <Weathercard tempInfo={tempinfo} />
    </div>
  );
}

export default App;
