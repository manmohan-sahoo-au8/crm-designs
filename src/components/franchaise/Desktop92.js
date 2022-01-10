import React, { Component } from 'react';

import '../../styles/desktop92.css';

import monitor from '../../images/monitor.png';
import research from '../../images/research.png';
import google_docs from '../../images/google-docs.png';
import loupe from '../../images/loupe.png';

export default class Desktop92 extends Component {
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
        <div className="workshop_div">Dashboard/ Workshop Overview</div>

        <div className="container">
          <div className="first_business_div">
            <p className="business_p_tag">BUSINESS OVERVIEW</p>
            <p className="today_p_tag">Today</p>
          </div>
          <div className="second_date_tag">
            <button className="month_button me-2">Month</button>
            <button className="month_button me-2">Year</button>
            <input type="date" className="input_tag " />
          </div>
          <table className="third_car_div">
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
      </div>
    );
  }
}
