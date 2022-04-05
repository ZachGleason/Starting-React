import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <>
    <form action="" method='post' id='send'>
      <input type="text" placeholder='Name' name='name'/>
      <input type="email" placeholder='Email' name='email'/>
      <input type="password" placeholder='Password' name='password'/>
      <button> Submit</button>
    </form>
    </>
  );
}

export default App;
