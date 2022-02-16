// import logo from './logo.svg';
import Navigation from './components/Navigation'
import Profile from './components/Profile'
import TweetList from './components/TweetList'
import TweetForm from './components/TweetForm'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Profile />
      <main className='container'>
        <TweetForm />
        <TweetList />
      </main>
    </div>
  );
}

export default App;
