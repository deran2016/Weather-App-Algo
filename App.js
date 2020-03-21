import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert} from 'react-native';
import * as Location from 'expo-location';
import Weather from './Components/Weather';

export default class App extends Component {
  state = {
      isLoaded: true
  }

  getLocation = async () => {
    try {
      const response = await Location.requestPermissionsAsync();
      const location = await Location.getCurrentPositionAsync();
    } catch (error) {
      Alert.alert("알림", "위치 권한을 얻지 못했습니다.");
    }
    const location = await Location.getCurrentPositionAsync();
    console.log(location);
  }

  componentDidMount() {
    this.getLocation();
  }

  render() {
      const { isLoaded } = this.state;
      return (
          <View style={styles.container}>
              { isLoaded ? <Weather/>: (
                  <View style={styles.loading}>
                      <Text style={styles.loadingText}>Getting the weather</Text>
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