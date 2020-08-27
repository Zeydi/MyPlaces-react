import React from 'react';

import Input from '../../shraed/components/FormElements/Input';
import { VALIDATOR_REQUIRE } from '../../shraed/util/validators';
import './NewPlace.css';

const NewPlace = () => {
  return (
    <form className="place-form">
      <Input
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title"
      ></Input>
    </form>
  );
};

export default NewPlace;
