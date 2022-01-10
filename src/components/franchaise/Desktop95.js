import React, { Component } from 'react';

import '../../styles/desktop95.css';

export default class Desktop95 extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <p className="dashboard_div">Dashboard/Franchise</p>
          <div className="franchise_container">
            <button className="filter_button">Filter</button>
            <div className="row" id="name_row">
              <div className="col" id="name_col">
                <p>Name:</p>
                <input type="text" />
              </div>
              <div className="col">
                <p>Workstation:</p>
                <input type="text" />
              </div>
              <div className="col">
                <p>initiation Date:</p>
                <input type="text" />
              </div>
              <div className="col">
                <p>Franchise Code :</p>
                <input type="text" />
              </div>
            </div>
            <button className="submit_buton">Submit</button>
          </div>
        </div>
        <div className="container">
          <div className="franchise_second_container">
            <button className="create_button">
              <i class="fas fa-plus-circle">Create</i>
            </button>
            <p className="franchise_p_tag">FRANCHISE</p>
            <div className="table_thead">
              <table class="table ">
                <thead>
                  <tr>
                    <th scope="col">No.</th>
                    <th scope="col">Name</th>
                    <th scope="col">Workstation</th>
                    <th scope="col">Total Employee</th>
                    <th scope="col">Initiation Date</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Lorem</td>
                    <td>Lorem</td>
                    <td>80</td>
                    <td>22/12/2021</td>
                    <td>
                      <button id="edit_icon">
                        <i class="far fa-edit">Edit</i>
                      </button>
                      <button id="delete_icon">
                        <i class="fas fa-trash-alt">Delete</i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Lorem</td>
                    <td>Lorem</td>
                    <td>80</td>
                    <td>22/12/2021</td>
                    <td>
                      <button id="edit_icon">
                        <i class="far fa-edit">Edit</i>
                      </button>
                      <button id="delete_icon">
                        <i class="fas fa-trash-alt">Delete</i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
