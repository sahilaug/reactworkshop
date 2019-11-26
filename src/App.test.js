import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App, { Button, Input } from './App';
import '@testing-library/jest-dom/extend-expect';

/*
  TESTS FOR BUTTON
*/

// it should be rendered with correct props
// it should call the click handler when clicked

/*
  TESTS FOR INPUT COMPONENT
*/

// it should render with correct props
// on typing in the input element, the text inside should change

/*
  TESTS FOR APP COMPONENT
*/
// it should render correctly (should have two input elements, a button element, and a result text)
// it should be able to add two numbers correctly
