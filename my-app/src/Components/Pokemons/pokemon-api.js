const fetchPokemon = name => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(res => {
          if (res.ok) {
            return res.json();
          }
          return Promise.reject(new Error(`Нема покемона з iм'ям ${name}`));
        })
}

export default {fetchPokemon};