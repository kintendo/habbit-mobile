const {createStore, combineReducers} = require('redux');
const userReducer = require('./reducers/UserReducer');
const viewReducer = require('./reducers/ViewReducer');
const habbitReducer = require('./reducers/HabbitReducer');
const categoryReducer = require('./reducers/CategoryReducer');

const AppReducer = combineReducers({
  userData: userReducer,
  viewData: viewReducer,
  habbitData: habbitReducer,
  catData: categoryReducer
});

const AppStore = createStore(
  AppReducer,
);

module.exports = AppStore;
