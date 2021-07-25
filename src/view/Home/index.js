import React, { useEffect, useState } from "react";

import api from "../../services/api";

import { Container, LinkLogin, Menu, Footer } from "./style";

import ShopCart from "../../assets/cart.png";

import LogoInsta from "../../assets/Logo Instagram.png";

import Logo from "../../assets/Logo.png";

import LogoPresentinhos from "../../assets/LogoPresentinhos.jpeg";

export default function Home() {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    api.get("/products").then((response) => {
      setData(response.data);
    });
  }, []);

  useEffect(() => {
    localStorage.setItem(`cart`, JSON.stringify(cart));
  }, [cart]);

  function handleCart(index) {
    let product = data[index];
    setCart((cart) => [...cart, product]);
  }

  return (
    <Container>
      <Menu>
        <div className="logomi">
          <img
            src={LogoPresentinhos}
            alt="Logo loja"
          />
          <span>Presentinhos da Mi</span>
        </div>
        <LinkLogin to="/login">Cadastre-se</LinkLogin>
        <div className="cart">
          <img src={ShopCart} alt="Shopcart" />
          <span>( {cart.length} ) Carrinho</span>
        </div>
      </Menu>
      <section>
        {data.map((product, index) => (
          <div className="product-content" key={product.id}>
            <img src={product.image} alt="Imagem do produto" />
            <h4>{product.name}</h4>
            <span>{product.model}</span>
            <h5>{product.price}</h5>
            <button onClick={() => handleCart(index)}>
              Adicionar ao carrinho
            </button>
          </div>
        ))}
      </section>
      <Footer>
        <div className="IsaCSF">
          <p>Att. IsaCSF  -></p>
          </div>
          <div>
            <a href="https://www.instagram.com/presentinhos_da_mi/" title="Instagram" target="_blank">
              <img src={LogoInsta} alt="Logo Instagram" title="Logo Instagram" />
            </a>
            <a href="https://github.com/isaCSF" title="GitHub" target="_blank">
            <img src={Logo} alt="Logo GitHub" title="Logo GitHub" />
            </a>
          </div>
      </Footer>
    </Container>
  );
}
