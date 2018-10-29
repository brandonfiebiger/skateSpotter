import { SpotCard } from './SpotCard';
import 'react-native';
import React from 'react';


import renderer from 'react-test-renderer';

let tree;
beforeEach(() => {
  tree = renderer.create(
    <SpotCard /> 
  ).toJSON();
})

describe('SpotCard', () => {

  it('should match the snapshot', () => {
    expect(tree).toMatchSnapshot()
  })
})