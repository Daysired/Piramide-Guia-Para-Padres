import { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import EventDetail from "../Screens/Events/EventDetail";
import Events from "../Screens/Events/Events";
import { getAllEventos } from '../Services/eventos';

export default function EventContainer(props) {
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    fetchEventos();
  }, [])

  const fetchEventos = async () => {
    const eventos = await getAllEventos();
    setEventos(eventos);
  }

  return (
    <Switch>
      <Route path='/eventos/:id'>
        <EventDetail
          eventos={eventos}

        /> 
      </Route>
      <Route path='/eventos'>
        <Events
          eventos={eventos}
        />
      </Route>
    </Switch>
  )
}