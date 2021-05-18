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
          <div className="card">
            <h3>{evento.name}</h3>
            <img src={evento.picture} alt={evento.name} />
            <p>{evento.description}</p>
            <p>{evento.location}</p>
            <p>{evento.date}</p>
      
          </div>
        }
      </div>
    </Layout>
  )
}