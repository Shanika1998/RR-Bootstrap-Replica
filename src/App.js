import './App.css';
import topBar from './component/TopBar';
import storeListings from './component/StoreListing';
import backgroundImg from './component/backgroundImage';

const App = () => {
  return (
    <div>
      <topBar/>
      <main>
        <backgroundImg/>
        <storeListings/>
      </main>
    </div>
  );
}

export default App;
