import React from "react";
import { Table, Form } from "react-bootstrap";
import "../desktop63.css";

export default class Desktop57 extends React.Component {
  render() {
    return (
      <div>
        <Table style={{ width: "50%" }}>
          <Table>
            <thead>
              <tr style={{ backgroundColor: "#00A3FF" }}>
                <th>#</th>
                <th>Services</th>
                <th>Lorem</th>
                <th>Image</th>
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
              <td style={{ background: "#00A3FF2B" }}>Lorem Ipsum</td>
              <td>Lorem</td>
              <td>
                <img src="" alt="logo" />
              </td>
            </tr>
          </Table>
          <Table>
            <tr>
              <td>
                <Form.Group>
                  <Form.Check type="checkbox" label="2" />
                </Form.Group>
              </td>
              <td style={{ background: "#00A3FF2B" }}>Lorem Ipsum</td>
              <td>Lorem</td>
              <td>
                <img src="" alt="logo" />
              </td>
            </tr>
          </Table>
          <Table>
            <tr>
              <td>
                <Form.Group>
                  <Form.Check type="checkbox" label="3" />
                </Form.Group>
              </td>
              <td style={{ background: "#00A3FF2B" }}>Lorem Ipsum</td>
              <td>Lorem</td>
              <td>
                <img src="" alt="logo" />
              </td>
            </tr>
          </Table>
          <Table>
            <tr>
              <td>
                <Form.Group>
                  <Form.Check type="checkbox" label="4" />
                </Form.Group>
              </td>
              <td style={{ background: "#00A3FF2B" }}>Lorem Ipsum</td>
              <td>Lorem</td>
              <td>
                <img src="" alt="logo" />
              </td>
            </tr>
          </Table>
        </Table>
      </div>
    );
  }
}
