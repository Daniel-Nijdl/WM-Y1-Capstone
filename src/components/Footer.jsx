import { Footer as props } from "../props.json";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter
      style={{ backgroundColor: props.backgroundColor }}
      className="font-small pt-4 mt-4 footer"
    >
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">About Us</h5>
            <p style={{ fontSize: "15px" }}>
              Weatherworks was founded 2018 in Phoenix, AZ  with a small crew of 3 people, but eventually its popularity lead to the company raising 
              enough funds to open a company which now has over 200 members that work daily in order to make sure that the weather info you consumers 
              receive is the most accurate as possible. In order to ensure that our daily users get the most accurate information possible we have 
              our own weather balloon that we monitor 24/7 rather than getting all of our info from a third party.
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Contact</h5>
            <ul>
              <li className="list-unstyled">
                <p>Phone Number: +1 (234) 567-8900</p>
              </li>
              <li className="list-unstyled">
                <p>Email: contact@weatherworks.com</p>
              </li>
              <li className="list-unstyled">
                <p>
                  Github:{" "}
                  <a href="https://github.com/ilya-tate/capstone">
                    github.com/ilya-tate/capstone
                  </a>
                </p>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Weather Works
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default Footer;
