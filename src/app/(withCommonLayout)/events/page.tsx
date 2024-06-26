import Image from 'next/image';
import React from 'react';

const EventsPage = () => {
  return (
    <div>
      <div>
        <Image
          src="https://assets.awwwards.com/awards/submissions/2018/04/5acb5268dea5f.jpg"
          alt="Professional Card Image"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div>
        <h1>tITLE</h1>
        <p>Date</p>
        <p>desc</p>

      </div>
    </div>
  );
};

export default EventsPage;