const convertsToJson = (obj) => {
  let breeds: {}[] = [];
  for (let breed in obj) {
    if (breeds.length === 12) break;
    breeds.push({ name: breed, types: obj.breed });
  }
  return breeds;
};

export default convertsToJson;
