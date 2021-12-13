import React from "react";
import { Table, Form } from "react-bootstrap";
import "../desktop63.css";

export default class Desktop10 extends React.Component {
  render() {
    return (
      <div>
        <Table style={{ width: "50%" }}>
          <Table>
            <thead>
              <tr style={{ backgroundColor: "#00A3FF" }}>
                <th>#</th>
                <th>Services</th>
                <th>work</th>
                <th>Part/Labour</th>
                <th>Material Type</th>
                <th>HSN/SAC</th>
              </tr>
            </thead>
          </Table>
          <Table>
            <tr>
              <td>
                <Form.Group>
                  <Form.Check type="checkbox" label="1" />
                </Form.Group>
              </td>
              <td style={{ backgroundColor: "#00A3FF2B" }}>
                Cabin Filter / AC Filter
              </td>
              <td>Cleaned</td>
              <td>Labour</td>
              <td>Lorem</td>
              <td>87089524</td>
            </tr>
          </Table>
          <Table>
            <tr>
              <td>
                <Form.Group>
                  <Form.Check type="checkbox" label="2" />
                </Form.Group>
              </td>
              <td style={{ backgroundColor: "#00A3FF2B" }}>Interior</td>
              <td>Cleaned</td>
              <td>Labour</td>
              <td>Lorem</td>
              <td>87089524</td>
            </tr>
          </Table>
          <Table>
            <tr>
              <td>
                <Form.Group>
                  <Form.Check type="checkbox" label="3" />
                </Form.Group>
              </td>
              <td style={{ backgroundColor: "#00A3FF2B" }}>Brake Fluid</td>
              <td>Cleaned</td>
              <td>Labour</td>
              <td>Lorem</td>
              <td>87089524</td>
            </tr>
          </Table>
          <Table>
            <tr>
              <td>
                <Form.Group>
                  <Form.Check type="checkbox" label="4" />
                </Form.Group>
              </td>
              <td style={{ backgroundColor: "#00A3FF2B" }}>Coolant</td>
              <td>Top-up</td>
              <td>Labour</td>
              <td>Lorem</td>
              <td>87089524</td>
            </tr>
          </Table>
        </Table>
      </div>
    );
  }
}
