import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { withNavigationFocus } from 'react-navigation';
import api from '~/services/api';

import Background from '~/components/Background';
import Header from '~/components/Header';
import Subscription from '~/components/Subscription';

import {
  Container,
  NoSubscribe,
  NoSubscribeTitle,
  List,
  NoSubImage,
} from './styles';

import subsFail from '~/assets/empty_sub.png';

function Subscriptions({ isFocused, navigation }) {
  const [subscriptions, setSubscriptions] = useState([]);

  async function loadSubscriptions() {
    const response = await api.get('subscriptions');

    setSubscriptions(response.data);
  }

  useEffect(() => {
    if (isFocused) {
      loadSubscriptions();
    }
  }, [isFocused]);

  async function handleCancel(id) {
    await api.delete(`subscriptions/${id}`);

    setSubscriptions(
      subscriptions.map(subscription => subscription.id === id && subscription)
    );
    navigation.navigate('Dashboard');
  }

  return (
    <Background>
      <Container>
        <Header />
        {subscriptions.length > 0 ? (
          <List
            data={subscriptions}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => (
              <Subscription
                onCancel={() => handleCancel(item.id)}
                data={item}
              />
            )}
          />
        ) : (
          <NoSubscribe>
            <NoSubscribeTitle>
              Você não está inscrito em nenhum meetup!
            </NoSubscribeTitle>
            <NoSubImage source={subsFail} />
          </NoSubscribe>
        )}
      </Container>
    </Background>
  );
}

Subscriptions.navigationOptions = {
  tabBarLabel: 'Inscrições',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="tag" size={20} color={tintColor} />
  ),
};

Subscriptions.propTypes = {
  isFocused: PropTypes.bool.isRequired,
};

export default withNavigationFocus(Subscriptions);
