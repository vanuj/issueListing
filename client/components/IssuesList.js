import React from 'react';
import { Link } from 'react-router';
import Issue from '../components/Issue';

const IssuesList = (props) => (
  <div className="issuesList">
    <ul className="">
      {props.issues.issues ? props.issues.issues.map((issue) => <Issue key={issue.id} issue={issue} />) : 'Loading'}
    </ul>
  </div>
)
export default IssuesList
