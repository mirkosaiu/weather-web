import Loadable from 'react-loadable';
import Loading from 'Components/Loading';



const Home = Loadable({
  loader: () => import('./Home'),
  loading: Loading,
});

export default Home;
