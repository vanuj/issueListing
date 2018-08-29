export function getIssues(issueList) {
  return {
    type: 'GET_ISSUES',
    issueList
  }
}

export function issueCount(issueCount){
  return {
    type: 'SET_ISSUE_COUNT',
    issueCount
  }
}
export function getIssuesDetails(issueDetails) {
  return {
    type: 'GET_ISSUE_DETAILS',
    issueDetails
  }
}

export function fetchIssues() {
  return  function (dispatch) {
    try {
        const raw =  fetch('https://api.github.com/repos/coq/coq/issues?page=1&per_page=25')
        .then(function(response) {
          return response.json();
        })
        .then(function(myJson) {
          dispatch(getIssues(myJson));
        });
       
    } catch (e) {
        console.log('sad');
    }
  } 
}

export const fetchIssueDetails = (issueNumber) => (dispatch) => {
  return fetch(`https://api.github.com/repos/facebook/react/issues/${issueNumber}`)
  .then((details) => details.json())
  .then((detailsJson) => dispatch(getIssuesDetails(detailsJson)))
}

export const searchIssues = (searchQuery) => (dispatch) => {
  const q = `${searchQuery} in:title`;
  return fetch(`https://api.github.com/search/issues?q=${searchQuery}`)
  .then((issues) => issues.json())
  .then((issuesJson) => {
    dispatch(getIssues(issuesJson.items))
    dispatch(issueCount(issuesJson.total_count))
  })
}
