import React, { Component } from 'react'
import {getTranslationList} from './store/action'
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom'


class Translation extends Component  {

  getList() {
    const {list} = this.props
    return list.map(item => (<li key={item.id}>{item.title}</li>))
  }

  render() {


    return this.props.login ? (
      <div>
        <div>Translation</div>
        <ul>
          {this.getList()}
        </ul>
      </div>
    ) : <Redirect to='/' />
    
  }
  componentDidMount() {
    if(this.props.list.length <= 0) {
      this.props.getTranslationList()
    }
  }
}

Translation.loadData = (store) => {
  return store.dispatch(getTranslationList())
}

const mapState = (state) => ({
  list: state.translation.translationList,
  login: state.header.login
})

const mapDispatch = (dispatch) => ({
  getTranslationList() {
    dispatch(getTranslationList())
  }
})


export default connect(mapState, mapDispatch)(Translation)