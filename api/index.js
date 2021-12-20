import axios from 'axios'

const METHOD = 'https://www.thecocktaildb.com/api/json/v1/1/'

const getCocktails = name => axios.get(`${METHOD}filter.php?c=${name}`)

const getFilters = () => axios.get(`${METHOD}list.php?c=list`)

export default { getCocktails, getFilters }
