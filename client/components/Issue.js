import React from 'react';
import { Link } from 'react-router-dom';

class Issue extends React.Component {

  render() {
    const { title, comments, state, user, number} = this.props.issue;
    const routeUrl = `/details/${number}`;
    return (
      <div className="issue">
        <span>#{number}</span>
        <Link to={routeUrl}>
          <div className="issueLink">
            <span title={title}>{title}</span>
          </div>
        </Link>
        <span className='issueCommentsCount'>{comments}</span>
        <span className='issueState'>{state}</span>
        <span className='issueUserLogin'>{user.login}</span>
      </div>
    )
  }
}
export default Issue
