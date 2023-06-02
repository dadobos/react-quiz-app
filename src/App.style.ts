import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
// reset
* {
  font-family: "Nanum Gothic Coding", monospace;
  box-sizing: border-box;
  margin:0;
  padding:0;
}

html {
  min-height:100vh;
}

body {
  margin:0;
  padding:0;
  height: 100%;
  min-height:100vh;
  background-color:#22363c;
  color:#009688;
  display: flex;
  flex-direction: column;
  align-items: center;
}`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  color: white;
  width: 70rem;
  max-width: 100vw;

  h1 {
    font-size: 3rem;
    text-align: center;
    margin-bottom: 2rem;
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  .question-card-wrapper {
    width: 100%;
  }

  .details {
    margin: 2rem 0;
    font-size: 1.4rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    @media (max-width: 768px) {
      flex-direction: column;
    }
  }

  .question {
    margin: 2rem 0;
    font-size: 1.2rem;
  }

  .start,
  .next {
    cursor: pointer;
    padding: 1rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
    background-color: #009688;
    font-size: 1.4rem;
    color: white;
    border: 1px transparent;
    width: 100%;
  }
`;

type ButtonWrapperProps = {
  correct: boolean;
  userClicked: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  transition: all 0.3s ease;
  :hover {
    opacity: 0.8;
  }
  button {
    cursor: pointer;
    user-select: none;
    font-size: 1.4rem;
    color: white;
    width: 100%;
    max-width: 100vw;
    margin: 5px 0;
    background: ${({ correct, userClicked }) =>
      correct ? '#84c318' : !correct && userClicked ? '#92374d' : '#22363c'};
    @media (max-width: 768px) {
      font-size: 1.2rem;
      margin: 8px 0;
    }
  }
`;

export const SelectWrapper = styled.select`
  width: 100%;
  max-width: 70rem;
  font-size: 1.6rem;
  background-color: #22363c;
  color: white;
  padding: 0.24rem;
  margin-top: 1rem;
  text-align: center;

  :hover {
    opacity: 0.8;
  }
`;
