import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 940px;
  margin: 50px auto;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.9);
      }
    }

    span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    hr {
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.2);
      margin: 10px 0 20px;
    }
  }
`;

export const InputButton = styled.button`
  margin-top: 10px;
  align-self: flex-end;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 25px;
  height: 42px;
  background: #e4566d;
  color: #fff;
  border: 0;
  border-radius: 4px;
  transition: background 0.2s;

  &:hover {
    background: ${darken(0.08, '#E4566D')};
  }

  p {
    margin-left: 10px;
    color: #fff;
    font-size: 16px;

    &:hover {
      opacity: 1;
    }
  }
`;
