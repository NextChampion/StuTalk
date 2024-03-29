import mapValues from 'lodash/mapValues';

const middlewares = [];
// if (__DEV__) {
const {createLogger} = require('redux-logger');
middlewares.push(
  createLogger({
    collapsed: true,
    stateTransformer: state => mapValues(state, s => (s.toJS ? s.toJS() : s)),
  }),
);
// }

export default middlewares;
