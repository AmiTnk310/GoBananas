import React, { useState } from 'react';
import { Box, InputBase, Button, styled } from '@mui/material';
import { getWeather } from '../services/api';

const Container = styled(Box)({
    background: 'transparent',
    padding: 10
});

const Input = styled(InputBase)({
    color: 'white',
    marginRight: 20,
    fontSize: 18,
    border:'2px solid white',
    borderRadius:'7px',
    padding:'10px 10px 10px 10px',
    background:'none'
});

const GetButton = styled(Button)({
    background: '#e67e22',
    padding:'10px 10px 10px 10px'

})

const Form = ({ setResult }) => {
    const [data, setData] = useState({ city: '', country: '' })

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const getWeatherInfo = async () => {
        let response = await getWeather(data.city, data.country);
        setResult(response);
    }

    return (
        <Container>
            <Input 
                placeholder="City"
                onChange={(e) => handleChange(e)}
                name="city"
            />
            <Input 
                placeholder="Country"
                onChange={(e) => handleChange(e)}
                name="country"
            />
            <GetButton
                variant="contained"
                onClick={() => getWeatherInfo()}
            >Get Weather</GetButton>
        </Container>
    )
}

export default Form;