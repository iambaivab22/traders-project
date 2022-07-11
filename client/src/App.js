import './App.css';
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom'
import Home from './components/Home'
import SingleNews from './components/SinglePage/SingleNews';
import SingleMarket from './components/Market/SingleMarket';
import Login from './components/admin/Login'
import Dashboard from './components/admin/Dashboard'
import Articles from './components/admin/Articles'
import AddArticle from './components/admin/AddArticle'
import AddCategory from './components/admin/AddCategory'
import ProtectedRoutes from './components/ProtectedRoutes';
import Unauthorized from './components/Unauthorized';
import NotFound from './components/NotFound';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/'  exact component={Home} />
          <Route path='/news/:id'  exact component={SingleNews} />
          <Route path='/company/:name'  exact component={SingleMarket} />
          <Route path='/admin/login'  exact component={Login} />
          <ProtectedRoutes exact path='/admin' component={Dashboard}/>
          <ProtectedRoutes exact path='/admin' component={Dashboard}/>
          <ProtectedRoutes exact path='/admin/articles' component={Articles}/>
          <ProtectedRoutes exact path='/admin/new-article' component={AddArticle}/>
          <ProtectedRoutes exact path='/admin/add-category' component={AddCategory}/>
          <Route exact path='/unauthorized' component={Unauthorized} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
