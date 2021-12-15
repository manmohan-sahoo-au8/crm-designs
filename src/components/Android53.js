import React from 'react';
import { Table, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/android45.css';

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
        <p>Work Request</p>
        <div class="container">
          <div class="row">
            <div class="col">
              <i class="fas fa-car">Denting</i>
            </div>
            <div class="col">
              {' '}
              <i class="fas fa-car">Washing & Servicing</i>
            </div>
          </div>
          <div class="row">
            <div class="col">
              {' '}
              <i class="fas fa-car">Wheel Alignment</i>
            </div>
            <div class="col">
              {' '}
              <i class="fas fa-car">Types & Services</i>
            </div>
          </div>
          <div class="row">
            <div class="col">
              {' '}
              <i class="fas fa-car">Wheel Balancing</i>
            </div>
            <div class="col">
              {' '}
              <i class="fas fa-car">PMS & Check-Ups</i>
            </div>
          </div>
        </div>
        <Button className="in-prgress-button">Next</Button>
      </>
    );
  }
}
