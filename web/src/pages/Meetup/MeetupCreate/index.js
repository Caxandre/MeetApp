import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import { MdAddCircleOutline } from 'react-icons/md';

import history from '~/services/history';
import api from '~/services/api';
import FileInput from '../FileInput';
import DateInput from '../DateInput';

import { Container, InputButton } from '../styles';

const schema = Yup.object().shape({
  title: Yup.string()
    .max(100, 'Máximo de 100 caracteres')
    .required('O Titulo é obrigatório'),
  description: Yup.string()
    .max(255, 'Máximo de 255 caracteres')
    .required('A Descrição é obrigatória'),
  location: Yup.string()
    .max(100, 'Máximo de 100 caracteres')
    .required('O Local é obrigatório'),
  date: Yup.date().required('A Data é obrigatória'),
  file_id: Yup.number(),
});

export default function MeetupCreate() {
  async function handleSubmit({ title, description, location, date, file_id }) {
    try {
      await api.post(`meetups`, {
        title,
        description,
        location,
        date,
        file_id,
      });

      toast.success('Meetup criado com sucesso!');
      history.push('/Dashboard');
    } catch (err) {
      toast.error(
        'Erro ao criar este meetup. Confira os dados informados e tente novamente!'
      );
    }
  }

  return (
    <Container>
      <Form schema={schema} onSubmit={handleSubmit}>
        <FileInput name="file_id" />
        <Input name="title" placeholder="Titulo" />
        <Input
          name="description"
          placeholder="Descrição/Detalhes"
          multiline
          rows={8}
        />
        <DateInput name="date" placeholder="Data" />
        <Input name="location" placeholder="Local" />
        <InputButton type="submit">
          <MdAddCircleOutline color="#fff" size={16} />
          <p>Criar meetup</p>
        </InputButton>
      </Form>
    </Container>
  );
}
