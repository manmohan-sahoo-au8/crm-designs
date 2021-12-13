import React from "react";
import { Table, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

export default class Desktop57 extends React.Component {
  render() {
    return (
      <>
        <div
          style={{
            padding: "20px"
          }}
        >
          <div
            style={{
              backgroundColor: "#D4F0FF",
              width: "602px",
              height: "40px",
              borderRadius: "5px"
            }}
          >
            <div>
              New Request-Pickup
              <Button
                style={{
                  backgroundColor: "#4CAA44",
                  borderRadius: "4px",
                  height: "25px",
                  width: "82px",
                  fontWeight: "500",
                  fontSize: "12px",
                  marginLeft: "280px"
                }}
              >
                Accept
              </Button>
              <Button
                style={{
                  backgroundColor: "#FC2F2F",
                  borderRadius: "4px",
                  height: "25px",
                  width: "82px",
                  fontWeight: "500",
                  fontSize: "12px",
                  marginLeft: "10px"
                }}
              >
                Reject
              </Button>
            </div>
          </div>
        </div>
        <div
          style={{
            padding: "20px"
          }}
        >
          <div
            style={{
              backgroundColor: "#D4F0FF",
              height: "106px",
              width: "604px",
              borderRadius: "4px"
            }}
          >
            5894715684{" "}
            <Button
              style={{
                backgroundColor: "#FF7A00",
                borderRadius: "4px",
                height: "25px",
                marginLeft: "425px",

                width: "82px",
                fontWeight: "500",
                fontSize: "11px"
              }}
            >
              In Process
            </Button>
            5894715684{" "}
            <Button
              style={{
                backgroundColor: "#FFD600",
                borderRadius: "4px",
                height: "25px",
                marginLeft: "425px",

                width: "82px",
                fontWeight: "500",
                fontSize: "11px"
              }}
            >
              In Progress
            </Button>
          </div>
        </div>
        <div
          style={{
            padding: "20px"
          }}
        >
          <div
            style={{
              backgroundColor: "#D4F0FF",
              height: "103px",
              width: "604px",
              borderRadius: "4px"
            }}
          >
            <div>
              5894715684{" "}
              <Button
                style={{
                  backgroundColor: "#4CAA44",
                  borderRadius: "4px",
                  height: "25px",
                  marginLeft: "425px",

                  width: "82px",
                  fontWeight: "500",
                  fontSize: "12px"
                }}
              >
                Completed
              </Button>
            </div>
            <div>
              5894715684{" "}
              <Button
                style={{
                  backgroundColor: "#4CAA44",
                  borderRadius: "4px",
                  height: "25px",
                  marginLeft: "425px",
                  width: "82px",
                  fontWeight: "500",
                  fontSize: "12px"
                }}
              >
                Completed
              </Button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
