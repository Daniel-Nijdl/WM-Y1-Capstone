import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

const Calendar = () => {
  return(

    <div className="card border-primary mb-3 calendar" >
      <div className="card-header">Monthly Temperature</div>
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
      

  25


      </Col>
    <Col className="box" xs>26</Col>
    <Col className="box" xs>27</Col>
    <Col className="box" xs>28</Col>
    <Col className="box" xs>29</Col>
    <Col className="box" xs>30</Col>
    <Col className="box" xs={{ order: 'last' }}>1</Col>
  </Row>

  <Row>
    <Col className="box" xs={{ order: 'first' }}>2</Col>
    <Col className="box" xs>3</Col>
    <Col className="box" xs>4</Col>
    <Col className="box" xs>5</Col>
    <Col className="box" xs>6</Col>
    <Col className="box" xs>7</Col>
    <Col className="box" xs={{ order: 'last' }}>8</Col>
  </Row>

  <Row>
    <Col className="box" xs={{ order: 'first' }}>9</Col>
    <Col className="box" xs>10</Col>
    <Col className="box" xs>11</Col>
    <Col className="box" xs>12</Col>
    <Col className="box" xs>13</Col>
    <Col className="box" xs>14</Col>
    <Col className="box" xs={{ order: 'last' }}>15</Col>
  </Row>

  <Row>
    <Col className="box" xs={{ order: 'first' }}>16</Col>
    <Col className="box" xs>17</Col>
    <Col className="box" xs>18</Col>
    <Col className="box" xs>19</Col>
    <Col className="box" xs>20</Col>
    <Col className="box" xs>21</Col>
    <Col className="box" xs={{ order: 'last' }}>22</Col>
  </Row>

  <Row>
    <Col className="box" xs={{ order: 'first' }}>23</Col>
    <Col className="box" xs>24</Col>
    <Col className="box" xs>25</Col>
    <Col className="box" xs>26</Col>
    <Col className="box" xs>27</Col>
    <Col className="box" xs>28</Col>
    <Col className="box" xs={{ order: 'last' }}>29</Col>
  </Row>

  <Row>
    <Col className="box" xs={{ order: 'first' }}>30</Col>
    <Col className="box" xs>31</Col>
    <Col className="box" xs>1</Col>
    <Col className="box" xs>2</Col>
    <Col className="box" xs>3</Col>
    <Col className="box" xs>4</Col>
    <Col className="box" xs={{ order: 'last' }}>5</Col>
  </Row>

</Container>

      </div>
    </div>
    
       
      
 


  )
}



export default Calendar;