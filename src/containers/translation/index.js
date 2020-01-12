import React, { Component , Fragment} from 'react'
import {getTranslationList} from './store/action'
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom'
import {Helmet} from "react-helmet";
import styles from './style.css'
import withStyle from '../../withStyle'


class Translation extends Component  {

  getList() {
    const {list} = this.props
    return list.map(item => (<li key={item.id} className={styles.item}>{item.title}</li>))
  }

  render() {


    return this.props.login ? (
      <Fragment>
         <Helmet>
            <meta charSet="utf-8" />
            <title>AAA这是lsp的SSR翻译页面-丰富多彩的资讯</title>
            <meta name="description" content="这是lsp的SSR翻译页面-丰富多彩的资讯" />
        </Helmet>
        <div className={styles.container}>
          <div>Translation</div>
          <ul>
            {this.getList()}
          </ul>
        </div>
      </Fragment>
    ) : <Redirect to='/' />
    
  }
  componentDidMount() {
    if(this.props.list.length <= 0) {
      this.props.getTranslationList()
    }
  }
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

const ExportTranslation = connect(mapState, mapDispatch)(withStyle(Translation, styles))

ExportTranslation.loadData = (store) => {
  return store.dispatch(getTranslationList())
}



export default ExportTranslation