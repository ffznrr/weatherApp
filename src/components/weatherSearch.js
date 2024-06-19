import React, { useState } from "react";
import { View, Button, StyleSheet } from "react-native";
import CustomTextInput from "./customTextInput";

const WeatherSearch = ({ kota }) => {
  const [city, setCity] = useState("");

  return (
    <View>
      <CustomTextInput
        placeholder="Search the weather of your city"
        numberOfLines={1}
        onChangeText={setCity}
      />
      <View style={styles.buttonWrapper}>
        <Button
          title="Search"
          onPress={() => {
            kota(city);
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonWrapper: {
    marginTop: 20,
  },
});

export default WeatherSearch;
