import { spotReducer } from './spotReducer';
import * as actions from '../actions';


describe('spotReducer', () => {
  it('should return state by default', () => {
    const expected = [];
    const result = spotReducer(undefined, {});
    expect(result).toEqual(expected);
  })

  it('should return all of the spots with populateSpots', () => {
    const expected = ['spot1', 'spot2'];
    const result = spotReducer([], actions.populateSpots(expected))
    expect(result).toEqual(expected)
  })

  it('should add a spot to store', () => {
    const expected = ['spot1', 'spot2', 'spot3'];
    const initial = ['spot1', 'spot2'];
    const result = spotReducer(initial, actions.addSpot('spot3'));
    expect(result).toEqual(expected);
  })
})