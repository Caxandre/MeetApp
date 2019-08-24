import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 940px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    color: rgba(255, 255, 255, 0.8);
    font-size: 32px;
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Content = styled.div`
  margin-top: 30px;

  img {
    width: 940px;
    height: 300px;
    backgound: #eee;
  }

  noimg {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 940px;
    height: 300px;

    border: 3px solid rgba(255, 255, 255, 0.3);
    backgound: #eee;

    p {
      font-size: 16px;
      color: rgba(255, 255, 255, 0.8);
      margin-bottom: 5px;
    }
  }

  div {
    margin-top: 30px;

    p {
      font-size: 16px;
      color: rgba(255, 255, 255, 0.8);
      margin-bottom: 5px;
    }

    div {
      display: flex;
      justify-content: flex-start;
      opacity: 0.8;

      div {
        margin-right: 50px;
        p {
          margin-left: 10px;
          font-size: 16px;
          color: rgba(255, 255, 255, 0.8);

          margin-bottom: 5px;
        }
      }
    }
  }
`;

export const EditButton = styled.button`
      display: flex;
      align-items: center;
      padding: 12px 25px;
      height: 42px;
      background: #3b9eff;
      border: 0;
      border-radius: 4px;
       transition: background 0.2s;
      margin-right: 15px;

      &:hover {
        background: ${darken(0.08, '#3b9eff')};
      }

      p {
        margin-left: 5px;
        color: #fff;
        font-size: 14px;
      }
    }
`;

export const CancelButton = styled.button`
      display: flex;
      align-items: center;
      padding: 12px 25px;
      height: 42px;
      background: #e4566d;
      border: 0;
      border-radius: 4px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.08, '#E4566D')};
      }

      p {
        margin-left: 5px;
        color: #fff;
        font-size: 14px;
      }
    }
`;
