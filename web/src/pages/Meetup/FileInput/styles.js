import styled from 'styled-components';

export const Container = styled.div`
  align-self: center;
  margin-bottom: 30px;

  label {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    img {
      height: 300px;
      width: 940px;
      border: 3px solid rgba(255, 255, 255, 0.3);
      backgound: #eee;
    }

    div {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 940px;
      height: 300px;

      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;

      p {
        font-size: 16px;
        color: #999;
        margin-bottom: 5px;
      }
    }

    input {
      display: none;
    }
  }

  span {
    margin-top: 350px;
    color: #fb6f91;
    align-self: flex-start;
    margin: 0 0 10px;
    font-weight: bold;
  }
`;
