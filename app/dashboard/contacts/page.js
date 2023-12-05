
import React from "react";

const Contacts = () => {
  const Maps =
    "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1336.8945278674178!2d28.467739180222416!3d49.23211245386739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sru!2sua!4v1701161401822!5m2!1sru!2sua";
  return (
    <div className=" flex">
      <iframe
        className=" m-10 rounded-2xl "
        width={600}
        height={450}
        title="map"
        src={Maps}
      ></iframe>
      <div className=" flex flex-col items-center justify-center w-1/2 text-3xl">
        <h2>Зворотній зв&apos;язок:</h2>
      </div>
    </div>
  );
};

export default Contacts;