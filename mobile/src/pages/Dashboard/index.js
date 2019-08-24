import React, { useState, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import { format, subDays, addDays } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { withNavigationFocus } from 'react-navigation';
import api from '~/services/api';

import Background from '~/components/Background';
import Header from '~/components/Header';
import Meetup from '~/components/Meetup';

import {
  Container,
  Content,
  Title,
  List,
  NoMeetup,
  NoMeetupTitle,
  NoMeetupImage,
} from './styles';

import subsFail from '~/assets/no_meetup.png';

function Dashboard({ isFocused }) {
  const [meetups, setMeetups] = useState([]);
  const [date, setDate] = useState(new Date());

  const dateFormatted = useMemo(
    () => format(date, "d 'de' MMMM", { locale: pt }),
    [date]
  );

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('meetups', {
        params: { date },
      });

      setMeetups(response.data);
    }
    if (isFocused) {
      loadMeetups();
    }
  }, [date, isFocused]);

  async function handleSubscription(id) {
    await api.post(`meetups/${id}/subscriptions`);
  }

  function handlePrevDay() {
    setDate(subDays(date, 1));
  }

  function handleNextDay() {
    setDate(addDays(date, 1));
  }

  return (
    <Background>
      <Container>
        <Header />
        <Content>
          <TouchableOpacity onPress={() => handlePrevDay()}>
            <Icon name="chevron-left" size={24} color="#FFF" />
          </TouchableOpacity>
          <Title>{dateFormatted}</Title>
          <TouchableOpacity onPress={() => handleNextDay()}>
            <Icon name="chevron-right" size={24} color="#FFF" />
          </TouchableOpacity>
        </Content>
        {meetups.length > 0 ? (
          <List
            data={meetups}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => (
              <Meetup
                onSubscription={() => handleSubscription(item.id)}
                data={item}
              />
            )}
          />
        ) : (
          <NoMeetup>
            <NoMeetupTitle>
              Não há meetup cadastrado para esta data!
            </NoMeetupTitle>
            <NoMeetupImage source={subsFail} />
          </NoMeetup>
        )}
      </Container>
    </Background>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Meetups',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="format-list-bulleted" size={20} color={tintColor} />
  ),
};

Dashboard.propTypes = {
  isFocused: PropTypes.bool.isRequired,
};

export default withNavigationFocus(Dashboard);
