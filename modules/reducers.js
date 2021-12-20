import { SESSION_GET_COCKTAILS, SESSION_GET_FILTERS, SESSION_SET_ACTIVE_FILTERS } from './constants'

export const sessionInitialState = {
  cocktails: [],
  filters: [],
  activeFilters: [],
}

export const sessionReducer = (state = sessionInitialState, action) => {
  const { type, payload } = action

  switch (type) {
    case SESSION_GET_COCKTAILS:
      const newCategory = { title: payload.name, data: payload.drinks }

      if (payload.first) {
        return { ...state, cocktails: [newCategory] }
      }

      let newCocktails = [ ...state.cocktails ]

      if (!state.cocktails.find(i => i.title === newCategory.title)) {
        newCocktails = [ ...state.cocktails, newCategory ]
      }

      if (state.activeFilters.length) {
        newCocktails = newCocktails.filter(i => state.activeFilters.includes(i.title))
      }

      return { ...state, cocktails: newCocktails }
    case SESSION_GET_FILTERS:
      return { ...state, filters: payload.drinks.map(i => i.strCategory) }
    case SESSION_SET_ACTIVE_FILTERS:
      return { ...state, activeFilters: payload }
    default:
      return { ...state }
  }
}

