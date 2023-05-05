
import './App.css';
import Address from './components/profile/Address';
import FullName from './components/profile/FullName';
import ProfilePhoto from './components/profile/ProfilePhoto';

function App() {
 const AlertMe=()=>{
alert("Hello Im amira")
 }
  return (

    <div className="App">
      <header className="App-header">
       <ProfilePhoto/>
       <FullName AlertMe={AlertMe}/>
       <Address/>
      </header>
    </div>
  );
}

export default App;
