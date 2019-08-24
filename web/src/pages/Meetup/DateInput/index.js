import React, { useState, useRef, useEffect } from 'react';
import ReactDatePicker from 'react-datepicker';
import pt from 'date-fns/locale/pt';
import { useField } from '@rocketseat/unform';

import 'react-datepicker/dist/react-datepicker.css';
import { Container } from './styles';

export default function DateInput({ name }) {
  const ref = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);
  const [selected, setSelected] = useState(defaultValue);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'props.selected',
      clearValue: pickerRef => {
        pickerRef.clear();
      },
    });
  }, [ref.current, fieldName]); // eslint-disable-line

  return (
    <Container>
      <ReactDatePicker
        locale={pt}
        ref={ref}
        name={fieldName}
        selected={selected}
        onChange={date => setSelected(date)}
        showTimeSelect
        timeFormat="HH:mm aa"
        timeIntervals={60}
        dateFormat="dd 'de' MMMM', às' h:mm' hs'"
        timeCaption="time"
        placeholder="Data"
      />
      {error && <span>{error}</span>}
    </Container>
  );
}
