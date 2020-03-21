import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert} from 'react-native';
import * as Location from 'expo-location';
import Weather from './Components/Weather';
import Axios from 'axios';

const API_KEY = "061f92cf4cda606b01135cee3314ad7a";

const Palette = {
  red: ["#AC725A", "#9C5353"],
  green: ["#589A60", "#5BBB73"],
  blue: ["#00C6FB","#005BEA"],
  deepblue: ["#14375A", "#53799C"]
}

export default class App extends Component {
  state = {
      isLoaded: false,
      temp: "",
      main: "",
      description: "",
      color: Palette.blue
  }

  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const { coords: {latitude, longitude} } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
      this.setState({ isLoaded: true });
    } catch (error) {
      console.error(error);
      Alert.alert("알림", "위치 정보를 얻지 못했습니다.");
    }
    const location = await Location.getCurrentPositionAsync();
  }

  getWeather = async (latitude, longitude) => {
    try {
      const { data } = await Axios.get(
        `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&lang=kr`
      );
      this.setState({ 
        temp: data.main.temp - 273.15,
        main: data.weather[0].main,
        description: data.weather[0].description
      });
      this.setBackgroundColor(data.weather[0].main);
    } catch (error) {
      Alert.alert("알림", "날씨 정보를 얻지 못했습니다.");
    }
  }

  setBackgroundColor = (weather) => {
    const main = weather;
    switch (main) {
        case "Clear":
            this.setState({ color: Palette.blue });
            break;
        case "Clouds":
            this.setState({ color: Palette.blue });
            break;
        case "Thunderstorm":
            this.setState({ color: Palette.deepblue });
            break;
        case "Drizzle":
            this.setState({ color: Palette.blue });
            break;
        case "Rain":
            this.setState({ color: Palette.deepblue });
            break;
        case "Snow":
            this.setState({ color: Palette.deepblue });
            break;
        case "Extreme":
            this.setState({ color: Palette.red });
            break;
        default:
            break;
    }
  }

  componentDidMount() {
    this.getLocation();
  }

  render() {
      const { isLoaded, temp, main, description, color } = this.state;
      console.log(temp, main, description);
      return (
          <View style={styles.container}>
              { isLoaded ? <Weather temp={temp} main={main} description={description} color={color}/>: (
                  <View style={styles.loading}>
                      <Text style={styles.loadingText}>날씨를 불러오지 못했습니다.</Text>
                  </View>
              )}
          </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  loading:{
    flex: 1,
    backgroundColor:'#FDF6AA',
    justifyContent: "flex-end",
    paddingLeft: 25
  },
  loadingText:{
    fontSize: 38,
    marginBottom: 100
  }
});