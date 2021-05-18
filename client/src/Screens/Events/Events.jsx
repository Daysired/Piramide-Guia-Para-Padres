import React from 'react';
import { Link } from 'react-router-dom';
import EventCard from '../../Components/EventCard';
import Layout from '../../Components/Layout';

export default function events(props) {
  const { eventos } = props;
  return (
    <Layout>
      <div className="card-list">
        {eventos.map(evento => (
          <React.Fragment key={evento.id}>
            <Link to={`/eventos/${evento.id}`}>
              <EventCard
                title={evento.name}
                image={evento.picture}
                description={evento.description}
              />
            </Link>
          </React.Fragment>
        ))}
      </div>
    </Layout>
  )
}