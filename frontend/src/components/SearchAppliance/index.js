import React, { Component } from "react";
import axios from "axios";
import './index.css'
class SearchAppliances extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      suggestions: [],
    };
  }

  fetchSuggestions = (query) => {
    if (query) {
      axios
        .get("https://nviri-backend-3.onrender.com/search-appliances", { params: { q: query } })
        .then((response) => {
          this.setState({ suggestions: response.data });
        })
        .catch((error) => {
          console.error("Error fetching suggestions:", error);
        });
    } else {
      this.setState({ suggestions: [] });
    }
  };

  handleInputChange = (event) => {
    const query = event.target.value;
    this.setState({ query }, () => {
      this.fetchSuggestions(query);
    });
  };

  render() {
    const { query, suggestions } = this.state;

    return (
      <>
      <div className='drop-container'>
        <input
          value={query}
          onChange={this.handleInputChange}
          className="inp-cont"
          type="search"
          placeholder='Search Home Appliances'
        />
        <button type='search' className='srch-btn'>Search</button>
        </div>
        <ul>
          {suggestions.map((suggestion, index) => (
            <li key={index}>{suggestion}</li>
          ))}
        </ul>
      </>
    );
  }
}

export default SearchAppliances;
