import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import axios from "axios";
import { BASE_URL, API_KEY } from "../constant";

const WeatherInfo = ({ city }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!city) return;

    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}?q=${city}&appid=${API_KEY}`,
        );
        setData(response.data);
        setError(null);
      } catch (err) {
        setData(null);
        setError(err.message);
      }
    };

    fetchWeather();
  }, [city]);

  if (error) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Data Not Found</Text>
      </View>
    );
  }

  if (!data) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Data Not Found</Text>
      </View>
    );
  }

  const temperatureCelsius = (data.main.temp - 273.15).toFixed(2);
  const visibilityKm = (data.visibility / 1000).toFixed(2);
  const weatherDescription = data.weather[0].description;
  const weatherIcon = data.weather[0].icon;
  const windSpeed = data.wind.speed;

  return (
    <View style={styles.marginTop20}>
      <Text style={styles.text}>The Weather Of {data.name}</Text>
      <Text style={[styles.temperature, styles.marginTop20]}>
        {temperatureCelsius}°C
      </Text>
      <View style={[styles.rowContainer, styles.marginTop20]}>
        <Image
          source={{
            uri: `https://openweathermap.org/img/w/${weatherIcon}.png`,
          }}
          style={styles.weatherIcon}
        />
        <Text style={[styles.text, styles.bold]}>{data.weather[0].main}</Text>
      </View>
      <Text style={styles.text}>{weatherDescription}</Text>
      <View style={[styles.rowContainer, styles.marginTop20]}>
        <Text style={[styles.text, styles.bold]}>Visibility :</Text>
        <Text style={[styles.text, styles.marginLeft15]}>
          {visibilityKm} KM
        </Text>
      </View>
      <View style={[styles.rowContainer, styles.marginTop20]}>
        <Text style={[styles.text, styles.bold]}>Wind Speed :</Text>
        <Text style={[styles.text, styles.marginLeft15]}>{windSpeed} m/s</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  marginTop20: {
    marginTop: 20,
  },
  marginLeft15: {
    marginLeft: 15,
  },
  text: {
    textAlign: "center",
    fontSize: 16,
  },
  bold: {
    fontWeight: "700",
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  temperature: {
    fontWeight: "700",
    fontSize: 80,
    textAlign: "center",
  },
  weatherIcon: {
    width: 50,
    height: 50,
  },
  loadingContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
});

export default WeatherInfo;
