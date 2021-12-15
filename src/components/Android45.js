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
        <p>Vechile Details:</p>
        <div className="detaildiv">
          <p>Brand:Chevrolet</p>
          <p>Model:Optra</p>
          <p>Regno:KA19MF0622</p>
          <p>Odometer Rd:1234</p>
          <p>Fuel Type:Petrol</p>
          <p>Fuel Status: 20.0%</p>
          <p>Battery Details:Exide</p>
        </div>
      </>
    );
  }
}
