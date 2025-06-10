"use client";
import styled from "styled-components";

// styled.button crea un componente <button> con estilos adjuntos
const Button = styled.button`
  background: #0070f3;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export default function Example() {
  return <Button>¡Hola Styled-Components!</Button>;
}
