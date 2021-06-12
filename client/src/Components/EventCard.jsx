import React from 'react';

export default function EventCard(props) {
  const {title, image, description, location, date} = props;
  return (
<div>
      <div className="event-card">
        <img src={image} alt={title} />
        <div className="event-card-name">
      <h4 className="small-card-name">{title}</h4>
        <p>{date}</p>
        <p>{location}</p>
        <p>{description}</p>
        </div>
      </div>
      </div>
  )
}
