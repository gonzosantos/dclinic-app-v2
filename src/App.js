import './App.css';
import Parse from 'parse/dist/parse.min.js';
import { UserLogin } from './UserLogIn';


//Paste below the Back4App Application ID AND the JavaScript KEY
Parse.initialize("qTaQkg7YBJezEmaKXPYvdYRcPGURyddS7eMOJVoj", "pWrCh2513z0GfE3an4y4b1s7cjc57UDfPGIlqa2E");
//Point to Back4App Parse API address
Parse.serverURL = 'https://parseapi.back4app.com/'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UserLogin />
      </header>
    </div>
  );
}

export default App;
