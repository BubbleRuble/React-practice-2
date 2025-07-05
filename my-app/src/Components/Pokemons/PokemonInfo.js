import { Component } from 'react';
import PokemonDataView from './PokemonDataView';
import PokemonErrorView from './PokemonErrorView';
import PokemonPendingView from './PokemonPendingView';

export default class PokemonInfo extends Component {
  state = {
    pokemon: null,
    error: null,
    status: 'idle',
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.pokemonName;
    const nextName = this.props.pokemonName;

    if (prevName !== nextName) {
      this.setState({ status: 'pending'});
      fetch(`https://pokeapi.co/api/v2/pokemon/${nextName}`)
        .then(res => {
          if (res.ok) {
            return res.json();
          }
          return Promise.reject(new Error(`Нема покемона з iм'ям ${nextName}`));
        })
        .then(pokemon => this.setState({ pokemon, status: 'resolved' }))
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }

  render() {
    const { pokemon, error, status } = this.state;

    if (status === 'idle') {
      return <div>Введіть ім'я покемона</div>;
    }

    if (status === 'pending') {
      return <div>Downloading...</div>;
    }

    if (status === 'reject') {
      return <h2>{error.message}</h2>;
    }

    if (status === 'resolved') {
      return (
        <div>
          {pokemon.name}
          <img
            src={pokemon.sprites.other['official-artwork'].front_default}
            alt=""
            width="240"
          />
        </div>
      );
    }

    return (
      <div>
      </div>
    );
  }
}
