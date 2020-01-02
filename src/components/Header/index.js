import React, {Fragment, Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {login, logout} from './store/action'

class Header extends Component {
  render() {
    const {login, handleLogin, handleLogout} = this.props
    return (
      <div>
        <Link to='/'>首页</Link>
        <br />
        {
          login ? <Fragment>
            <Link to='/login'>翻译列表</Link>
            <br />
            <div onClick={handleLogout}>退出</div>
          </Fragment> :  <div onClick={handleLogin.bind(this)}>登陆</div>
        }
        <br />
       
      </div>
    )
  }
}


const mapState = state => ({
  login: state.header.login
})

const manDispatch = dispatch => ({
  handleLogin() {
    dispatch(login())
  },
  handleLogout() {
    dispatch(logout())
  }
})

export default connect(mapState, manDispatch)(Header)