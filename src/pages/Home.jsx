import React from "react";
import useFetch from "../utils/useFetch";
import EventCard from "../components/EventCard";
import Hero from "../components/Hero";

const Home = () => {
  const { data, error, loading } = useFetch("http://localhost:3000/events");

  if (loading)
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border text-danger" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );

  return (
    <div className="container my-5">
      <Hero />
      <div className="d-flex justify-content-between">
        <h1 className="w-75">Meetup Events</h1>
        <div className="w-25">
          <select className="form-select">
            <option>Both</option>
            <option>Online</option>
            <option>Offline</option>
          </select>
        </div>
      </div>
      <hr />
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {data &&
          data.event.map((e) => (
            <div key={e._id} className="col">
              <EventCard e={e} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
