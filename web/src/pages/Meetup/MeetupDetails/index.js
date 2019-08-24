import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  MdModeEdit,
  MdDeleteForever,
  MdEvent,
  MdLocationOn,
} from 'react-icons/md';
import history from '~/services/history';

import api from '~/services/api';

import { Container, Header, Content, EditButton, CancelButton } from './styles';

export default function MeetupDetails({ match, location }) {
  const [meetups, setMeetups] = useState([]);
  const { meetup } = location.state;

  function handleCancel(id) {
    try {
      const response = api.delete(`meetups/${match.params.id}`);

      setMeetups(
        meetups.map(meet =>
          meet.id === id
            ? {
                ...meet,
                canceled_at: response.data.canceled_at,
              }
            : meet
        )
      );
      toast.success('Meetup cancelado com sucesso!');
      history.push('/dashboard');
    } catch (err) {
      toast.error('Erro ao cancelar meetup!');
    }
  }

  console.tron.log('Log Details -> ', meetup);
  return (
    <Container>
      <Header>
        <span>{meetup.title}</span>
        {!meetup.past && (
          <aside>
            <Link
              to={{
                pathname: `/editmeetup/${meetup.id}`,
                state: { meetup },
              }}
            >
              <EditButton>
                <MdModeEdit color="rgba(255, 255, 255, 0.8)" size={20} />
                <p>Editar</p>
              </EditButton>
            </Link>
            <CancelButton onClick={() => handleCancel(meetup.id)}>
              <MdDeleteForever color="rgba(255, 255, 255, 0.8)" size={20} />
              <p>Cancelar</p>
            </CancelButton>
          </aside>
        )}
      </Header>
      <Content>
        {meetup.file ? (
          <img src={meetup.file.url} alt="Caxandre" />
        ) : (
          <noimg>
            <p> Selecionar imagem </p>
          </noimg>
        )}
        <div>
          <p>{meetup.description}</p>
          <p>{meetup.past}</p>
          <p>{meetup.cancelable}</p>

          <div>
            <div>
              <MdEvent color="rgba(255, 255, 255, 0.8)" size={20} />
              <p>
                {format(parseISO(meetup.date), "dd 'de' MMMM', às ' HH:mm'h'", {
                  locale: pt,
                })}
              </p>
            </div>
            <div>
              <MdLocationOn color="rgba(255, 255, 255, 0.8)" size={20} />
              <p>{meetup.location}</p>
            </div>
          </div>
        </div>
      </Content>
    </Container>
  );
}

MeetupDetails.propTypes = {
  match: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  location: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

MeetupDetails.defaultProps = {
  match: {},
  location: {},
};
