import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import Layout from '../../Components/Layout';


export default function EventDetail(props) {
  const [evento, setEvento] = useState(null);
  const { eventos } = props;
  const { id } = useParams();

  useEffect(() => {
    if (eventos.length) {
      const oneEvento = eventos.find((evento) => evento.id === Number(id));
      setEvento(oneEvento)
    }
  }, [eventos, id])

  return (
    <Layout>
      <div className="evento-details">
        {
          evento &&
          <div className="event-detail-card">
            <h2 className="detail-event-name">{evento.name}</h2>
            <img className="detail-event-img" src={evento.picture} alt={evento.name} />
            <p className="detail-event-desc">{evento.description}</p>
            <p className="detail-event-loc">{evento.location}</p>
            <p className="detail-event-date">{evento.date}</p>
      
          </div>
        }
      </div>
    </Layout>
  )
}