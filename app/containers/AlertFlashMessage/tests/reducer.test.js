
import { fromJS } from 'immutable';
import alertFlashMessageReducer from '../reducer';

describe('alertFlashMessageReducer', () => {
  it('returns the initial state', () => {
    expect(alertFlashMessageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
