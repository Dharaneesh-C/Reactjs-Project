import React, { useState } from "react";
import Axios from "axios";
import WeatherComponent from "./Components/WeatherComponent";
import CityComponent from "./Components/CityComponent";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";     
import Button from "react-bootstrap/Button";  
import 'bootstrap/dist/css/bootstrap.min.css'; 


function App() {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();
  const [error, setError] = useState("");
  const fetchWeather = async (e) => {
    e.preventDefault();
    const APIKEY = "dabd9b8314a15a6297886792fce2c5d2";
    try{
      const response = await Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`
    );
    
    updateWeather(response.data);
    setError("");
    }
    catch (err) {
      
      setError("City not found. Please try again.");
      
  }
  };
  return (
    <Container className="mt-5">
      <h1 className="text-center">Weather App</h1>
      {city && weather ? <WeatherComponent weather={weather} city={city} /> : <CityComponent  updateCity={updateCity} fetchWeather={fetchWeather}/>}

       {error && (
        <Modal show={true} onHide={() => setError("")}>
          <Modal.Header closeButton>
            <Modal.Title>Error</Modal.Title>
          </Modal.Header>
          <Modal.Body>{error}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setError("")}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </Container>
  );
}

export default App;
