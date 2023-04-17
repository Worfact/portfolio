import GridLink from './GridLink';
import './styles.scss';

function Home() {
  return (
    <div className="home">
      <h1 className="home-title">Pierre-Loïc</h1>
      <h1 className="home-title">Guille des Buttes</h1>
      <p className="home-presentation">developpeur front-end</p>
      <GridLink />
    </div>
  );
}

export default Home;
