import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './components/Navbar';
import TodoList from './components/TodoList';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <NavBar titre="Application TodoList" />
      </header>
      <main className="container">
        <div className="row">
          <div className="col-md-6 mt-5">
            <TodoList />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
