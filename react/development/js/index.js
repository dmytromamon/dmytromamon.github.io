import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  Router,
  Route,
  IndexRoute
} from 'react-router'
import {
  createHashHistory
} from 'history';

var name;



class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    if (this.state.value !== '') {
      name = this.state.value;
    } else {
      name = 'Stranger';
    }
    
    function getName(name) {
      return <span className="greeting"> {name}</span>
    }
    
    const element = (
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <h1>
              Hello, {getName(name)}!
            </h1>
          </div>
        </div>
      </div>
    )
    
    ReactDOM.render(
      element,
      document.getElementById('root')
    );
    event.preventDefault();
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <form onSubmit={this.handleSubmit}>
              <label>
                Name:
                <input type="text" value={this.state.value} onChange={this.handleChange} />
              </label>
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <NameForm />,
  document.getElementById('root')
);