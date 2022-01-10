import React, { Component } from 'react';

import '../../styles/desktop90.css';

import monitor from '../../images/monitor.png';
import research from '../../images/research.png';
import google_docs from '../../images/google-docs.png';
import loupe from '../../images/loupe.png';

export default class Desktop90 extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-sm-4 me-4" id="monitorcard">
              <img className="mt-4" src={monitor} alt="" />
              <p className="mt-4">
                <b> Workstation Dashboard</b>
              </p>
            </div>
            <div className="col-sm-4 me-4" id="monitorcard">
              <img className="mt-4" src={google_docs} alt="" />
              <p className="mt-4">
                <b> Documents</b>
              </p>
            </div>
            <div className="col-sm-4 me-4" id="monitorcard">
              <img className="mt-4" src={research} alt="" />
              <p className="mt-4">
                <b> Workshop Overview</b>
              </p>
            </div>
            <div className="col-sm-4 me-4" id="monitorcard">
              <img className="mt-4" src={loupe} alt="" />
              <p className="mt-4">
                <b> Business Overview </b>
              </p>
            </div>
          </div>
        </div>
        <div className="workshop_div">Dashboard/ Business Overview</div>

        <div className="container">
          <div className="first_business1_div">
            <p className="businessoverview_p_tag">BUSINESS OVERVIEW</p>
            <p className="singleday_p_tag">January</p>
            <div className="second_date1_tag">
              <button className="month_button me-2">Month</button>
              <button className="month_button me-2">Year</button>
              <input type="date" className="input_tag " />
            </div>
          </div>
          <div className="container" id="table_div">
            <div className="row">
              <div className="col-7">
                <table className="first_table_div">
                  <tr>
                    <td>Total Backlog Car</td>
                    <td>0000</td>
                  </tr>
                  <tr>
                    <td>Total Vehicle</td>
                    <td>0000</td>
                  </tr>
                  <tr>
                    <td>Total Vehicle Delivered </td>
                    <td>0000</td>
                  </tr>
                  <tr>
                    <td>Same Day Delivery</td>
                    <td>0000</td>
                  </tr>
                  <tr>
                    <td>Number of Jobcard Created </td>
                    <td>0000</td>
                  </tr>
                  <tr>
                    <td>Number CHR Created</td>
                    <td>0000</td>
                  </tr>
                  <tr>
                    <td> Number of Estimation Created</td>
                    <td>0000</td>
                  </tr>
                  <tr>
                    <td>Number of Approval Taken</td>
                    <td>0000</td>
                  </tr>
                  <tr>
                    <td> Number of Bills Created</td>
                    <td>0000</td>
                  </tr>
                  <tr>
                    <td>TTotal Estimation Created</td>
                    <td>0000</td>
                  </tr>
                  <tr>
                    <td> Total Approval Taken </td>
                    <td>0000</td>
                  </tr>
                  <tr>
                    <td> Total Sales</td>
                    <td>0000</td>
                  </tr>
                  <tr>
                    <td>Number of Walkin Vehicler</td>
                    <td>0000</td>
                  </tr>
                  <tr>
                    <td>Number of Pickup Vehicle</td>
                    <td>0000</td>
                  </tr>
                  <tr>
                    <td>Positive/Negative Reviews</td>
                    <td>0000</td>
                  </tr>
                </table>
              </div>
              <div className="col-5">
                <table className="second_table_div">
                  <thead>
                    <tr>
                      <th>Services</th>
                      <th>Total Number</th>
                      <th>Total Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>General Services</td>
                      <td>0000</td>
                      <td>₹ 0000</td>
                    </tr>
                    <tr>
                      <td>Luxury Cars</td>
                      <td>0000</td>
                      <td>₹ 0000</td>
                    </tr>
                    <tr>
                      <td>Total Car Washed</td>
                      <td>0000</td>
                      <td>₹ 0000</td>
                    </tr>
                    <tr>
                      <td>Washing Only</td>
                      <td>0000</td>
                      <td>₹ 0000</td>
                    </tr>
                    <tr>
                      <td>Detailing</td>
                      <td>0000</td>
                      <td>₹ 0000</td>
                    </tr>
                    <tr>
                      <td>Denting & Painting</td>
                      <td>0000</td>
                      <td>₹ 0000</td>
                    </tr>
                    <tr>
                      <td>Battery</td>
                      <td>0000</td>
                      <td>₹ 0000</td>
                    </tr>
                    <tr>
                      <td>Tyres</td>
                      <td>0000</td>
                      <td>₹ 0000</td>
                    </tr>
                    <tr>
                      <td>Wheel Alignment</td>
                      <td>0000</td>
                      <td>₹ 0000</td>
                    </tr>
                    <tr>
                      <td>Wheel Balancing</td>
                      <td>0000</td>
                      <td>₹ 0000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
