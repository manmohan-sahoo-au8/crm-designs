import React from 'react';
import { Table, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/android106.css';

export default class Desktop85 extends React.Component {
  render() {
    return (
      <>
        <div className="table-container">
          <div className="order-container">
            <Table className="table-container-3">
              <tbody>
                <tr>
                  <td>25/09/2021</td>
                </tr>
                <tr>
                  <td scope="row">Order ID 5894715684</td>
                </tr>

                <tr>
                  <td scope="row">Car number WB20AU7142</td>
                  <td>
                    <Button className="in-prgress-button">In Progress</Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
        <p className="work">Work Request</p>
        <div class="carcontainer">
          <div class="row">
            <div className="cardiv">
              <i class="fas fa-car fa-3x"></i>
              <h4>Denting</h4>
            </div>
            <div className="cardiv">
              <i class="fas fa-car fa-3x"></i>
              <h4>Wash & Detalling Services</h4>
            </div>
          </div>
          <div class="row">
            <div className="cardiv">
              <i class="fas fa-car fa-3x"></i>
              <h4>Wheel Alignment</h4>
            </div>
            <div className="cardiv">
              <i class="fas fa-car fa-3x"></i>
              <h4>Types & Services</h4>
            </div>
          </div>
          <div class="row">
            <div className="cardiv">
              <i class="fas fa-car fa-3x"></i>
              <h4>Wheel Balancing</h4>
            </div>
            <div className="cardiv">
              <i class="fas fa-car fa-3x"></i>
              <img src="" alt="" />
              <h4>PMS & Check-Ups</h4>
            </div>
          </div>
        </div>

        <Button className="in-prgress-button">Next</Button>
      </>
    );
  }
}
