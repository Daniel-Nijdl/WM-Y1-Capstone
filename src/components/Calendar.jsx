import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
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
  FaSnowflake,
} from "react-icons/fa";
import { RiMistFill } from "react-icons/ri";
import SplitButton from 'react-bootstrap/SplitButton'

const Calendar = () => {
  return (
    <div className="calendar">
      <div className="card-header">Weekly Temperature</div>
      <div className="card-body cardBackground">
        <Container className="weeklyContainer">
          <Row className="days">
            <Col className="box-day" xs={{ order: "first" }}>
              Sunday
            </Col>
            <Col className="box-day" xs>
              Monday
            </Col>
            <Col className="box-day" xs>
              Tuesday
            </Col>
            <Col className="box-day" xs>
              Wednesday
            </Col>
            <Col className="box-day" xs>
              Thursday
            </Col>
            <Col className="box-day" xs>
              Friday
            </Col>
            <Col className="box-day" xs={{ order: "last" }}>
              Saturday
            </Col>
          </Row>

          <Row className="weekly">
            <Col className="box box-first" xs={{ order: "first" }}>
              <p>High:</p>
              <h3>{`${weather.daily[0].temp.max}° F`}</h3>
              <h5>
                <FaSun size="45" className="iconThing" />
              </h5>


              <p>Day:</p>
              <h5>{`${weather.daily[0].temp.day}° F`}</h5>
              <p>Night:</p>
              <h5>{`${weather.daily[0].temp.night}° F`}</h5>

            </Col>
            <Col className="box box-rest" xs>
              <p>High:</p>
              <h3>{`${weather.daily[0].temp.max}° F`}</h3>
              <h5>
                <FaSun size="45" className="iconThing" />
              </h5>
              <p>Day:</p>
              <h5>{`${weather.daily[1].temp.day}° F`}</h5>
              <p>Night:</p>
              <h5>{`${weather.daily[1].temp.night}° F`}</h5>
            </Col>
            <Col className="box box-rest" xs>
              <p>High:</p>
              <h3>{`${weather.daily[0].temp.max}° F`}</h3>
              <h5>
                <FaSun size="45" className="iconThing" />
              </h5>
              <p>Day:</p>
              <h5>{`${weather.daily[2].temp.day}° F`}</h5>
              <p>Night:</p>
              <h5>{`${weather.daily[2].temp.night}° F`}</h5>
            </Col>
            <Col className="box box-rest" xs>
              <p>High:</p>
              <h3>{`${weather.daily[0].temp.max}° F`}</h3>
              <h5>
                <FaSun size="45" className="iconThing" />
              </h5>
              <p>Day:</p>
              <h5>{`${weather.daily[3].temp.day}° F`}</h5>
              <p>Night:</p>
              <h5>{`${weather.daily[3].temp.night}° F`}</h5>
            </Col>
            <Col className="box box-rest" xs>
              <p>High:</p>
              <h3>{`${weather.daily[0].temp.max}° F`}</h3>
              <h5>
                <FaSun size="45" className="iconThing" />
              </h5>
              <p>Day:</p>
              <h5>{`${weather.daily[4].temp.day}° F`}</h5>
              <p>Night:</p>
              <h5>{`${weather.daily[4].temp.night}° F`}</h5>
            </Col>
            <Col className="box box-rest" xs>
              <p>High:</p>
              <h3>{`${weather.daily[0].temp.max}° F`}</h3>
              <h5>
                <FaSun size="45" className="iconThing" />
              </h5>
              <p>Day:</p>
              <h5>{`${weather.daily[5].temp.day}° F`}</h5>
              <p>Night:</p>
              <h5>{`${weather.daily[5].temp.night}° F`}</h5>
            </Col>
            <Col className="box box-last" xs={{ order: "last" }}>
              <p>High:</p>
              <h3>{`${weather.daily[0].temp.max}° F`}</h3>
              <h5>
                <FaSun size="45" className="iconThing" />
              </h5>
              <p>Day:</p>
              <h5>{`${weather.daily[6].temp.day}° F`}</h5>
              <p>Night:</p>
              <h5>{`${weather.daily[6].temp.night}° F`}</h5>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Calendar;
