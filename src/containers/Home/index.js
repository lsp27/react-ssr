import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import {Helmet} from "react-helmet";
import {getHomeList} from './store/actions.js'
import styles from  './style.css'
import withStyle from '../../withStyle'



class Home extends Component {

  getList() {
    const { list } = this.props
    return list.map(item => <div key={item.id} className={styles.item}>{item.title}</div>)
  }

  render() {
    return (
      <Fragment>
        <Helmet>
            <meta charSet="utf-8" />
            <title>这是lsp的SSR新闻页面-丰富多彩的资讯</title>
            <meta name="description" content="这是lsp的SSR新闻页面-丰富多彩的资讯" />
        </Helmet>
        <div className={styles.container}>
          {
            this.getList()
          }
        </div>
      </Fragment>
    )
  }

  componentDidMount() {
    if(!(this.props.list && this.props.list.length)) {
      this.props.getHomeList()
    }
  }
}


const mapStateToProps = state => ({
  list: state.home.newsList
})

const mapDispatchToProps = dispatch => ({
  getHomeList() {
    dispatch(getHomeList())
  }
})


const ExportHome = connect(mapStateToProps, mapDispatchToProps)(withStyle(Home, styles))

ExportHome.loadData = (store) => {
  return store.dispatch(getHomeList())
}

export default ExportHome