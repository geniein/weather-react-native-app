import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import Loading from './Loading';
import * as Location from 'expo-location';
import axios from 'axios';
import Weather from './Weather';

const WEATHER_API_KEY = "c2449a0e5bd5a8f609367eddd0af32b5";

export default class extends React.Component {

  state = {
    isLoading: true
  }

  getWeather = async(latitude, longitude) => {
    const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${WEATHER_API_KEY}`);
    this.setState({isLoading: false, temp: data.main.temp, condition: "Clear"});
  }

  getLocation = async() => {
    try{
      const response = await Location.requestPermissionsAsync();
      const {coords:{latitude,longitude}} = await Location.getCurrentPositionAsync();
      this.getWeather(latitude,longitude);
    } catch(error){
      Alert.alert("Need to permit Location to us");
    }
  }

  componentDidMount(){
    this.getLocation();
  }

  render() {
    const {isLoading, temp, condition} = this.state;
    return isLoading ? <Loading/> : <Weather temp={temp} condition={condition}/>
  } 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
