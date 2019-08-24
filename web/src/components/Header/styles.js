import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: #191621;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 940px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 20px;
      padding-right: 20px;
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;

  div {
    text-align: right;

    strong {
      display: block;
      color: #fff;
    }

    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #999;
    }
  }

  button {
    margin-left: 15px;
    height: 42px;
    width: 71px;
    background: #e4566d;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 12px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.08, '#E4566D')};
    }
  }
`;
