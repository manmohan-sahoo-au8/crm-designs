import React from 'react';
import { Table, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/desktop85.css';

export default class Desktop85 extends React.Component {
  render() {
    return (
      <>
        <div className="table-container">
          <div className="pickup-container">
            <Table className="table-container1">
              <thead>
                <tr>
                  <th scope="row">New Request-Pickup</th>
                  <td>
                    {' '}
                    <Button className="accept-button">Accept</Button>
                    <Button className="reject-button">Reject</Button>
                  </td>
                </tr>
              </thead>
            </Table>
          </div>
        </div>
        <div className="table-container">
          <div className="order-container">
            <Table className="table-container-3">
              <tbody>
                <th scope="row">
                  <p className="order">Order Id</p>
                </th>
                <th scope="row">
                  <p className="status">Status</p>
                </th>
                <tr>
                  <th scope="row">5894715684</th>
                  <td>
                    <Button className="in-process-button">In Process</Button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">5894715684</th>
                  <td>
                    <Button className="in-prgress-button">In Progress</Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
        <div className="table-container">
          <div className="completed-container">
            <Table className="">
              <tbody>
                <th scope="row">
                  <p className="order">Order Id</p>
                </th>
                <th scope="row">
                  <p className="status">Status</p>
                </th>
                <tr>
                  <th scope="row">5894715684</th>
                  <td>
                    <Button className="completed-button">Completed</Button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">5894715684</th>
                  <td>
                    <Button className="completed-button">Completed</Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </>
    );
  }
}
