import { UserProfileCon } from "./containers/userProfile/userProfile";
import { UserPostCon } from "./containers/post/post";

import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <div>
          <UserProfileCon firstName="Вася" lastName="Пупкин"/>
          <UserPostCon title="Первый пост" post="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod." publicationDate="30.11.2021"/>
        </div>
      </header>
    </div>
  );
}

export default App;
