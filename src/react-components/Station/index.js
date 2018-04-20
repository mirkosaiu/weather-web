import Loadable from 'react-loadable';
import Loading from 'Components/Loading';



const Station = Loadable({
  loader: () => import('./Station'),
  loading: Loading,
});

export default Station;
