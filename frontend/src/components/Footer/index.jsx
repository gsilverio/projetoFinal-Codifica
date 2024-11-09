import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <MDBFooter bgColor='dark' className='text-center text-lg-start text-light'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Conecte-se conosco nas redes sociais:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                TechHub
              </h6>
              <p>
                O TechHub é o seu destino para produtos eletrônicos de qualidade. Com um catálogo completo de gadgets, acessórios e equipamentos de última geração, oferecemos uma experiência de compra rápida e segura. Conecte-se com a tecnologia no TechHub!
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Produtos</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Hardware
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Software
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Assistência
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Diversos
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Links Úteis</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Preços
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Configurações
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Pedidos
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Ajuda
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contato</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Brasil
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@example.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024 Copyright:
        <a className='text-reset fw-bold' href='https://www.maisprati.com.br/'>
          +praTi
        </a>
      </div>
    </MDBFooter>
  );
}

export default Footer;
