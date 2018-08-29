function issueDetails(state = [], action) {
    switch(action.type) {
      case 'GET_ISSUE_DETAILS' :
        console.log('Getting issues details !!');
        return {
            ...state, issueDetails: action.issueDetails
        }
      default:
        return state;
    }
  }
  
  export default issueDetails;
  