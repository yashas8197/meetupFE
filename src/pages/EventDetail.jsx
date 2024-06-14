import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../utils/useFetch";
import { Clock } from "lucide-react";
import EventStatusCard from "../components/EventStatusCard";

const EventDetail = () => {
  const { eventId } = useParams();

  const { data, loading, error } = useFetch(
    `http://localhost:3000/events/${eventId}`
  );
  console.log(data);

  if (loading)
    return (
      <div className="d-flex justify-content-center align-items-center">
        <div class="spinner-border text-danger vh-50" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    );

  return (
    <div style={{ backgroundColor: "#F6F7F8" }}>
      <div className="container">
        <div className="mb-4 vh-25 shadow p-4 bd-5 bg-body rounded">
          <h2 className="fw-bold">{data?.event?.title}</h2>
          {data?.event?.speakers.length > 0 && (
            <div className="d-flex">
              <img
                style={{ height: "60px", width: "60px" }}
                className="img-fulid"
                src={data?.event?.speakers[0]?.image}
              />
              <div>
                <p className="m-0 mx-5">Hosted By: </p>
                <span className="mx-5 fw-bold">
                  {data?.event?.speakers[0]?.name}
                </span>
              </div>
            </div>
          )}
        </div>
        <div className="d-flex">
          <div className="mx-2 w-100">
            <img
              className="img-thumbnail"
              style={{ width: "50rem" }}
              src={data?.event?.eventThumbnail}
            />
            <div className=" my-3 w-75">
              <h4>Details</h4>
              <p className="fs-5">{data?.event?.eventDescription}</p>
              <h4>Additional Information</h4>
              <p>
                <strong>Dress Code: </strong>{" "}
                {data?.event?.additionalInformation?.dressCode}
              </p>
              <p>
                <strong>Age Restriction: </strong>
                {data?.event?.additionalInformation?.ageRestrictions}
              </p>
              {data?.event?.eventTags.map((tag) => (
                <button
                  style={{ backgroundColor: "#C9E5E8" }}
                  className="btn mx-2 fw-bold"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
          <div className="card h-75">
            <div className="card-body">
              <p className="card-text d-flex">
                <Clock className="text-secondary" />
                <div className="mx-4">
                  {data?.event?.eventStartTime} to {data?.event?.eventEndTime}
                </div>
              </p>
              <EventStatusCard data={data?.event} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
