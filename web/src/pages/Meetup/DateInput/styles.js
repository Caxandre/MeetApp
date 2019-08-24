import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  input {
    background: rgba(0, 0, 0, 0.1);
    width: 940px;
    border: 0;
    border-radius: 4px;
    height: 44px;
    padding: 10px 15px;
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
`;
