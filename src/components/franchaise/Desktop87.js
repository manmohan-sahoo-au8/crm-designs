import React, { Component } from 'react';

import '../../styles/desktop87.css';
import monitor from '../../images/monitor.png';
import research from '../../images/research.png';
import google_docs from '../../images/google-docs.png';
import loupe from '../../images/loupe.png';
import rectangle from '../../images/Rectangle 301.png';

export default class Desktop87 extends Component {
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

          <div className="dashboard_div">Dashboard/ Workshop Overview</div>

          <div className="workshopview_pverview ">
            <div className="container">
              <p className="workshop_p ">WORKSHOP OVERVIEW</p>
              <div className="d-flex wsphoto_div">
                <p className="name_para">WS Photo</p>
                <div className="image_div">
                  <img className="me-3" src={rectangle} alt="" />
                  <img className="me-3" src={rectangle} alt="" />
                  <img className="me-3" src={rectangle} alt="" />
                </div>
                <button className="moreinfo_button">
                  <i class="far fa-eye">View</i>
                </button>
                <button className="download_button">
                  <i class="fas fa-download">Download</i>
                </button>
              </div>
              <div className="wsphoto_div">
                <div className="d-flex ">
                  <p className="name_para">Tools & Machinery Details</p>
                  <button className="moreinfo_button">More info</button>
                </div>
                <p className="wasphoto_div_p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  lacus odio consectetur mattis viverra suspendisse lorem
                  tempor. Suspendisse eget amet fames mi et ante semper
                  consectetur urna.
                </p>
              </div>
              <div className="wsphoto_div">
                <div className="d-flex ">
                  <p className="name_para">Owner Detail </p>
                  <button className="kyc_button">KYC & Other Detail</button>
                </div>
                <p className="wasphoto_div_p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  lacus odio consectetur mattis viverra suspendisse lorem
                  tempor. Suspendisse eget amet fames mi et ante semper
                  consectetur urna.
                </p>
              </div>
              <div className="mt-3">
                <div className="d-flex ">
                  <p className="name_para">Employee Detail </p>
                  <button className="moreinfo_button">More info</button>
                </div>
                <p className="wasphoto_div_p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  lacus odio consectetur mattis viverra suspendisse lorem
                  tempor. Suspendisse eget amet fames mi et ante semper
                  consectetur urna.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
