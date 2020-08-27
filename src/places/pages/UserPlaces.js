import React from 'react';
import { useParams } from 'react-router-dom';

import PlacesList from '../components/PlacesList';

const UserPlaces = () => {
  const PLACES = [
    {
      id: 'p1',
      title: 'allianz arena stadium',
      description: 'Fc bayer munchen stadium',
      imageUrl:
        'https://fcbayern.com/binaries/content/gallery/fc-bayern/homepage/stadien/allianz-arena/200512_arena.jpg',
      address: 'Werner-Heisenberg-Allee 25, 80939 München, Germany',
      location: {
        lat: 48.2187997,
        lng: 11.6225185,
      },
      creator: 'u1',
    },
    {
      id: 'p2',
      title: 'allianz arena stadium',
      description: 'Fc bayer munchen stadium',
      imageUrl:
        'https://fcbayern.com/binaries/content/gallery/fc-bayern/homepage/stadien/allianz-arena/200512_arena.jpg',
      address: 'Werner-Heisenberg-Allee 25, 80939 München, Germany',
      location: {
        lat: 48.2187997,
        lng: 11.6225185,
      },
      creator: 'u2',
    },
  ];

  let id = useParams().userId;
  const userPlaes = PLACES.filter((place) => place.creator === id);
  return <PlacesList items={userPlaes} />;
};

export default UserPlaces;
