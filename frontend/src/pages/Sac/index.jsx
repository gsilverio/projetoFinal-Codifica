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
            <p>
              Nosso compromisso é proporcionar uma experiência de compra segura,
              respeitosa e ética para todos os nossos clientes. Seguimos os mais
              altos padrões de conduta, garantindo:
            </p>
            <ul>
              <li>
                <strong>Respeito e cordialidade:</strong> Tratamos todos os
                clientes, colaboradores e parceiros com respeito e cortesia.
              </li>
              <li>
                <strong>Transparência:</strong> Informações sobre produtos,
                preços, políticas e ofertas são sempre claras e atualizadas.
              </li>
              <li>
                <strong>Confiança:</strong> Trabalhamos para proteger a
                privacidade e segurança de todos os dados dos nossos clientes.
              </li>
              <li>
                <strong>Responsabilidade social e ambiental:</strong> Estamos
                comprometidos com práticas de negócios que respeitam o meio
                ambiente e contribuem para a comunidade.
              </li>
            </ul>
            <p>
              Nosso Código de Conduta e Ética reflete os valores fundamentais da
              nossa empresa. Ao realizar compras em nosso site, você concorda em
              agir de maneira ética, respeitando as regras e normas que garantem
              um ambiente positivo para todos.
            </p>
          </MDBAccordionItem>
          <MDBAccordionItem
            collapseId={2}
            headerTitle="Politícas de Privacidade"
          >
            <p>
              Na TechHub, a proteção dos seus dados pessoais é uma prioridade.
              Ao realizar compras ou interagir com nosso site, você nos fornece
              informações que são tratadas com a máxima segurança e
              confidencialidade. Esta Política de Privacidade descreve como
              coletamos, usamos, armazenamos e protegemos seus dados:
            </p>
            <ul>
              <li>
                <strong>Coleta de dados:</strong> Coletamos informações
                pessoais, como nome, endereço, e-mail e detalhes de pagamento,
                quando você realiza uma compra ou se registra em nossa
                plataforma.
              </li>
              <li>
                <strong>Uso de dados:</strong> Usamos suas informações para
                processar pedidos, oferecer um atendimento personalizado e
                melhorar sua experiência de compra.
              </li>
              <li>
                <strong>Proteção de dados:</strong> Implementamos medidas de
                segurança para proteger suas informações contra acessos não
                autorizados, uso indevido ou divulgação.
              </li>
              <li>
                <strong>Compartilhamento de dados:</strong> Não compartilhamos
                seus dados com terceiros, exceto quando necessário para
                processar pagamentos ou realizar entregas.
              </li>
              <li>
                <strong>Seus direitos:</strong> Você tem o direito de acessar,
                corrigir ou excluir suas informações pessoais a qualquer
                momento, de acordo com as leis de proteção de dados aplicáveis.
              </li>
            </ul>
          </MDBAccordionItem>
          <MDBAccordionItem collapseId={3} headerTitle="Termos e Condições">
            <p>
              Estes Termos e Condições regem o uso do nosso site e serviços de
              e-commerce. Ao acessar ou realizar compras na TechHub, você
              concorda com as seguintes condições:
            </p>
            <ul>
              <li>
                <strong>Produtos e Preços:</strong> Todos os produtos estão
                sujeitos à disponibilidade de estoque. Os preços podem ser
                alterados sem aviso prévio, mas a cotação no momento da compra
                será a válida.
              </li>
              <li>
                <strong>Pagamento:</strong> Aceitamos diversos métodos de
                pagamento, como cartões de crédito, débito e outras formas de
                pagamento eletrônico.
              </li>
              <li>
                <strong>Entrega:</strong> Os prazos de entrega variam conforme o
                local de destino e o método de envio escolhido. Caso haja
                imprevistos, informaremos você sobre o status do seu pedido.
              </li>
              <li>
                <strong>Política de Devolução:</strong> Se você não estiver
                satisfeito com o produto, oferecemos um prazo para devolução ou
                troca, conforme nossas políticas de devolução.
              </li>
              <li>
                <strong>Responsabilidade do Usuário:</strong> Você concorda em
                fornecer informações corretas e precisas durante o processo de
                compra. É responsabilidade do cliente garantir que os dados
                fornecidos estejam atualizados e completos.
              </li>
              <li>
                <strong>Propriedade Intelectual:</strong> Todos os direitos de
                propriedade intelectual relacionados ao site, incluindo marcas,
                logos e conteúdos, são de nossa propriedade ou licenciados para
                o uso exclusivo da nossa loja.
              </li>
              <li>
                <strong>Modificações:</strong> Podemos atualizar ou alterar
                esses Termos e Condições a qualquer momento, com a versão mais
                recente disponível em nosso site.
              </li>
            </ul>
            <p>
              Esses Termos e Condições são regidos pela legislação brasileira.
              Se você não concordar com qualquer uma das disposições, por favor,
              não utilize nosso site.
            </p>
          </MDBAccordionItem>
        </MDBAccordion>
      </MDBContainer>
      <Footer />
    </>
  );
};

export default Sac;
