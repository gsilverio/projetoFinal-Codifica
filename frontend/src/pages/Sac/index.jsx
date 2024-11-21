import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import {
  MDBAccordion,
  MDBAccordionItem,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";

const Sac = () => {
  return (
    <>
      <Navbar />
      <MDBContainer className="mt-5 mb-5">
        <section>
          <MDBTypography
            tag="h3"
            className="text-center mb-4 pb-2 text-primary fw-bold"
          >
            SAC
          </MDBTypography>
          <p className="text-center mb-5">
            Encontre abaixo as respostas para as perguntas mais frequentes
          </p>

          <MDBRow>
            <MDBCol md="6" lg="4" className="mb-4">
              <MDBTypography tag="h6" className="mb-3 text-primary">
                <MDBIcon fas icon="credit-card text-primary pe-2" /> Quais
                formas de pagamento vocês aceitam?
              </MDBTypography>
              <p>
                Aceitamos diversos métodos de pagamento, como cartões de
                crédito, boleto bancário, PayPal e PIX. Você pode escolher a
                forma mais conveniente ao finalizar sua compra.
              </p>
            </MDBCol>
            <MDBCol md="6" lg="4" className="mb-4">
              <MDBTypography tag="h6" className="mb-3 text-primary">
                <MDBIcon fas icon="undo-alt text-primary pe-2" /> Quais são as
                políticas de devolução e troca?
              </MDBTypography>
              <p>
                Nossa política de devolução permite que você solicite a troca ou
                devolução do produto em até 30 dias após o recebimento. O
                produto deve estar em perfeitas condições e na embalagem
                original. Consulte nossa página de Política de Troca para mais
                detalhes.
              </p>
            </MDBCol>
            <MDBCol md="6" lg="4" className="mb-4">
              <MDBTypography tag="h6" className="mb-3 text-primary">
                <MDBIcon fas icon="file-contract text-primary pe-2" /> Como
                funciona a garantia dos produtos?
              </MDBTypography>
              <p>
                Todos os nossos produtos eletrônicos possuem garantia do
                fabricante. A duração e os termos podem variar de acordo com o
                produto. Verifique a garantia na descrição do item ou entre em
                contato com nosso suporte para mais informações.
              </p>
            </MDBCol>
            <MDBCol md="6" lg="4" className="mb-4">
              <MDBTypography tag="h6" className="mb-3 text-primary">
                <MDBIcon fas icon="shipping-fast text-primary pe-2" /> Como
                funciona a política de frete grátis?
              </MDBTypography>
              <p>
                Oferecemos frete grátis para compras acima de R$300,00.
                Verifique as condições na página de *Frete e Entrega* para saber
                se seu pedido se qualifica para o frete grátis.
              </p>
            </MDBCol>
            <MDBCol md="6" lg="4" className="mb-4">
              <MDBTypography tag="h6" className="mb-3 text-primary">
                <MDBIcon fas icon="edit text-primary pe-2" /> Como posso alterar
                ou cancelar meu pedido?
              </MDBTypography>
              <p>
                Após a confirmação do pagamento, não é possível alterar o pedido
                diretamente. Se precisar fazer alterações ou cancelamentos,
                entre em contato com nosso suporte imediatamente.
              </p>
            </MDBCol>
            <MDBCol md="6" lg="4" className="mb-4">
              <MDBTypography tag="h6" className="mb-3 text-primary">
                <MDBIcon fas icon="phone text-primary pe-2" /> Como entrar em
                contato com o suporte?
              </MDBTypography>
              <p>
                Para entrar em contato conosco, basta acessar a seção *Fale
                Conosco* em nosso site. Oferecemos suporte via chat, e-mail e
                telefone para garantir que todas as suas dúvidas sejam
                resolvidas rapidamente.
              </p>
            </MDBCol>
          </MDBRow>
        </section>
        {/* <MDBAccordion alwaysOpen initialActive={1}> */}
        <p className="text-center mt-5">Ainda não encontrou o que queria?</p>
        <MDBAccordion>
          <MDBAccordionItem
            collapseId={1}
            headerTitle="Código de Conduta e Ética"
          >
            <strong>This is the first items accordion body.</strong> It is shown
            by default, until the collapse plugin adds the appropriate classes
            that we use to style each element. These classes control the overall
            appearance, as well as the showing and hiding via CSS transitions.
            You can modify any of this with custom CSS or overriding our default
            variables. Its also worth noting that just about any HTML can go
            within the <code>.accordion-body</code>, though the transition does
            limit overflow.
          </MDBAccordionItem>
          <MDBAccordionItem
            collapseId={2}
            headerTitle="Politícas de Privacidade"
          >
            <strong>This is the second items accordion body.</strong> It is
            hidden by default, until the collapse plugin adds the appropriate
            classes that we use to style each element. These classes control the
            overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or
            overriding our default variables. Its also worth noting that just
            about any HTML can go within the <code>.accordion-body</code>,
            though the transition does limit overflow.
          </MDBAccordionItem>
          <MDBAccordionItem collapseId={3} headerTitle="Termos e Condições">
            <strong>This is the third items accordion body.</strong> It is
            hidden by default, until the collapse plugin adds the appropriate
            classes that we use to style each element. These classes control the
            overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or
            overriding our default variables. Its also worth noting that just
            about any HTML can go within the <code>.accordion-body</code>,
            though the transition does limit overflow.
          </MDBAccordionItem>
        </MDBAccordion>
      </MDBContainer>
      <Footer />
    </>
  );
};

export default Sac;
