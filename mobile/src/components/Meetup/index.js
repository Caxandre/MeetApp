import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { parseISO, formatRelative } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Banner,
  Info,
  Title,
  InfoContent,
  InfoTxt,
  SubscriptButton,
} from './styles';

export default function Meetup({ data, onSubscription }) {
  const dateParsed = useMemo(() => {
    return formatRelative(parseISO(data.date), new Date(), {
      locale: pt,
      addSuffix: true,
    });
  }, [data.date]);

  function handleOnSubscription() {
    Alert.alert(
      'Confirmação',
      'Confirma sua inscrição?',
      [
        {
          text: 'OK',
          onPress: onSubscription,
        },

        {
          text: 'Cancel',
          style: 'cancel',
        },
      ],
      { cancelable: false }
    );
  }

  return (
    <Container past={data.past}>
      <Banner
        source={{
          uri: data.file
            ? // data.file.url
              `http://10.0.3.2:3030/files/${data.file.path}`
            : `https://api.adorable.io/avatars/285/${data.title}.png`,
        }}
      />

      <Info>
        <Title>{data.title}</Title>
        <InfoContent>
          <Icon name="event" size={16} color="#999" />
          <InfoTxt>{dateParsed}</InfoTxt>
        </InfoContent>
        <InfoContent>
          <Icon name="location-on" size={16} color="#999" />
          <InfoTxt>{data.location}</InfoTxt>
        </InfoContent>
        <InfoContent>
          <Icon name="person" size={16} color="#999" />
          <InfoTxt>Organizador: {data.user.name}</InfoTxt>
        </InfoContent>
      </Info>
      {!data.past && (
        <SubscriptButton onPress={handleOnSubscription}>
          Realizar inscrição
        </SubscriptButton>
      )}
    </Container>
  );
}

Meetup.propTypes = {
  data: PropTypes.shape({
    date: PropTypes.string,
    title: PropTypes.string,
    location: PropTypes.string,
    past: PropTypes.bool,
    file: PropTypes.shape({
      url: PropTypes.string,
      path: PropTypes.string,
    }),
    user: PropTypes.shape({
      name: PropTypes.string,
    }),
  }).isRequired,
  onSubscription: PropTypes.func.isRequired,
};
