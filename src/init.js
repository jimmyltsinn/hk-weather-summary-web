import {resizeWindow} from './redux/actions/ui';
import {fetchSolarTermMap} from './redux/actions/data';

const init = store => {
  store.dispatch(resizeWindow(window.innerWidth, window.innerHeight));
  store.dispatch(fetchSolarTermMap());
  window.addEventListener('resize', () => {
    store.dispatch(resizeWindow(window.innerWidth, window.innerHeight));
  });
};

export default init;
