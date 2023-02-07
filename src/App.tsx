import styled from "styled-components";
import Header from "./header/Header";

const Wrapper = styled.div`
  padding: 1rem 2rem;
`;

function App() {
  return (
    <Wrapper>
      <Header />
    </Wrapper>
  );
}

export default App;
