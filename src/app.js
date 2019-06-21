import React from 'react';

import Form from './form.js';
import If from './if';
import Modal from './components/modal/modal';

import './styles.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      people: [],
      selectedPerson: '',
    };
  }

  handleForm = (count, people) => {
    this.setState({ count, people });
  };

  showPerson = (person) => {
    this.setState({ selectedPerson: person });
  };

  handleClick = (event) => {
    event.preventDefault();

    this.setState(previousState => ({
      selectedPerson: !previousState.selectedPerson,
    }));
  };

  render() {
    return (
      <>
        <Form prompt="Get some Star Wars Folks..." handler={this.handleForm} />
        <If condition={this.state.selectedPerson}>
          <Modal>{this.state.selectedPerson}</Modal>
          <button onClick={this.handleClick}>Hide</button>
        </If>
        <ul>
          {Object.keys(this.state.people).map((person, idx) => {
            return (
              <li key={idx}>
                <a href="#" onClick={() => this.showPerson(person)}>
                  {person}
                </a>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default App;
