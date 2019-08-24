import styled from 'styled-components/native';
import Button from '~/components/Button';

export const Container = styled.View`
  margin-bottom: 15px;
  border-radius: 4px;
  background: #fff;
  display: flex;
  align-items: flex-start;
  height: ${props => (props.past ? '300px' : '345px')};
  opacity: ${props => (props.past ? 0.7 : 1)};
`;

export const Banner = styled.Image`
  position: relative;
  margin: 0
  width: 100%;
  height: 150px;
  border-radius: 4px;
`;

export const Info = styled.View`
  margin-top: 15px;
  margin-left: 15px;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: #333;
`;

export const InfoContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-top: 10px;
`;

export const InfoTxt = styled.Text`
  max-width: 280px;
  margin-left: 8px;
  font-size: 13px;
  color: #999;
`;

export const SubscriptButton = styled(Button)`
  align-self: stretch;
  margin: 10px 15px;
`;
