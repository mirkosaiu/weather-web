import Loadable from 'react-loadable';
import Loading from 'Components/Loading';



const Statistics = Loadable({
  loader: () => import('./Statistics'),
  loading: Loading,
});

export default Statistics;
