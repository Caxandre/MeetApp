import React, { useState, useEffect } from 'react';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { Link } from 'react-router-dom';
import { MdAddCircleOutline, MdChevronRight } from 'react-icons/md';
import api from '~/services/api';

import { Container, Meetup } from './styles';

export default function Dashboard() {
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('organizing');
      setMeetups(response.data);
    }
    loadMeetups();
  }, []);

  return (
    <Container>
      <header>
        <span>Meus meetups</span>
        <Link to="/addmeetup">
          <button type="button">
            <MdAddCircleOutline color="#fff" size={16} />
            <p>Novo meetup</p>
          </button>
        </Link>
      </header>
      <ul>
        {meetups.map(meetup => (
          <Link
            to={{
              pathname: `/meetup/${meetup.id}`,
              state: { meetup },
            }}
          >
            <Meetup
              key={meetup.id}
              past={meetup.past}
              available={!meetup.cancelable}
            >
              <strong>{meetup.title}</strong>
              <div>
                <span>
                  {format(
                    parseISO(meetup.date),
                    "dd 'de' MMMM', às ' HH:mm'h'",
                    {
                      locale: pt,
                    }
                  )}
                </span>
                <MdChevronRight color="#fff" size={20} />
              </div>
            </Meetup>
          </Link>
        ))}
      </ul>
    </Container>
  );
}
