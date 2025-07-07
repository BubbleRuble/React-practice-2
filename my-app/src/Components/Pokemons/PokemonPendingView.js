import { ImSpinner } from 'react-icons/im';
import pendingImage from './pending.png'
import PokemonDataView from './PokemonDataView';

const PokemonPendingView = ({ pokemonName }) => {
  const pokemon = {
    name: pokemonName,
    sprites: {
      other: {
        'official-artwork': {
          front_default: pendingImage,
        }
      }
    },
    stats: []
  }

  return (
    <div role="alert">
      <div>
        <ImSpinner size={32} />
        Downloading...
      </div>
      <PokemonDataView pokemon={pokemon}/>
    </div>
  );
};

export default PokemonPendingView;
