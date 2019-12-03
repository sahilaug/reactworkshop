import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngleUp, faAngleDown, faHeart } from '@fortawesome/free-solid-svg-icons';
import Card from './Card';
import dataArray from './data';

library.add(faAngleUp, faAngleDown, faHeart);

const [data] = dataArray;

test('it should display correct image inside the card', () => {
  const { getByAltText } = render(<Card {...data} />);
  const imgElement = getByAltText(data.show.name);
  expect(imgElement).toHaveAttribute('src', data.show.image.medium);
});

test('it should display the correct title in the card', () => {
  const { getByTestId } = render(<Card {...data} />);
  const titleElement = getByTestId('title');
  expect(titleElement.textContent).toBe(data.show.name);
});

test('on clicking of fav button, it should be favourited', () => {
  const { getByTestId } = render(<Card {...data} />);
  const favIcon = getByTestId('fav-icon');
  expect(favIcon).not.toHaveStyle('color: red');
  fireEvent.click(favIcon);
  expect(favIcon).toHaveStyle('color: red');
});

test('on click of expand icon, it should expand the sumary', () => {
  const { getByTestId } = render(<Card {...data} />);
  const accodianIcon = getByTestId('accordion-icon');
  expect(getByTestId('summary').innerHTML).toBe('');
  fireEvent.click(accodianIcon);
  expect(getByTestId('summary').innerHTML).not.toBe('');
  expect(getByTestId('summary').textContent).toBe(data.show.summary);
});

test('on click of expand icon, it should invert itself', () => {
  const { getByTestId } = render(<Card {...data} />);
  const accodianIcon = getByTestId('accordion-icon');
  expect(accodianIcon).toHaveAttribute('data-icon', 'angle-down');
  fireEvent.click(accodianIcon);
  expect(accodianIcon).toHaveAttribute('data-icon', 'angle-up');
});
