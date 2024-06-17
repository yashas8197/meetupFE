import React, { useEffect, useState } from "react";
import useFetch from "../utils/useFetch";
import EventCard from "../components/EventCard";
import Hero from "../components/Hero";

const Home = () => {
  const [eventData, setEventData] = useState([]);
  const [filterBySearch, setFilterBySearch] = useState("");
  const [eventStatusType, setEventStatusType] = useState("Both");

  const { data, error, loading } = useFetch(
    "https://meetup-be.vercel.app/events"
  );

  useEffect(() => {
    if (data && data.event) {
      setEventData(data.event);
    }
  }, [data]);

  if (loading || data === undefined)
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border text-danger" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );

  const filteredData = eventData.filter((e) => {
    const matchesEventType =
      eventStatusType === "Both" || e.eventType === eventStatusType;
    const matchesSearch = e.title
      .toLowerCase()
      .includes(filterBySearch.toLowerCase());
    return matchesEventType && matchesSearch;
  });

  console.log(filteredData);

  return (
    <div className="container my-5">
      <Hero />
      <div className="d-flex justify-content-between">
        <h1 className="">Meetup Events</h1>
        <div className="d-flex">
          <div className="mx-3">
            <select
              onChange={(e) => setEventStatusType(e.target.value)}
              className="form-select"
            >
              <option value="Both">Both</option>
              <option value="Online">Online</option>
              <option value="Offline">Offline</option>
            </select>
          </div>
          <form
            onChange={(e) => setFilterBySearch(e.target.value)}
            role="search"
          >
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search By Title"
              aria-label="Search"
            />
          </form>
        </div>
      </div>
      <hr />
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {filteredData?.map((e) => (
          <div key={e._id} className="col">
            <EventCard e={e} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
