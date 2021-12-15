import React from 'react';
import { Table, Button, Form } from 'react-bootstrap';
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
        <p>Wash & Detaling Services</p>
        <div className="service-container">
          <table class="table">
            <tr className="trheader">
              <td>#</td>
              <td>Services</td>
              <td>Lorem</td>
            </tr>

            <tr>
              <td>
                <Form.Group>
                  <Form.Check type="checkbox" label="" />
                </Form.Group>
              </td>
              <td style={{ backgroundColor: '#00A3FF2B' }}>Lorem Ipsum</td>

              <td>Yes</td>
            </tr>
            <tr>
              <td>
                <Form.Group>
                  <Form.Check type="checkbox" label="" />
                </Form.Group>
              </td>
              <td style={{ backgroundColor: '#00A3FF2B' }}>Lorem Ipsum</td>
              <td>No</td>
            </tr>
            <tr>
              <td>
                <Form.Group>
                  <Form.Check type="checkbox" label="" />
                </Form.Group>
              </td>
              <td style={{ backgroundColor: '#00A3FF2B' }}>Lorem Ipsum</td>

              <td>No</td>
            </tr>
            <tr>
              <td>
                <Form.Group>
                  <Form.Check type="checkbox" label="" />
                </Form.Group>
              </td>
              <td style={{ backgroundColor: '#00A3FF2B' }}>Lorem Ipsum</td>
              <td>Yes</td>
            </tr>
          </table>
        </div>
        <Button className="in-prgress-button">Ok</Button>
      </>
    );
  }
}
