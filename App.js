
  


import './App.css';
import Sidebar from './Sidebar';
import Feed from './Feed'
import Widget from './Widget';
import SignIn from './SignIn';

function App() {
  return (
    <div className="app">
      <SignIn/>
      <Sidebar/>
      {/* Feed Section */}
      <Feed />
      {/* Widget Section */}

      <Widget/>
      
    </div>
    
    
  );
}

export default App;
