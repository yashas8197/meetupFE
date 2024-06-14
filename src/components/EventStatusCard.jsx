import { BadgeIndianRupee, MapPin, Share, Video } from "lucide-react";
import React from "react";

const EventStatusCard = ({ data }) => {
  return (
    <div>
      {data?.eventType === "Online" ? (
        <div>
          <div className="d-flex">
            <Video className="text-secondary" />
            <div className="mx-3">
              <p style={{ height: "2px" }}>Online Event in {data?.location}</p>
              <p style={{ height: "1px" }} className="text-secondary">
                Link visible for attendees
              </p>
            </div>
          </div>
          <hr />
          <div className="d-flex">
            {data.speakers.length !== 0 &&
              data?.speakers.map((speaker) => (
                <div
                  key={speaker._id}
                  className="shadow p-3 mb-5 bg-body rounded mx-2 w-50"
                >
                  <h5>Speaker: </h5>
                  <img
                    style={{ height: "60px", width: "60px" }}
                    className="img-fulid rounded-circle"
                    src={speaker.image}
                  />
                  <p>{speaker.name}</p>
                  <span className="fw-bold">{speaker.designation}</span>
                </div>
              ))}
          </div>
          <div className="d-flex">
            <BadgeIndianRupee className="text-secondary" />
            <p className="mx-3">
              {data?.price === "Free" ? "Free" : `${data?.price} Only`}
            </p>
          </div>
          <div className="d-flex justify-content-between">
            <button
              type="button"
              style={{
                borderColor: "#00798A",
                textDecorationColor: "#00798A",
              }}
              class="btn fw-bold px-3"
            >
              Share <Share />
            </button>
            <button
              style={{ backgroundColor: "#F65858" }}
              className="btn mx-3 px-4 text-white fw-bold"
            >
              Attend
            </button>
          </div>
        </div>
      ) : (
        <div className="d-flex">
          <MapPin className="text-secondary" />
          <div className="mx-3">
            <p style={{ height: "2px" }}>{data?.location}</p>
            <p className="text-secondary m-3">{data?.address}</p>
            <img
              className="img-fluid rounded"
              src="https://maps-googleapis.meetup.com/maps/api/staticmap?center=13.502664%2C%2075.09032&zoom=17&size=480x300&format=png&scale=1&key=AIzaSyBhcQiQISkjMBwLAugJj8V78nMPfitnr44&markers=icon%3Ahttps%3A%2F%2Fsecure.meetupstatic.com%2Fnext%2Fimages%2Fevent%2Fmup-custom-google-map-pin.png%7Ccolor%3A0xF65858%7C13.502664%2C%2075.09032"
            />
            <hr />
            <div className="d-flex">
              {data?.speakers !== 0 &&
                data?.speakers.map((speaker) => (
                  <div
                    key={speaker._id}
                    className="shadow p-3 mb-5 bg-body rounded mx-2 w-50"
                  >
                    <h5>Speaker: </h5>
                    <img
                      style={{ height: "60px", width: "60px" }}
                      className="img-fulid rounded-circle"
                      src={speaker.image}
                    />
                    <p>{speaker.name}</p>
                    <span className="fw-bold">{speaker.designation}</span>
                  </div>
                ))}
            </div>
            <div className="d-flex">
              <BadgeIndianRupee className="text-secondary" />
              <p className="mx-3">
                {data?.price === "Free" ? "Free" : `${data?.price} Only`}
              </p>
            </div>

            <div className="d-flex justify-content-between">
              <button
                type="button"
                style={{
                  borderColor: "#00798A",
                  textDecorationColor: "#00798A",
                }}
                class="btn fw-bold px-3"
              >
                Share <Share />
              </button>
              <button
                style={{ backgroundColor: "#F65858" }}
                className="btn mx-3 px-4 text-white fw-bold"
              >
                Attend
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventStatusCard;
