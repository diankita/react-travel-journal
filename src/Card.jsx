import React from "react";

export default function Card(props) {
  return (
    <section className="card">
      <div
        // inserting inline style to be able to use the photo as a background image
        style={{
          backgroundImage: `url("${props.card.imageUrl}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="card--photo"
      />
      <div className="card--info">
        <div>
          <span className="card--arrow-symbol">➤</span>
          <span className="card--country">{props.card.location}</span>
          <a
            href={props.card.googleMapsUrl}
            target="_blank"
            className="card--googleLink"
          >
            View on Google Maps
          </a>
        </div>
        <h1 className="card--title">{props.card.title}</h1>
        <div className="card--dates">
          {props.card.startDate} - {props.card.endDate}
        </div>
        <p className="card--description">{props.card.description}</p>
      </div>
    </section>
  );
}
