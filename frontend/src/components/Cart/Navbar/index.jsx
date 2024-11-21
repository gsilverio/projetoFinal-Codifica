import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function CartNavbar() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const tokenData = localStorage.getItem('token_key');
        
        if (!tokenData) {
          setError('Usuário não autenticado. Token não encontrado.');
          return;
        }

        const parsedTokenData = JSON.parse(tokenData);
        const token = parsedTokenData.access_token;

        if (!token) {
          setError('Usuário não autenticado');
          return;
        }

        const response = await fetch('http://localhost:8080/user/me', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error(`Erro ao buscar usuário. Status: ${response.status}`);
        }

        const data = await response.json();
        setUser(data);
      } catch (err) {
        setError('Erro ao carregar usuário');
      }
    };

    fetchUser();
  }, []);

  return (
    <Navbar className="bg-dark">
      <Container>
        <Navbar.Brand href="#home" className='text-light'>Seu carrinho</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className='text-light'>
            {/* Usuário: <a href="#login" className='text-light'>Lorem Ipsum</a> */}
            Usuário:
              {error ? (
                <span className="text-danger">Erro ao carregar usuário</span>
              ) : user ? (
                <span>{user.firstName} {user.lastName}</span>  // Supondo que o nome do usuário esteja em 'name'
              ) : (
                <span>Carregando...</span>
              )}
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CartNavbar;
