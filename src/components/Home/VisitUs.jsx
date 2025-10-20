import React from "react";
import Heading from "../Shared/Heading";

const VisitUs = () => {
  return (
    <div className="my-10">
      <div className="text-center mb-10">
        <Heading label={"Visit Our Apartment"} textSize={"lg"}></Heading>
      </div>

      <div className="flex flex-col lg:flex-row">
        <div className="flex-1 self-center px-5 lg:px-0">
          {/* Left: Details */}
          <div>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 mb-4">
              Find Us Easily
            </h2>
            <p className="text-lg leading-relaxed text-slate-600 mb-6">
              Our apartments are located in the heart of the city, offering easy
              access to cafes, transport, and shopping areas. Just 5 minutes
              from the main metro station and 10 minutes from the airport.
            </p>

            <div className="space-y-3 text-slate-700">
              <p>
                <span className="font-semibold">📍 Address:</span> 123 Park
                Avenue, City Center
              </p>
              <p>
                <span className="font-semibold">🚇 Nearest Station:</span>{" "}
                Downtown Metro (500m)
              </p>
              <p>
                <span className="font-semibold">🚗 Parking:</span> Free private
                parking available
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <iframe
            width="100%"
            height="600"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=USA+(NZCONDOS%20APARTMENTS)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.mapsdirections.info/it/calcola-la-popolazione-su-una-mappa/">
              mappa della popolazione Italia
            </a>
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default VisitUs;
