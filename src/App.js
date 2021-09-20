import { Fragment } from 'react';

import BasicLayout from './layout/basicLayout.jsx';
import LoginForm from './component/login.jsx';

import './App.css';

function App() {
  return (
    <Fragment>
      <BasicLayout content={<LoginForm />} />
    </Fragment>
  );
}

export default App;
