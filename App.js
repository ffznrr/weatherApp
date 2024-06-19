import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import WeatherSearch from "./src/components/weatherSearch";
import WeatherInfo from "./src/components/weatherInfo";

const App = () => {
  const [city, SetCity] = useState("");
  const kota = (city) => {
    SetCity(city);
  };

  return (
    <View style={styles.container}>
      <WeatherSearch
        placeholder="Search the weather of your city"
        numberOfLines={1}
        kota={kota}
      />
      <WeatherInfo city={city} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

export default App;
