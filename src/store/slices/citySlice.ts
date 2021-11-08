import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";

export interface CityState {
    cityData: any
    city: any
}

const initialState: CityState = {
    cityData: null,
    city: null
}

export const citySlice = createSlice({
    name: 'city',
    initialState,
    reducers: {
        getCityData: (state,action) => {
            state.cityData = action.payload
        },
        getCity: (state,action) => {
            state.city = action.payload
        }
    }
})

export const {getCityData, getCity} = citySlice.actions


export const getCityAction = () => (dispatch:any) => {
    axios.get('https://dataservice.accuweather.com/locations/v1/cities/search?apikey=xevDxA5DrqpWPmxG3UWazN5As6P6poAw&q=tel%20aviv')
        .then((response:any)=> {
            dispatch(getCity(response.data[0]))
        }).catch((error) => {
        console.log(error)
    })
}

export const getCityDataAction = () => (dispatch:any) => {
    axios.get('https://dataservice.accuweather.com/currentconditions/v1/215854?apikey=xevDxA5DrqpWPmxG3UWazN5As6P6poAw')
        .then((response:any)=> {
            dispatch(getCityData(response.data[0]))
        }).catch((error) => {
        console.log(error)
    })
}

export default citySlice.reducer


