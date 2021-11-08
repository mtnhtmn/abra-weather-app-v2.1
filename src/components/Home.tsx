import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import styled from "styled-components";
import {AppBar, Toolbar, Typography} from "@mui/material";
import {getCityDataAction, getCityAction} from "../store/slices/citySlice";

const Button = styled.button`
  color: black;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid black;
  border-radius: 3px;

  &:hover {
    cursor: pointer;
    color: red;
    border-color: red;
  }
`
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


const Home = () => {
    const dispatch = useDispatch()
    const cityData = useSelector((state: any) => {
        return state.cityReducer.cityData
    })
    const city = useSelector((state: any) => {
        return state.cityReducer.city
    })

    useEffect(() => {
        dispatch(getCityDataAction())
        dispatch(getCityAction())
    }, [])

    console.log(cityData)
    console.log(city)
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


    return (
        <div>
            <AppBar position="static" color={'primary'}>
                <Toolbar>
                    <StyledTypography color="inherit">
                        Weather App
                    </StyledTypography>
                </Toolbar>
            </AppBar>
            {city && cityData ? <Card>
                <ul>
                    <li>
                        City: {city.EnglishName}
                    </li>
                    <li>
                        Temperature: {cityData.Temperature.Metric.Value} {cityData.Temperature.Metric.Unit}
                    </li>
                </ul>
            </Card> : null}
        </div>
    );
};

export default Home;