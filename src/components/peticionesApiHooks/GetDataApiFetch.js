const urlApi = `https://pokeapi.co/api/v2/pokemon/`;
export const getDataApi = async () => {
  const apiFetch = await fetch(urlApi);
  const data = await apiFetch.json();
  const results = await data.results;
  console.log(results);
  const resultMapFetch = await results.map(
    async (poke) => await fetch(urlApi + poke.id)
  );
  const resultsMapJson = await resultMapFetch.json;
  const resultsMapData = await resultsMapJson.data;
  console.log(resultsMapData);
  return results;
};
