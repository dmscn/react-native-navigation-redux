import { combineReducers } from 'redux';
import PlacesReducer from './places';
import NavigationReducer from './navigationReducer';

const AppReducer = combineReducers({
  places: PlacesReducer,
  nav: NavigationReducer,
});

export default AppReducer;