import React from 'react';
import PropTypes from 'prop-types';
import { parseISO } from 'date-fns';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import { MdAddCircleOutline } from 'react-icons/md';
import history from '~/services/history';
import api from '~/services/api';
import FileInput from '../FileInput';
import DateInput from '../DateInput';

import { Container, InputButton } from '../styles';

export default function MeetupUpdate({ match, location }) {
  const { meetup } = location.state;

  const { id } = match.params;

  async function handleSubmit({ title, description, location, date, file_id }) {
    try {
      await api.put(`/meetups/${id}`, {
        title,
        description,
        location,
        date,
        file_id,
      });
      toast.success('Meetup atualizado com sucesso!');
      history.push('/Dashboard');
    } catch (err) {
      toast.error(
        'Erro ao atualizar este meetup. Confira os dados informados e tente novamente!'
      );
    }
  }

  const initial = {
    ...meetup,
    date: parseISO(meetup.date),
  };

  return (
    <Container>
      <Form initialData={initial} onSubmit={handleSubmit}>
        <FileInput name="file_id" />
        <hr />

        <Input name="title" placeholder="Titulo" />
        <Input name="description" placeholder="Descrição/Detalhes" />
        <DateInput name="date" placeholder="Data" />
        <Input name="location" placeholder="Local" />
        <InputButton type="submit">
          <MdAddCircleOutline color="#fff" size={16} />
          <p>Salvar meetup</p>
        </InputButton>
      </Form>
    </Container>
  );
}

MeetupUpdate.propTypes = {
  match: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  location: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

MeetupUpdate.defaultProps = {
  match: {},
  location: {},
};
