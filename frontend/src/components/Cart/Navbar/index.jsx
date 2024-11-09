import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function CartNavbar() {
  return (
    <Navbar className="bg-dark">
      <Container>
        <Navbar.Brand href="#home" className='text-light'>Seu carrinho</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className='text-light'>
            Usuário: <a href="#login" className='text-light'>Lorem Ipsum</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CartNavbar;
