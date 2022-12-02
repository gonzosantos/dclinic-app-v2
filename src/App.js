import './App.css';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Parse from 'parse/react-native';

//Before using the SDK...
Parse.setAsyncStorage(AsyncStorage);

//Saving your First Data Object on Back4App
async function saveNewPerson() {
  const person = new Parse.Object("Person");

  person.set("name", "John Snow");
  person.set("age", 27);
  try {
    let result = await person.save()
    alert('New object created with objectId: ' + result.id);
    } catch(error) {
        alert('Failed to create new object, with error code: ' + error.message);
    }
  } 

//Reading your First Data Object from Back4App
async function retrievePerson() {
  const query = new Parse.Query("Person");
  
  try {
    const person = await query.get("mhPFDlCahj");
    const name = person.get("name");
    const age = person.get("age");
  
    alert(`Name: ${name} age: ${age}`);
  } catch (error) {
    alert(`Failed to retrieve the object, with error code: ${error.message}`);
  }
}  

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="Octocat.png" className="App-logo" alt="logo" />
        <p>
          GitHub Codespaces <span className="heart">♥️</span> React
        </p>
        <p className="small">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
