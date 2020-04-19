import React from 'react';
import ReactDOM from 'react-dom';
import './QuoteForm.css';


const MAX_LENGTH = 30;

class QuoteForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {character: ''};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        if(event.target.value.length <= MAX_LENGTH) {
        this.setState({ character: event.target.value})};

    }
    
    render() {
      return (
        <form
          className="QuoteForm"
        >
          <label htmlFor="character">Character:</label>
          <input
            id="character"
            name="character"
            type="text"
            value={this.state.character}
            onChange={this.handleChange}
          />
        </form>
      );
    }
  }
  
  ReactDOM.render(
    <QuoteForm />,
    document.getElementById('root')
  );

  export default QuoteForm;