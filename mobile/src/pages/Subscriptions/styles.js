import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Content = styled.View`
  display: flex;
  flex-direction: row;
  align-self: center;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 30 },
})``;

export const NoSubscribe = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NoSubscribeTitle = styled.Text`
  margin-top: 80px;
  font-size: 16px;
  color: #fff;
  font-weight: bold;
`;

export const NoSubImage = styled.Image`
resize-mode: contain;
  margin: 0
  width: 200px;
  height: 200px;
  border-radius: 4px;
  opacity: 0.4;
`;
