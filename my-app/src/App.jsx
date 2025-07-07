import { Component } from 'react';
import { LoginForm } from './Components/LoginForm';
import { ProductReviewForm } from './Components/ProductReviewForm/ProductReviewForm';
import PokemonForm from './Components/Pokemons/PokemonForm';
import PokemonInfo from './Components/Pokemons/PokemonInfo';
// import PokemonInfo from './Components/Pokemons/PokemonInfo';

class App extends Component {
  state = {
    pokemonName: '',
  };

  handleFormSubmit = pokemonName => {
    this.setState({ pokemonName });
  };

  render() {
    return (
      <div style={{ maxWidth: 1170, margin: '0 auto', padding: 20 }}>
        <PokemonForm onSubmit={this.handleFormSubmit} />
        <PokemonInfo pokemonName={this.state.pokemonName}/>
        {/* <LoginForm/>  */}
        {/* <ProductReviewForm/>  */}
      </div>
    );
  }
}

export default App;
