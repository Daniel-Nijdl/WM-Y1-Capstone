import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import * as weather from "../weather.json";
import {
  FaSun,
  FaMoon,
  FaCloudSun,
  FaCloudMoon,
  FaCloud,
  FaCloudMeatball,
  FaCloudShowersHeavy,
  FaCloudSunRain,
  FaCloudMoonRain,
  FaBolt,
  FaSnowflake
} from 'react-icons/fa';
import { RiMistFill } from 'react-icons/ri';


const getCurrentIconElement = (objIcon) => {
  switch (objIcon) {
    case '01d':
      return <FaSun size="45" />
    case '02d':
      return <FaCloudSun size="45" />
    case '03d':
      return <FaCloud size="45" />
    case '04d':
      return <FaCloudMeatball size="45" />
    case '09d':
      return <FaCloudShowersHeavy size="45" />
    case '10d':
      return <FaCloudSunRain size="45" />
    case '11d':
      return <FaBolt size="45" />
    case '13d':
      return <FaSnowflake size="45" />
    case '50d':
      return <RiMistFill size="45" />
    case '01n':
      return <FaMoon size="45" />
    case '02n':
      return <FaCloudMoon size="45" />
    case '03n':
      return <FaCloud size="45" />
    case '04n':
      return <FaCloudMeatball size="45" />
    case '09n':
      return <FaCloudShowersHeavy size="45" />
    case '10n':
      return <FaCloudMoonRain size="45" />
    case '11n':
      return <FaBolt size="45" />
    case '13n':
      return <FaSnowflake size="45" />
    case '50n':
      return <RiMistFill size="45" />
    default:
      console.log('No weather icon found');
      break;
  }
}

const Calendar = () => {
  return(

    <div className="card border-primary mb-3 calendar" >
      <div className="card-header">Weekly Temperature</div>
      <div className="card-body">
       
      <Container>

      <Row>
    <Col className="box-day" xs={{ order: 'first' }}>Sunday</Col>
    <Col className="box-day" xs>Monday</Col>
    <Col className="box-day" xs>Tuesday</Col>
    <Col className="box-day" xs>Wednesday</Col>
    <Col className="box-day" xs>Thursday</Col>
    <Col className="box-day" xs>Friday</Col>
    <Col className="box-day" xs={{ order: 'last' }}>Saturday</Col>
  </Row>

  <Row>
    <Col className="box" xs={{ order: 'first' }}>
    <h5>Day:</h5>
    <h3>{ `${ weather.daily.temp.day }° F` }</h3>

    </Col>
    <Col className="box" xs></Col>
    <Col className="box" xs></Col>
    <Col className="box" xs></Col>
    <Col className="box" xs></Col>
    <Col className="box" xs></Col>
    <Col className="box" xs={{ order: 'last' }}></Col>
  </Row>



</Container>

      </div>
    </div>
  )
}



export default Calendar;