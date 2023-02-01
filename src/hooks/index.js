import axios from "axios";

export async function getCharacters() {
  let array = [];

  const response = await axios.get(
    "https://rickandmortyapi.com/api/character/"
  );
  const result = await axios.get(
    "https://rickandmortyapi.com/api/character?page=2"
  );
  const result2 = await result.data.results.map((character) => {
    return {
      id: character.id,
      name: character.name,
      image: character.image,
      species: character.species,
    };
  });
  const data = await response.data.results.map((character) => {
    return {
      id: character.id,
      name: character.name,
      image: character.image,
      species: character.species,
    };
  });

  const respuestaFinal = await Promise.all([data , result2])

    respuestaFinal[0].forEach((element) => { 
        array.push(element)
    })
    respuestaFinal[1].forEach((element) => { 
        array.push(element)
    })

    return array
}
