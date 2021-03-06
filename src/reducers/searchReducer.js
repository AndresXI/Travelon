import { GET_COUNTRY } from '../actions';

export default function (state = [], action) {
  switch (action.type) {
    case GET_COUNTRY:
      return [action.payload.data[0], ...state];
    default: state = [];
  }

  return state;
}