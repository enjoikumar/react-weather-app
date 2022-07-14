import React from 'react';
import { getCurrentWeather } from './../api/open-weather-api.js';



class SearchBar extends React.Component {

  componentDidMount(){

  }

  constructor(props) {
    super(props);
  }

  onInputChange(e){
    this.props.inputChange(e);
  }

  onFormSubmit(e){
    e.preventDefault();

    this.props.formSubmitted();
  }



  render() {

    const location = this.props.location;
    const temp = 'this.state.temp';

    return (
      <div>
        <form onSubmit={(e) => this.onFormSubmit(e)}>
          <button type="submit" className="buttonSubmit">
            search
          </button>

          <input
            id="search"
            type="text"
            name="search"
            value={location}
            onChange={e => this.onInputChange(e)}
            />

        </form>
      </div>
    )
  }
}

export default SearchBar;
