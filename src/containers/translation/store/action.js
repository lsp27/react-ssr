

import {CHANGE_LIST} from './constants'

const changeList = (value) => ({
  type: CHANGE_LIST,
  value
})

export const getTranslationList = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance('/api/translations.json').then(res => {
      if(res.data.success) {
        dispatch(changeList(res.data.data))
      }else{
        dispatch(changeList([]))
      }
    })
  }
}

