// const countryRepo = require('./country.repository');
const countryList = require('./__mock__/countriesList');

const getAll = async (lang) => {
  // const countries = await countryRepo.getAllByLang(lang);
  // return countries;
  return countryList.filter((e) => e.lang == lang);
};

const getOne = async (id, lang) => {
  // const country = await countryRepo.getOneByLang(id, lang);
  // return country;
  return countryList.find((e) => e.id == id && e.lang == lang);
};

module.exports = {
  getAll,
  getOne,
};
