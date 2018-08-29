function issues(state = [], action) {
    switch(action.type) {
      case 'GET_ISSUES' :
        console.log('Getting issues !!');
        return {
            ...state, issues: action.issueList
        };

      case 'SET_ISSUE_COUNT':
        console.log('Setting issue count');
        return {
          ...state,
          issueCount: action.issueCount
        }
      default:
        return state;
    }
  }
  
  export default issues;
  