import React from 'react';
import { ImSearch } from "react-icons/im";

export default class PokemonForm extends React.Component {
  state = {
    pokemonName: '',
  };

  handleNameChange = e => {
    this.setState({ pokemonName: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault()

    if (this.state.pokemonName.trim() === '') {
      alert("Введіть ім'я покемона")
      return;
    }

    this.props.onSubmit(this.state.pokemonName)
    this.setState({pokemonName: ''})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="pokemonName"
          value={this.state.pokemonName}
          onChange={this.handleNameChange}
        />
        <button type="submit">
          <ImSearch style={{ marginRight: 8 }} />
          Знайти
        </button>
      </form>
    );
  }
}
