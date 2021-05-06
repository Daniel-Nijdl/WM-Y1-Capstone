import { Footer as props } from '../props.json'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from 'mdbreact';

const Footer = () => {
  return (
    <MDBFooter style={{ backgroundColor: props.backgroundColor }} className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Footer Content</h5>
            <p>
              Here you can use rows and columns here to organize your footer
              content.
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
                <p>Github: <a href="https://github.com/ilya-tate/captsone">github.com/ilya-tate/capstone</a></p>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; { new Date().getFullYear() } Copyright: Weather Works
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;
