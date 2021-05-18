import React from 'react';
import { Link } from 'react-router-dom';
import EventCard from '../../Components/EventCard';
import Layout from '../../Components/Layout';

export default function events(props) {
  const { eventos } = props;
  return (
    <Layout>
      <div>
      <h2 className="events-headline1">
          <span className="headline-events">
            <b className="color-events">Nuestros</b>
            Eventos
          </span>
        </h2>
      <div className="card-list">
        {eventos.map(evento => (
          <React.Fragment key={evento.id}>
            <Link to={`/eventos/${evento.id}`}>
              <EventCard
                title={evento.name}
                image={evento.picture}
              />
            </Link>
          </React.Fragment>
        ))}
        </div>
        </div>
    </Layout>
  )
}