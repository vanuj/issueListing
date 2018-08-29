// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
// import * as actionCreators from '../actions/actionCreators';
// import Main from './Main';

// function mapStateToProps(state) {
//   return {
//     posts: state.posts,
//     comments: state.comments
//   }
// }

// function mapDispachToProps(dispatch) {
//   return bindActionCreators(actionCreators, dispatch);
// }

// const App = connect(mapStateToProps, mapDispachToProps)(Main);

// export default App;








// import React from 'react';
// import { Link } from 'react-router';
// import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

// import Main from '../container/Main';
// import Issue from './Issue';
// import IssueDetailView from '../container/IssueDetailView';


// const App = React.createClass({
//   render() {
//     return (
//       <div>
//         <h1 className="MainHeading">
//           <Link to="/">Github Issues</Link>
//         </h1>
//         {/* {React.cloneElement({...this.props}.children, {...this.props})} */}

//           <BrowserRouter>
//             <Switch>
//               <Route  exact path="/" component={Main} />
//               <Route path="/detail/:issueId" component={IssueDetailView} />
//               {/* IssueDetailPage */}
//               <Redirect to="/" />
//             </Switch>
//           </BrowserRouter>
//       </div>
//     )
//   }
// });

// export default App;

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