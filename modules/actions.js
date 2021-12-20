import api from '../api'
import { SESSION_GET_COCKTAILS, SESSION_GET_FILTERS, SESSION_SET_ACTIVE_FILTERS } from './constants'

const getCocktailsAction = payload => ({ type: SESSION_GET_COCKTAILS, payload })
const getFiltersAction = payload => ({ type: SESSION_GET_FILTERS, payload })
const setActiveFilterAction = payload => ({ type: SESSION_SET_ACTIVE_FILTERS, payload })

export const getCocktails = (name, first) => dispatch => api.getCocktails(name)
  .then(({ data }) => dispatch(getCocktailsAction({ name, drinks: data.drinks, first })))
  .catch(err => console.log('err', err))

export const getFilters = () => dispatch => api.getFilters()
  .then(({ data }) => dispatch(getFiltersAction(data)))
  .catch(err => console.log('err', err))

export const setActiveFilter = filters => dispatch => dispatch(setActiveFilterAction(filters))
