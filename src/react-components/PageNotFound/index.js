import Loadable from 'react-loadable';
import Loading from 'Components/Loading';



const PageNotFound = Loadable({
  loader: () => import('./PageNotFound'),
  loading: Loading,
});

export default PageNotFound;
