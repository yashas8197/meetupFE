import { Calendar, Ticket, Video } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const EventCard = ({ e }) => {
  return (
    <Link to={`/event/${e._id}`} style={{ textDecoration: "none" }}>
      <div className="card h-100">
        <img
          src={e.eventThumbnail}
          className="card-img-top"
          alt="event image"
          style={{ height: "200px" }}
        />
        <div className="position-absolute top-0 start-0 bg-white m-1 px-1 rounded text-secondary">
          {e.eventType === "Online" ? (
            <small>
              <Video /> {e.eventType} Event
            </small>
          ) : (
            ""
          )}
        </div>
        <div className="card-body">
          <h5 className="card-title">{e.title}</h5>
          <p className="text-secondary">Hosted By: {e.hostedBy}</p>
          <p className="text-secondary">
            <Calendar style={{ width: "20px", marginRight: "1rem" }} />
            FRI, JUN 14 . 9:00 PM IST
          </p>
          <p style={{ height: "1px" }}>
            <Ticket
              className="text-secondary"
              style={{ marginRight: "1rem" }}
            />
            {e.isPaid ? `From ₹${e.price}.00` : "Free"}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
