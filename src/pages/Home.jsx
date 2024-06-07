import { Box, styled } from '@mui/material'
import React, { useState } from 'react'
import Form from '../components/Form'
import Info from '../components/Info'
import BgImg from "../assets/bg.jpg"



const Component = styled(Box)({
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    margin: '0 auto',
    width: '65%',
    color:'white'
})

const Image = styled(Box)({
    backgroundImage: `url(${BgImg})`,
    width: '27%',
    height: '80%',
    backgroundSize: 'cover',
    borderRadius: '20px 0 0 20px',
    
})



const Home = () => {
    const [result, setResult] = useState({})

  return (
    <Component>
    <Image></Image>
    <Box style={{ width: '73%', height: '80%' }}>
        <Form setResult={setResult} />
        <Info result={result} />
    </Box>
</Component>
  )
}

export default Home;
