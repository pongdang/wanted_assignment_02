import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const converKindMessage = message => {
  switch (message) {
    case `Not Found`:
      return `없는 페이지입니다.\n확인 버튼을 누르면 메인 화면으로 이동해요!`;
    default:
      return message;
  }
};

export function ErrorAlert({ errorMessage, reset }) {
  return (
    <Modal onClick={reset}>
      <Section onClick={e => e.stopPropagation()}>
        <Message>{converKindMessage(errorMessage)}</Message>
        <ErrorResetButton onClick={reset}>확인</ErrorResetButton>
      </Section>
    </Modal>
  );
}

const fadeIn = keyframes`
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0px);
  }
`;

const Modal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 0 20px;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2;
`;

const Message = styled.p`
  text-align: center;
  font-size: 1.6rem;
  font-weight: bold;
  white-space: pre-wrap;
  word-break: keep-all;
  line-height: 1.5;
`;

const Section = styled.section`
  width: 100%;
  max-width: 500px;
  border-radius: 20px;
  margin-top: 20px;
  margin: 20px 20px 0;
  padding: 42px;
  background-color: #fff;
  z-index: 1;
  animation: ${fadeIn} 0.2s ease-out;
`;

const ErrorResetButton = styled.button`
  display: block;
  border-radius: 20px;
  background-color: #000;
  padding: 15px;
  margin-top: 30px;
  color: #fff;
  font-weight: 600;
  letter-spacing: 1.2px;
  width: 100%;
  border: 0;
  cursor: pointer;

  &:hover {
    background-color: #626262;
  }

  &:active {
    transform: scale(0.98);
  }
`;
