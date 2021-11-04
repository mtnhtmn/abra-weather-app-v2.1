import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface CityState {
    cityName: string
    temperature: number
}

const initialState: CityState = {
    cityName: 'Tel-Aviv',
    temperature: 30
}

export const citySlice = createSlice({
    name: 'city',
    initialState,
    reducers: {
        getCityData: (state) => {

        }
    }
})

export default citySlice.reducer

