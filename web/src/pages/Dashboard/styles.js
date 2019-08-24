import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 940px;
  margin: 50px auto;

  display: flex;
  flex-direction: column;

  header {
    display: flex;
    justify-content: space-between;

    button {
      display: flex;
      align-items: center;
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
        font-size: 14px;
      }
    }

    span {
      color: #fff;
      font-size: 32px;
    }
  }

  ul {
    margin-top: 30px;
  }
`;

export const Meetup = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.1);
  margin-top: 15px;

  opacity: ${props => (props.past ? 0.6 : 1)};

  strong {
    color: #999;
    font-size: 16px;
    font-weight: normal;
  }

  div {
    display: flex;
    align-items: center;
    span {
      color: #666;
      margin-top: 3px;
      margin-right: 20px;
    }
  }
`;
