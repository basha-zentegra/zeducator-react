import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
          <i class="bi bi-facebook"></i>
          </a>
          <a href='' className='me-4 text-reset'>
          <i class="bi bi-twitter-x"></i>
          </a>
          <a href='' className='me-4 text-reset'>
          <i class="bi bi-youtube"></i>
          </a>
          <a href='' className='me-4 text-reset'>
          <i class="bi bi-instagram"></i>
          </a>
          <a href='' className='me-4 text-reset'>
          <i class="bi bi-linkedin"></i>
          </a>
          <a href='' className='me-4 text-reset'>
          <i class="bi bi-github"></i>
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
               
                Zeducator
              </h6>
              <p>
                No.1 Platform to Learn the Zoho Products in the easy way.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                  React Js
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  CRM
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Begin
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Creator
                </a>
              </p>
             
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  All Course
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  My Course
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
              <i class="bi bi-house-door-fill"></i> New York, NY 10012, US
                 
              </p>
              <p>
              <i class="bi bi-envelope-fill"></i> info@example.com
                
              </p>
              <p>
              <i class="bi bi-envelope-fill"></i> + 01 234 567 88
              </p>
              <p>
              <i class="bi bi-printer-fill"></i> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
       
      © 2025 Copyright: <a className='text-reset fw-bold' href='https://www.zentegra.com/'>
          Zeducator 
        </a>   powered by <a className='text-reset fw-bold' >Zentegra</a>
        
      </div>
    </MDBFooter>
  );
}