import React from 'react';
import { Button, Table, Form } from 'react-bootstrap';
import '../styles/desktop10.css';

export default class Desktop10 extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="details-container">
          <p>Personal Details:</p>
          <p>Name:Vinod Patdak</p>
          <p>Order Id: 202010065712498</p>
          <p>Mobile : 9731942819</p>
          <p>Voucher type : Basic</p>
        </div>
        <div className="vechile-details-container">
          <p>Vechile Details:</p>
          <p>Brand : Chevrolet</p>
          <p>Battery Details : Exide </p>
          <p>Fuel Type : Petrol</p>
          <p>Fuel Status : 20.0 %</p>
          <p>Odometer Rd : 1234</p>
          <p>Reg no : KA19MF0622</p>
          <p>Model : Optra</p>
        </div>
        <div className="garage-details-container">
          <p>Garage Booking Details:</p>
          <i class="fas fa-warehouse">Workshop</i>
          <i class="far fa-calendar-alt">Pickup Date</i>
          <i class="far fa-clock">Pickup Time</i>
        </div>
        <div className="button-div">
          <Button>Estimation</Button>
          <Button>Accessories & Document</Button>
          <Button>Car photos</Button>
        </div>
        <div className="service-container">
          <table>
            <tr className="trheader">
              <td>#</td>
              <td>Services</td>
              <td>work</td>
              <td>Part/Labour</td>
              <td>Material Type</td>
              <td>HSN/SAC</td>
            </tr>
          </table>
          <table class="table">
            <tr>
              <td>
                <Form.Group>
                  <Form.Check type="checkbox" label="1" />
                </Form.Group>
              </td>
              <td style={{ backgroundColor: '#00A3FF2B' }}>
                Cabin Filter / AC Filter
              </td>
              <td>Cleaned</td>
              <td>Labour</td>
              <td>Lorem</td>
              <td>87089524</td>
            </tr>
            <tr>
              <td>
                <Form.Group>
                  <Form.Check type="checkbox" label="2" />
                </Form.Group>
              </td>
              <td style={{ backgroundColor: '#00A3FF2B' }}>Interior</td>
              <td>Cleaned</td>
              <td>Labour</td>
              <td>Lorem</td>
              <td>87089524</td>
            </tr>
            <tr>
              <td>
                <Form.Group>
                  <Form.Check type="checkbox" label="3" />
                </Form.Group>
              </td>
              <td style={{ backgroundColor: '#00A3FF2B' }}>Brake Fluid</td>
              <td>Cleaned</td>
              <td>Labour</td>
              <td>Lorem</td>
              <td>87089524</td>
            </tr>
            <tr>
              <td>
                <Form.Group>
                  <Form.Check type="checkbox" label="4" />
                </Form.Group>
              </td>
              <td style={{ backgroundColor: '#00A3FF2B' }}>Coolant</td>
              <td>Top-up</td>
              <td>Labour</td>
              <td>Lorem</td>
              <td>87089524</td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}
