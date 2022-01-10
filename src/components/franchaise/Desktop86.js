import React, { Component } from 'react';

import '../../styles/desktop86.css';
import monitor from '../../images/monitor.png';
import research from '../../images/research.png';
import google_docs from '../../images/google-docs.png';
import loupe from '../../images/loupe.png';

export default class Desktop86 extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-sm-4 me-4" id="monitocard">
              <img className="mt-4" src={monitor} alt="" />
              <p className="mt-4">
                <b> Workstation Dashboard</b>
              </p>
            </div>
            <div className="col-sm-4 me-4" id="monitocard">
              <img className="mt-4" src={google_docs} alt="" />
              <p className="mt-4">
                <b> Documents</b>
              </p>
            </div>
            <div className="col-sm-4 me-4" id="monitocard">
              <img className="mt-4" src={research} alt="" />
              <p className="mt-4">
                <b> Workshop Overview</b>
              </p>
            </div>
            <div className="col-sm-4 me-4" id="monitocard">
              <img className="mt-4" src={loupe} alt="" />
              <p className="mt-4">
                <b> Business Overview </b>
              </p>
            </div>
          </div>

          <div className="first_div">
            <div className="p-5">
              <div className="d-flex name_div">
                <p className="name_para">Name</p>
                <button className="moreinfo_button">More info</button>
              </div>
              <div className="d-flex mt-2 name_div">
                <p className="name_para">Address</p>
                <button className="moreinfo_button">More info</button>
              </div>
              <div className="d-flex mt-2">
                <p className="name_para">Code</p>
                <button className="moreinfo_button">More info</button>
              </div>
            </div>
          </div>

          <div className="second_div">
            <div className="p-5">
              <div className="d-flex">
                <p className="intitation_para">Inititation Date</p>
                <button className="moreinfo_button">More info</button>
              </div>
            </div>
          </div>

          <div className="third_div">
            <div className="p-5">
              <div className="d-flex name_div">
                <p className="name_para">Franchise Agreemment</p>
                <button className="moreinfo_button">
                  <i class="far fa-eye">View</i>
                </button>
                <button className="download_button">
                  <i class="fas fa-download">Download</i>
                </button>
              </div>
              <div className="d-flex mt-2 name_div">
                <p className="name_para">Rent Agreement</p>
                <button className="moreinfo_button">
                  <i class="far fa-eye">View</i>
                </button>
                <button className="download_button">
                  <i class="fas fa-download">Download</i>
                </button>
              </div>
              <div className="d-flex mt-2 name_div">
                <p className="name_para">GST</p>
                <button className="moreinfo_button">
                  <i class="far fa-eye">View</i>
                </button>
                <button className="download_button">
                  <i class="fas fa-download">Download</i>
                </button>
              </div>
              <div className="d-flex mt-2 name_div">
                <p className="name_para">IT Return</p>
                <button className="moreinfo_button">
                  <i class="far fa-eye">View</i>
                </button>
                <button className="download_button">
                  <i class="fas fa-download">Download</i>
                </button>
              </div>
              <div className="d-flex mt-2 ">
                <p className="name_para">Owner’s KYC</p>
                <button className="moreinfo_button">
                  <i class="far fa-eye">View</i>
                </button>
                <button className="download_button">
                  <i class="fas fa-download">Download</i>
                </button>
              </div>
            </div>
          </div>

          <div className=" d-flex next ">
            <i class="fas fa-caret-left fa-2x me-3 "></i>
            <p className="next_para me-3 mt-2">Next</p>
            <i class="fas fa-caret-right fa-2x me-3"></i>
          </div>
        </div>
      </div>
    );
  }
}
