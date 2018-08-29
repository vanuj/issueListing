import React, { Component } from 'react';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/actionCreators';
import IssuesList from '../components/IssuesList';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Search from '../components/Search';

const mapStateToProps = (state) => {
  return {
    issues: state.issues,
    count: state.count
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators(actionCreators, dispatch);

class Main extends Component {

  componentDidMount() {
    this.props.fetchIssues();
  }

  render() {
    return (
      <div className="container">
        <h2 className=''>Issue List </h2>
        <Search searchIssues={this.props.searchIssues} count={this.props.issues.issueCount}/>
        <IssuesList issues={this.props.issues}/>
      </div>
    )
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
