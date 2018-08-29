import React, { Component } from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Link, Switch } from 'react-router-dom';
import { history } from '../store';
import Main from '../container/Main';
import IssueDetailView from '../container/IssueDetailView';

class App extends Component {

  //Routing and binidng to history
  render(){
    return (
      <ConnectedRouter history={history}>
        <div>
        <h1 className='MainHeading'>
            <Link to="/" title='Home'>Github Issues</Link>
        </h1>
          <Switch>
            <Route path='/' exact component={Main}/>
            <Route path='/details/:issueNumber' component={IssueDetailView}/>
          </Switch>
        </div>
      </ConnectedRouter>
    )
  }
}

export default App;
