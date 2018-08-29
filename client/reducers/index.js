import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import issues from './issues';
import issueDetails from './issueDetails';

//const rootReducer = combineReducers({posts, comments, routing: routerReducer });

const rootReducer = combineReducers({issues, issueDetails});

export default rootReducer;
