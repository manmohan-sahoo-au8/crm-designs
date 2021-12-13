import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import '../styles/desktop57.css';

export default class Desktop57 extends Component {
  render() {
    return (
      <div className="container">
        <div className="details-container">
          <p>Personal Details:</p>
          <p>Name:Vinod Pathak</p>
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
        <div style={{ width: '100%' }}>
          <Table style={{ columnWidth: '100px' }}>
            <Table>
              <thead>
                <tr style={{ backgroundColor: '#00A3FF' }}>
                  <th>#</th>
                  <th>Services</th>
                  <th>work</th>
                  <th style={{ wordWrap: 'break-word' }}>Part/Labour</th>
                  <th>QTY/Price $</th>
                  <th>Discount</th>
                  <th>Material Type</th>
                  <th>Depreciation</th>
                  <th>Salvage</th>
                  <th>Insurance Payable</th>
                  <th>Customer Payable</th>
                  <th>HSN/SAC</th>
                  <th>Tax%</th>
                  <th>Tax$</th>
                  <th>Total</th>
                </tr>
              </thead>
            </Table>
            <Table>
              <tbody>
                <tr>
                  <td>1</td>
                  <td style={{ backgroundColor: '#00A3FF2B' }}>
                    Cabin Filter / AC Filter
                  </td>
                  <td>Cleaned</td>
                  <td>Labour</td>
                  <td>--/2000</td>
                  <td>0</td>
                  <td>Lorem</td>
                  <td>50%</td>
                  <td>0%</td>
                  <td>1092.50</td>
                  <td>1207.50</td>
                  <td>87089524</td>
                  <td>28%</td>
                  <td>644.00</td>
                  <td>2944.00</td>
                </tr>
              </tbody>
            </Table>
            <Table>
              <tr>
                <td>2</td>
                <td style={{ backgroundColor: '#00A3FF2B' }}>Interior</td>
                <td>Cleaned</td>
                <td>Labour</td>
                <td>--/800</td>
                <td>0</td>
                <td>Lorem</td>
                <td>50%</td>
                <td>0%</td>
                <td>1092.50</td>
                <td>1207.50</td>
                <td>87089524</td>
                <td>28%</td>
                <td>644.00</td>
                <td>2944.00</td>
              </tr>
            </Table>
            <Table>
              <tr>
                <td>3</td>
                <td style={{ backgroundColor: '#00A3FF2B' }}>Brake Fluid</td>
                <td>Top-up</td>
                <td>Labour</td>
                <td>--/248 </td>
                <td>0</td>
                <td>Lorem</td>
                <td>50%</td>
                <td>0%</td>
                <td>1092.50</td>
                <td>1207.50</td>
                <td>87089524</td>
                <td>28%</td>
                <td>644.00</td>
                <td>2944.00</td>
              </tr>
            </Table>
            <Table>
              <tr>
                <td>4</td>
                <td style={{ backgroundColor: '#00A3FF2B' }}>Coolant</td>
                <td>Top-up</td>
                <td>Labour</td>
                <td>--/2000</td>
                <td>0</td>
                <td>Lorem</td>
                <td>50%</td>
                <td>0%</td>
                <td>1092.50</td>
                <td>1207.50</td>
                <td>87089524</td>
                <td>28%</td>
                <td>644.00</td>
                <td>2944.00</td>
              </tr>
            </Table>
          </Table>
        </div>
      </div>
    );
  }
}
