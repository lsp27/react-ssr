import React, {Fragment, Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {login, logout} from './store/action'
import styles from './style.css'
import withStyle from '../../withStyle'

class Header extends Component {

  render() {
    const {login, handleLogin, handleLogout} = this.props
    return (
      <div className={styles.container}>
        <Link to='/' className={styles.item}>首页</Link>
        {
          login ? <Fragment>
            <Link to='/translation' className={styles.item}>翻页列表</Link>
            <div onClick={handleLogout} className={styles.item}>退出</div>
          </Fragment> :  <div onClick={handleLogin.bind(this)} className={styles.item}>登陆</div>
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

export default connect(mapState, manDispatch)(withStyle(Header, styles))