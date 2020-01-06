

import {CHANGE_LIST} from './constants'

const defaultSate = {
  translationList: []
}

export default (state = defaultSate, action) => {
  switch(action.type){
    case CHANGE_LIST:
      return {
        ...state,
        translationList: action.value
      } 
    default: 
      return state
  }
}