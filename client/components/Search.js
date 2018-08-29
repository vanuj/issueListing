import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ''
    }
  };
  
  submitSearch(e){
    e.preventDefault();
    if(this.state.searchText != '')
    this.props.searchIssues(this.state.searchText);
  };

  handleChange(e){
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    });
  };

  render() {
     const { count } = this.props;
     return (
        <form className="search" onSubmit={this.submitSearch.bind(this)}>
            <input type="search" 
              className="searchField" 
              aria-label="Search"
              name="searchText"
              placeholder="Search Issue.." 
              onChange={this.handleChange.bind(this)}
            />
            <input type='Submit'/>
            {(count > 0 ) ? <p> Total search result retrieved {count}</p> : ''}
        </form>
    )
  }
}

export default Search;