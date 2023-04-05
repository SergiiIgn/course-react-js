import './App.css';
import Albums from './components/Albums';
import AlbumsContext from './components/AlbumsContext';
import { DataProvider } from './components/context';
import Square from './components/Square';
import VideoPlayer from './components/VideoPlayer';

function App() {
  return (
    <div >
      {/* <Albums /> */}
      <DataProvider>
        <AlbumsContext />
        {/* <form onSubmit={this.onSubmit}>
          <input 
            placeholder='Number' 
            value={this.state.quantity} 
            onChange={this.changeQuantityValue}/>
          <button type='submit'>Enter</button>
        </form> */}
      </DataProvider>
      {/* <Square /> */}
      {/* <VideoPlayer /> */}

    </div>
  );
}

export default App;
