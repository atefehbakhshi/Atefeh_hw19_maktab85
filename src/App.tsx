import styled from "styled-components";
import ExpenseProvider from "./context/Context";
import ExpenseContainer from "./expenses/ExpenseContainer";
import Header from "./header/Header";
import Modal from "./modal/Modal";

const Wrapper = styled.div`
  padding: 1rem 2rem;
  max-width: 996px;
  margin: 0 auto;
`;

function App() {
  return (
    <ExpenseProvider>
      <Modal />
      <Wrapper>
        <Header />
        <ExpenseContainer />
      </Wrapper>
    </ExpenseProvider>
  );
}

export default App;
