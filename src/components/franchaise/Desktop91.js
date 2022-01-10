import React, { Component } from 'react';
import '../../styles/desktop91.css';

export default class Desktop91 extends Component {
  render() {
    return (
      <div className="container mt-5">
        <div className="d-flex">
          <h2 className="selectfranchise_h2 me-4">SELECT THE FRANCHISE </h2>
          <input
            className="search_input me-4"
            type="text"
            placeholder="Search"
          />
          <button className="kol_button me-4">Kolkata</button>
        </div>
        <div className="mt-3">
          <table className="franshise_table ">
            <tbody>Lorem ipsum dolor </tbody>
            <tbody>Lorem ipsum dolor </tbody>
            <tbody>Lorem ipsum dolor </tbody>
            <tbody>Lorem ipsum dolor </tbody>
            <tbody>Lorem ipsum dolor </tbody>
            <tbody>Lorem ipsum dolor </tbody>
            <tbody>Lorem ipsum dolor </tbody>
            <tbody>Lorem ipsum dolor </tbody>
            <tbody>Lorem ipsum dolor </tbody>
            <tbody>Lorem ipsum dolor </tbody>
          </table>
        </div>
      </div>
    );
  }
}
