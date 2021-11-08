import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import styled from "styled-components";
import {AppBar, Toolbar, Typography} from "@mui/material";
import {getCityDataAction, getCityAction, getCityForecastAction} from "../store/slices/citySlice";

// const Button = styled.button`
//   color: black;
//   font-size: 1em;
//   margin: 1em;
//   padding: 0.25em 1em;
//   border: 2px solid black;
//   border-radius: 3px;
//
//   &:hover {
//     cursor: pointer;
//     color: red;
//     border-color: red;
//   }
// `
const StyledTypography = styled(Typography)`
  flex: 1;
`;

const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;
  padding: 2px 16px;


  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`

const Input = styled.input`

  -webkit-appearance: none;
  appearance: none;
  border: 0;
  font-family: inherit;
  padding: 16px 12px 0 12px;
  font-size: 16px;
  font-weight: 400;
  background: rgba(#000, .02);
  box-shadow: inset 0 -1px 0 rgba(#000, .3);
  color: #000;
  transition: all .15s ease;

  &:hover {
    background: rgba(#000, .04);
    box-shadow: inset 0 -1px 0 rgba(#000, .5);
  }


`

const Home = () => {
    const dispatch = useDispatch()
    const cityData = useSelector((state: any) => {
        return state.cityReducer.cityData
    })
    const city = useSelector((state: any) => {
        return state.cityReducer.city
    })
    const cityForecast = useSelector((state: any) => {
        return state.cityReducer.cityForecast
    })

    useEffect(() => {
        dispatch(getCityDataAction())
        dispatch(getCityAction())
        dispatch(getCityForecastAction())
    }, [dispatch])

    console.log(cityData)
    console.log(city)
    console.log(cityForecast)
    //
    // const cityNameList = React.useMemo(() => {
    //     return city.map((item:any) => {
    //         return (
    //             <div>
    //                Name: {item.EnglishName}
    //             </div>
    //         )
    //     })
    // },[])
    //
    // const cityDataList = React.useMemo(() => {
    //     return cityData.map((city:any) => {
    //         console.log(city)
    //         return (
    //             <div key={city.key}>
    //                 Temperature: {city.Temperature.Metric.Value}
    //             </div>
    //         )
    //     })
    // },[cityData])

    const cityForecastList = React.useMemo(() => {
        return cityForecast.map((day: any) => {
            return (
                <div key={day.Date}>
                    <ul>
                        <li>
                            {new Date(day.Date).toLocaleDateString('en', {weekday: 'long', day: 'numeric'})}
                        </li>
                        <li>
                            {day.Temperature.Minimum.Value} - {day.Temperature.Maximum.Value}
                        </li>
                        <hr/>
                    </ul>
                </div>
            )
        })
    }, [cityForecast])


    return (
        <div>
            <Header>
                <AppBar position="static" color={'primary'}>
                    <Toolbar>
                        <StyledTypography color="inherit">
                            Weather App
                        </StyledTypography>
                        <Input placeholder={'Search...'}/>
                    </Toolbar>
                </AppBar>
            </Header>
            {city && cityData && cityForecastList ? <Card>
                <ul>
                    <li>
                        City: {city.EnglishName}
                    </li>
                    <li>
                        Temperature: {cityData.Temperature.Metric.Value} {cityData.Temperature.Metric.Unit}
                    </li>
                    <h1>Forecast</h1>
                    <li>
                        {cityForecastList}
                    </li>
                </ul>
            </Card> : null}
        </div>
    );
};

export default Home;