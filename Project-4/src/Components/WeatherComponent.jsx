import React from "react";
import {
  Form,
  Button,
  Image,
  Row,
  Col,
  Card,
  Container,
} from "react-bootstrap";
import { WeatherIcons } from "../Weathericons";

// Icons for info cards
const WeatherInfoIcons = {
  sunrise: "/icons/sunrise.svg",
  sunset: "/icons/sunset.svg",
  humidity: "/icons/humidity.svg",
  wind: "/icons/wind.svg",
  pressure: "/icons/pressure.svg",
};

// Utility: convert timestamp to readable time
const getTime = (timestamp) => {
  const date = new Date(timestamp * 1000);
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
};

// Component to render info cards
const WeatherInfoComponent = ({ name, value }) => {
  return (
    <Col md="auto" className="text-center">
      <Card style={{ width: "10rem" }}>
        <Card.Img variant="top" src={WeatherInfoIcons[name]} />
        <Card.Body>
          <Card.Title>{value}</Card.Title>
          <Card.Text>{name}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

// Main component
function WeatherComponent({ weather }) {
  const isDay = weather?.weather?.[0]?.icon?.includes("d");

  return (
    <Container className="text-center">
      <Row className="justify-content-md-center mb-4">
        <Col md="auto">
          <h2>
            {`${Math.floor(weather?.main?.temp)}°C | ${weather?.weather[0].description}`}
          </h2>
        </Col>
        <Col md="auto">
          <img
            src={WeatherIcons[weather?.weather[0].icon]}
            alt="weather icon"
            style={{ width: "100px", height: "100px" }}
          />
        </Col>
      </Row>

      <Row className="justify-content-md-center mb-4">
        <Col md="auto">
          <h3>{`${weather?.name}, ${weather?.sys?.country}`}</h3>
        </Col>
      </Row>

      <h4>Weather Info</h4>

      <Row className="justify-content-md-center">
        <WeatherInfoComponent
          name={isDay ? "sunset" : "sunrise"}
          value={getTime(weather?.sys[isDay ? "sunset" : "sunrise"])}
        />

        <WeatherInfoComponent
          name="humidity"
          value={`${weather?.main?.humidity}%`}
        />

        <WeatherInfoComponent
          name="wind"
          value={`${weather?.wind?.speed} m/s`}
        />

        <WeatherInfoComponent
          name="pressure"
          value={`${weather?.main?.pressure} hPa`}
        />
      </Row>
    </Container>
  );
}

export default WeatherComponent;
