import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Input from '../../shraed/components/FormElements/Input';
import Button from '../../shraed/components/FormElements/Button';
import Card from '../../shraed/components/UIElements/Card';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from '../../shraed/util/validators';
import { useForm } from '../../shraed/hooks/form-hook';

import './PlaceForm.css';

const DUMMY_PLACES = [
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
    title: 'alli arena stadium',
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

const UpdatePlace = () => {
  const [isLoading, setIsLoading] = useState(true);
  const placeId = useParams().placeId;

  const [formState, inputHandler, setFormData] = useForm(
    {
      title: {
        value: '',
        isValid: false,
      },
      description: {
        value: '',
        isValid: false,
      },
    },
    false
  );

  const identifiedPlace = DUMMY_PLACES.find((p) => p.id === placeId);

  useEffect(() => {
    if (identifiedPlace) {
      setFormData(
        {
          title: {
            value: identifiedPlace.title,
            isValid: true,
          },
          description: {
            value: identifiedPlace.description,
            isValid: true,
          },
        },
        true
      );
      setIsLoading(false);
    }
  }, [setFormData, identifiedPlace]);

  const placeUpdateSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  if (!identifiedPlace) {
    return (
      <div className="center">
        <Card>
          <h2>Could not find place!</h2>
        </Card>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="center">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <form className="place-form" onSubmit={placeUpdateSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={inputHandler}
        initialValue={formState.inputs.title.value}
        initialValid={formState.inputs.title.isValid}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (min. 5 characters)."
        onInput={inputHandler}
        initialValue={formState.inputs.description.value}
        initialValid={formState.inputs.description.isValid}
      />
      <Button type="submit" disabled={!formState.isValid}>
        UPDATE PLACE
      </Button>
    </form>
  );
};

export default UpdatePlace;
