import './App.css';
import Hello from './components/Hello';
import Helloarrow from './components/Helloarrow';
import Myname from './components/Myname';
import List1 from './components/List1';
import List2 from './components/List2';
import Helloalice from './components/Helloalice';

function App() {
  return (
    <div className="App">
      <Hello />
      <hr/>
      <Helloarrow/>
      <hr/>
      <Myname name = "Satyam" />
      <hr/>
      <List1/>
      <hr/>
      <List2/>
      <hr/>
      <Helloalice/>

    </div>
  );
}

export default App;
