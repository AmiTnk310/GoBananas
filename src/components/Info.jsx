import React from 'react';
import { Box, Typography, styled } from '@mui/material';
import { LocationOn, SettingsBrightness, Opacity, Brightness5, Brightness6, Dehaze, Cloud } from '@mui/icons-material'

const Row = styled(Typography)({
    padding: 10,
    fontSize: 20,
    letterSpacing: 2,
    lineHeight:3.5,
    '& > svg': {
        marginRight: 10
    },
    display:'flex',
    alignItems:'center',
    color:'#fe9e48',
    // justifyContent:'center'
    fontWeight:700
});

const Error = styled(Typography)({
    color: 'red',
    margin: 50,
    padding: 20
})

const Information = ({ result }) => {

    return (
        result && Object.keys(result).length > 0 ?
        <Box style={{ margin: '30px 60px' }}>
            <Row><LocationOn/>Location: &nbsp; <span style={{color:"white" , fontWeight:"500"}}>{result.name}, {result.sys.country}</span></Row>
            <Row><SettingsBrightness />Temperature:  &nbsp; <span style={{color:"white" , fontWeight:"500"}}>{result.main.temp}</span></Row>
            <Row><Opacity />Humidity:  &nbsp; <span style={{color:"white" , fontWeight:"500"}}>{result.main.humidity}</span></Row>
            <Row><Brightness5 />Sun Rise:  &nbsp; <span style={{color:"white" , fontWeight:"500"}}> {new Date(result.sys.sunrise * 1000).toLocaleTimeString()}</span></Row>
            <Row><Brightness6 />Sun Set:  &nbsp; <span style={{color:"white" , fontWeight:"500"}}>{new Date(result.sys.sunset * 1000).toLocaleTimeString()}</span></Row>
            <Row><Dehaze />Humidity:  &nbsp; <span style={{color:"white" , fontWeight:"500"}}>{result.weather[0].main}</span></Row>
            <Row><Cloud />Clouds:  &nbsp; <span style={{color:"white" , fontWeight:"500"}}>{result.clouds.all}%</span></Row>
        </Box>
        : <Error>Please enter the values to check weather</Error>
    )
}

export default Information;