import { Route } from 'react-router-dom';
import { Posting, Login } from './pages/index.jsx';

import './App.css';

function App() {
  return (
    <div>
      <Route exact path="/" component={Login} />
      <Route path="/posting" component={Posting} />
    </div>
  );
}

export default App;
