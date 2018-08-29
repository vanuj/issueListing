import React, { Component } from 'react';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/actionCreators';
import IssuesList from '../components/IssuesList';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import IssuesDetails from '../components/IssueDetails';

const mapStateToProps = (state) => {
  return {
    issueDetails: state.issueDetails
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators(actionCreators, dispatch);

class IssueDetailView extends Component {

  componentDidMount() {
    this.props.fetchIssueDetails(this.props.match.params.issueNumber);
  }

  render() {

    return (
      <div className="IssueDetailsContainer">
        {this.props.issueDetails ? <IssuesDetails issueDetails={this.props.issueDetails}/>: 'Loading'}
      </div>
    )
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(IssueDetailView));
