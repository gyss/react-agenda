import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Header from '../index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Header />, div);
});

it('renders correctly', () => {
  const tree = renderer.create(
    <Header>React Agenda 2017</Header>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});