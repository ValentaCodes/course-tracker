import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  //  C
  const [isValid, setIsValid] = useState(true)

  const goalInputChangeHandler = event => {
    // reset styling
    if (event.target.value.trim().length > 0) {
      setIsValid(true)
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    // NOTE: Best Practice to alter state when depending on previous state
    setIsValid(isNowValid => !isNowValid)

    // Sets style dynamically avoiding adding empty goals
    if (enteredValue.trim().length === 0) {
    setIsValid(false) 
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/* This will inject content into the string allowing dynamic styles */}
      <div className={`form-control ${!isValid ? 'invalid' : ''}`}>
        <label>Course Goal</label>
        <input
          type='text'
          onChange={goalInputChangeHandler}
        />
      </div>
      <Button type='submit'>Add Goal</Button>
    </form>
  );
};

export default CourseInput;
