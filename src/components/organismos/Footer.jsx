
import styled from "styled-components";

export function Footer() {
  return (
    <Container>
      <span>CodeLabs Projects</span>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 12px;
  color: #91a4b7;
  font-size: 12.2px;
`;
