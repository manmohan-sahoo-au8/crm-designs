import React, { Component } from 'react';
import { Button, Table } from 'react-bootstrap';
import '../styles/desktop57.css';

export default class Desktop57 extends Component {
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
        </div>
        <div>
          <table className="table-div-container">
            <table className="table-details-container">
              <tr className="table-header">
                <td>#</td>
                <td>Services</td>
                <td>work</td>
                <td>Part/Labour</td>
                <td>QTY/Price $</td>
                <td>Discount</td>
                <td>Material Type</td>
                <td>Depreciation</td>
                <td>Salvage</td>
                <td>Insurance Payable</td>
                <td>Customer Payable</td>
                <td>HSN/SAC</td>
                <td>Tax%</td>
                <td>Tax$</td>
                <td>Total</td>
              </tr>

              <tr>
                <td>1</td>
                <td>Cabin Filter / AC Filter</td>
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

              <tr>
                <td>2</td>
                <td>Interior</td>
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

              <tr>
                <td>3</td>
                <td>Brake Fluid</td>
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

              <tr>
                <td>4</td>
                <td>Coolant</td>
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
            </table>
            <div className="container">
              <div className="row">
                <div className="col">
                  <h4>REMARKS</h4>
                  <p>Customer Remarks lorem ipsum</p>
                </div>
                <div className="col">
                  <table className="amount-container">
                    <tr>
                      <td>Gross Amount</td>
                      <td>5737.0</td>
                    </tr>
                    <tr>
                      <td>Discount</td>
                      <td>0.0</td>
                    </tr>
                    <tr>
                      <td>Net Labour CGST</td>
                      <td>465.87</td>
                    </tr>
                    <tr>
                      <td>Net Labour SGST</td>
                      <td>266.87</td>
                    </tr>
                    <tr>
                      <td>Taxable Amount</td>
                      <td>4265.87</td>
                    </tr>
                    <tr>
                      <td>Net Price</td>
                      <td>5197</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </table>
        </div>
      </div>
    );
  }
}
