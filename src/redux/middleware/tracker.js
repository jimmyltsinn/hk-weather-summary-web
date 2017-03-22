import ReactGA from 'react-ga';
import tap from 'redux-tap';

import Config from '../../config.js';

ReactGA.initialize(Config.gaTrackingId);

let middleware = tap(action => action.meta && action.meta.analytics, (meta, action) => {
  ReactGA.event({
    category: meta.category,
    action: action.type,
    label: JSON.stringify(action)
  });
});

export default middleware;
