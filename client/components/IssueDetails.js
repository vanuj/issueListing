import React from 'react';
import { Link } from 'react-router-dom';

class IssueDetails extends React.Component {

  render() {
     const { title, user, state, comments, created_at, updated_at,body, number } = this.props.issueDetails.issueDetails;
    return (
        <div className="issue container">
            <h2 className='issueTitle'>{title} <span>#{number}</span></h2>
            <span>User : {user.login}</span>
            <span>State : {state}</span>
            <span>Created at : {new Date(created_at).toLocaleString()}</span>
            <span>Comments : {comments}</span>
            <p className='greyBodyText'>{body}</p>
        </div>
    )
  }
}
export default IssueDetails
