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
            <p style={{ fontSize: "12px" }}>
              Reprehenderit veniam magna cupidatat veniam elit nostrud est. Aute
              magna minim adipisicing pariatur do irure quis ullamco. Nostrud
              deserunt mollit proident mollit irure deserunt esse voluptate
              mollit minim. Adipisicing adipisicing incididunt fugiat tempor
              cillum et in minim consectetur. Deserunt laborum ad est Lorem ex
              sunt minim aliqua quis veniam sint esse. In non labore nisi anim
              aliquip reprehenderit reprehenderit. Irure incididunt aliqua sit
              irure id ullamco excepteur deserunt veniam ea adipisicing.
              Proident ea cillum aliqua aute magna tempor veniam. Excepteur
              tempor est sint eu incididunt non irure cupidatat incididunt.
              Consectetur voluptate deserunt cillum sit dolore et laboris
              eiusmod mollit nisi.
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
