import './App.css';
import { Layout } from './component/Layout/Layout.tsx';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from 'component/pages/home/Home';
const App = () => {
  return (
    <div>
      <Layout />
      <Route exact path="/" component={Home} />
    </div>
  );
};

export default App;
