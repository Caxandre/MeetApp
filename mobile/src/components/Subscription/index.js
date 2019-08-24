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

export default function Subscription({ data, onCancel }) {
  const dateParsed = useMemo(() => {
    return formatRelative(parseISO(data.meetup.date), new Date(), {
      locale: pt,
      addSuffix: true,
    });
  }, [data.meetup.date]);

  function handleOnCancel() {
    Alert.alert(
      'Confirmação',
      'Confirma o cancelamento de sua inscrição?',
      [
        {
          text: 'OK',
          onPress: onCancel,
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
    <Container past={data.meetup.past}>
      <Banner
        source={{
          uri: data.meetup.file
            ? // data.meetup.file.url
              `http://10.0.3.2:3030/files/${data.meetup.file.path}`
            : `https://api.adorable.io/avatars/285/${data.meetup.title}.png`,
        }}
      />

      <Info>
        <Title>{data.meetup.title}</Title>
        <InfoContent>
          <Icon name="event" size={16} color="#999" />
          <InfoTxt>{dateParsed}</InfoTxt>
        </InfoContent>
        <InfoContent>
          <Icon name="location-on" size={16} color="#999" />
          <InfoTxt>{data.meetup.location}</InfoTxt>
        </InfoContent>
        <InfoContent>
          <Icon name="person" size={16} color="#999" />
          <InfoTxt>Organizador: {data.meetup.user.name}</InfoTxt>
        </InfoContent>
      </Info>
      {!data.meetup.past && (
        <SubscriptButton onPress={handleOnCancel}>
          Cancelar inscrição
        </SubscriptButton>
      )}
    </Container>
  );
}

Subscription.propTypes = {
  data: PropTypes.shape({
    meetup: PropTypes.shape({
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
    }),
  }).isRequired,
  onCancel: PropTypes.func.isRequired,
};
