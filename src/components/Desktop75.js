import React from "react";
import { Chart } from "react-google-charts";
import { Container, Row, Table } from "react-bootstrap";

export default class Desktop57 extends React.Component {
  render() {
    return (
      <>
        <div>
          <Container
            style={{ display: "flex", marginTop: "20px", textAlign: "left" }}
          >
            <Row
              style={{
                width: "547px",
                height: "261px",
                background: "#E7FBFF",
                boxShadow: "2px 4px 5px rgba(0, 0, 0, 0.25)",
                borderRadius: "10px"
              }}
            >
              <Chart
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                data={[
                  ["Task", "Hours per Day"],
                  ["Denting", 11],
                  ["Wheel Alignment", 2],
                  ["Wheel Balancing", 2],
                  ["Wash & Detailing", 2]
                ]}
                options={{
                  title: "Services",
                  backgroundColor: "#E7FBFF",
                  // Just add this option
                  pieHole: 0.8
                }}
              />
            </Row>
            <Row
              style={{
                width: "547px",
                height: "261px",
                background: "#E7FBFF",
                boxShadow: "2px 4px 5px rgba(0, 0, 0, 0.25)",
                borderRadius: "10px",
                marginLeft: "36px"
              }}
            >
              <div tyle={{ padding: "20px" }}>
                <Table responsive="sm">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Time</th>
                      <th>Available</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>24/12/20</td>
                      <td>Diwali</td>
                      <td>3 days</td>
                    </tr>
                    <tr>
                      <td>24/12/20</td>
                      <td>Diwali</td>
                      <td>3 days</td>
                    </tr>
                    <tr>
                      <td>24/12/20</td>
                      <td>Diwali</td>
                      <td>3 days</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Row>
          </Container>
        </div>

        <div style={{ marginLeft: "350px", padding: "10px" }}>
          <Chart
            width={"758px"}
            height={"306px"}
            chartType="Bar"
            loader={<div>Loading Chart</div>}
            data={[
              ["", "", ""],
              ["Jan", 18, 15],
              ["Feb", 20, 25],
              ["Mar", 20, 25],
              ["april", 30, 16],
              ["May", 30, 16],
              ["june", 22, 26],
              ["july", 18, 16],
              ["sep", 21, 19],
              ["Oct", 16, 25],
              ["Nov", 15, 23],
              ["Dec", 19, 24]
            ]}
            options={{
              // Material design options
              chart: {
                title: "Monthly Report"
              }
            }}
          />
        </div>
        <div>
          <Container
            style={{ display: "flex", marginTop: "20px", textAlign: "left" }}
          >
            <Row
              style={{
                width: "455px",
                height: "80px",
                background: "#E7FBFF",
                boxShadow: "2px 4px 5px rgba(0, 0, 0, 0.25)",
                borderRadius: "10px"
              }}
            >
              <p
                style={{
                  fontFamily: "Roboto",
                  fontSize: "17px",
                  color: "#00000"
                }}
              >
                New Order
              </p>
              <p
                style={{
                  fontFamily: "Roboto",
                  fontSize: "14px",
                  color: "#00000"
                }}
              >
                Lorem ipsum
              </p>
            </Row>
            <Row
              style={{
                width: "455px",
                height: "80px",
                background: "#E7FBFF",
                boxShadow: "2px 4px 5px rgba(0, 0, 0, 0.25)",
                borderRadius: "10px",
                marginLeft: "36px"
              }}
            >
              <p
                style={{
                  fontFamily: "Roboto",
                  fontSize: "17px",
                  color: "#00000"
                }}
              >
                In Process
              </p>
              <p
                style={{
                  fontFamily: "Roboto",
                  fontSize: "14px",
                  color: "#00000"
                }}
              >
                Lorem ipsum
              </p>
            </Row>
            <Row
              style={{
                width: "455px",
                height: "80px",
                background: "#E7FBFF",
                boxShadow: "2px 4px 5px rgba(0, 0, 0, 0.25)",
                borderRadius: "10px",
                marginLeft: "36px"
              }}
            >
              <p
                style={{
                  fontFamily: "Roboto",
                  fontSize: "17px",
                  color: "#00000"
                }}
              >
                In Progress
              </p>
              <p
                style={{
                  fontFamily: "Roboto",
                  fontSize: "14px",
                  color: "#00000"
                }}
              >
                Lorem ipsum
              </p>
            </Row>
            <Row
              style={{
                width: "455px",
                height: "80px",
                background: "#E7FBFF",
                boxShadow: "2px 4px 5px rgba(0, 0, 0, 0.25)",
                borderRadius: "10px",
                marginLeft: "36px"
              }}
            >
              <p
                style={{
                  fontFamily: "Roboto",
                  fontSize: "17px",
                  color: "#00000"
                }}
              >
                Completed
              </p>
              <p
                style={{
                  fontFamily: "Roboto",
                  fontSize: "14px",
                  color: "#00000"
                }}
              >
                Lorem ipsum
              </p>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}
