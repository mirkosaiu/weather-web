import Loadable from 'react-loadable';
import Loading from 'Components/Loading';



const Archive = Loadable({
  loader: () => import('./Archive'),
  loading: Loading,
});

export default Archive;
