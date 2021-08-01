import React from "react";
import { MDBContainer, MDBFooter } from "mdbreact";
import '../App.css';
const FooterPage = () => {
  return (
    <div className='bg1'>
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        
            <h5 className="textFotter">Hits & Scores</h5>
            <li className="list-unstyled">
                <a className="link" href="http://localhost:3000/">Back To Top</a>
              </li>
         
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid className="textFotter">
          &copy; {new Date().getFullYear()} Developers: <div className="textNames">
          Kundan, Dipanshu, Udit, Rohit, Tushar 
              
              </div> 
        </MDBContainer>
      </div>
    </MDBFooter>
    </div>
  );
}

export default FooterPage;