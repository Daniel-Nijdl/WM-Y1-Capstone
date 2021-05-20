import * as weather from '../weather.json';

const Map = () => {
  return (
<<<<<<< HEAD
    <div className="mainCDiv">
      <div className="">
        <h5 className="card-title"></h5>
=======
    <div className=" mainCDiv">
      <div className="card-body ">
>>>>>>> 93ff45ac04dc17275608cfbed6026f780095a7cd
        <p className="card-text cardText">
          {
            <div className="map-responsive">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d425345.0131705814!2d-112.40523989506706!3d33.605099093625306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b12ed50a179cb%3A0x8c69c7f8354a1bac!2sPhoenix%2C%20AZ!5e0!3m2!1sen!2sus!4v1620424362796!5m2!1sen!2sus"
                title="Google Maps"
                width="400"
                height="300"
                allowfullscreen=""
                loading="lazy"
                className="map"
              ></iframe>
            </div>
          }
          <br />
          <p>{ new Date(weather.current.dt).toLocaleTimeString("en-US") }</p>
          <p>{ ` ${ weather.lat }, ${ weather.lon } ` }</p>
        </p>
      </div>
    </div>
  );
  // <div className="card" style={{ width: "25rem" }}>
  //   <div className="card-body">
  //     <p className="card-text">
  //       {
  //         <iframe
  //           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d425345.0131705814!2d-112.40523989506706!3d33.605099093625306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b12ed50a179cb%3A0x8c69c7f8354a1bac!2sPhoenix%2C%20AZ!5e0!3m2!1sen!2sus!4v1620424362796!5m2!1sen!2sus"
  //           title="Google Maps"
  //           width="300"
  //           height="200"
  //           allowfullscreen=""
  //           loading="lazy"
  //           className= "map"
  //         ></iframe>
  //       }
  //     </p>
  //   </div>
  // </div>;
};

export default Map;
