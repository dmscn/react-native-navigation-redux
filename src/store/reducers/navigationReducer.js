import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';
import { AppNavigator } from '../../navigators/AppNavigator';

const router = AppNavigator.router;
const mainNavAction = router.getActionForPathAndParams('Main');
const initialNavState = router.getStateForAction(mainNavAction);

const NavigationReducer = (state = initialNavState, action) => {
  const newState = router.getStateForAction(action, state);  
  return newState || state;
}

export default NavigationReducer;