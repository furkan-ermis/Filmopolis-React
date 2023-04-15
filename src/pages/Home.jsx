import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Requests'

const Home = () => {
  return (
    <>
        <Main /> 
        <Row rowID='1' title= 'Popüler' fetchURL={requests.requestPopular} />
        <Row rowID='2' title= 'Trend' fetchURL={requests.requestTrending} />
        <Row rowID='3' title= 'En Cok Oy Alan' fetchURL={requests.requestTopRated} />
        <Row rowID='4' title= 'Korku' fetchURL={requests.requestHorror} />
    </>
  )
}

export default Home