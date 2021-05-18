import React from 'react';

export default function EventCard(props) {
  const {title, image, description, location, date} = props;
  return (
<div>
    {/* <img src={image} alt={title} /> */}
      <div className="event-card">
        <img src={image} alt={title} />
        <div className="event-card-name">
      <p className="name">{title}</p>
        <p>{date}</p>
        <p>{location}</p>
        <p>{description}</p>
        </div>
      </div>
      </div>
  )
}
