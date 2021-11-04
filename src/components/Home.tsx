import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../store/store";
import styled from "styled-components";

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


const Home = () => {

    const cityData = useSelector((state: RootState) => state.cityReducer)
    console.log(cityData)
    return (
        <div>
            Home
            <Button>Kill me</Button>
        </div>
    );
};

export default Home;