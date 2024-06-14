import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="d-flex my-5 p-5">
        <div className="w-50">
          <h1 className="display-6 fw-bold my-4">
            The people platform—Where interests become friendships
          </h1>
          <p className="text-secondary fs-6">
            Whatever your interest, from hiking and reading to networking and
            skill sharing, there are thousands of people who share it on Meetup.
            Events are happening every day—sign up to join the fun.
          </p>
          <button
            style={{ backgroundColor: "#008FA3" }}
            className="btn text-white my-3"
          >
            Join Meetup
          </button>
        </div>
        <div className="w-50 mx-5">
          <img
            className="w-100"
            src="https://secure.meetupstatic.com/next/images/indexPage/irl_event.svg?w=384"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
