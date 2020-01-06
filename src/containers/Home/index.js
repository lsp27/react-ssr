import React, { Component } from 'react'
import { connect } from 'react-redux'
import {getHomeList} from './store/actions.js'


class Home extends Component {

  getList() {
    const { list } = this.props
    return list.map(item => <div key={item.id}>{item.title}</div>)
  }

  render() {
    return (
      <div>
        {
          this.getList()
        }
        <button onClick={() => {alert('click')}}>click</button>
      </div>
    )
  }

  componentDidMount() {
    if(!(this.props.list && this.props.list.length)) {
      this.props.getHomeList()
    }
  }
}


Home.loadData = (store) => {
  return store.dispatch(getHomeList())
}



const mapStateToProps = state => ({
  list: state.home.newsList
})

const mapDispatchToProps = dispatch => ({
  getHomeList() {
    dispatch(getHomeList())
  }
})


export default connect(mapStateToProps, mapDispatchToProps)(Home)