import React from 'react';
import superagent from 'superagent';

class Form extends React.Component {
  handleSubmit = async (e) => {
    e.preventDefault();
    const data = await superagent.get('https://swapi.co/api/people/');
    const count = data.body.count;
    const people = data.body.results.reduce((list, person) => {
      list[person.name] = person.url;
      return list;
    }, {});

    this.props.handler(count, people);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <button>{this.props.prompt}</button>
      </form>
    );
  }
}

export default Form;
