import React from 'react';

import { useNavigate } from 'react-router-dom';
import './index.css'
const Header = props => {

  const navigate = useNavigate(); 
 const onClickBizlogin = ()=>{
  navigate('/bizlogin'); 
 }
 const onClicklogin = ()=>{
  navigate('/login'); 
 }

  return (
    <nav className="nav-header">
      <div className="nav-content">
        <div className="nav-bar-mobile-logo-container">
            <img
              className="website-logo"
              src="https://s3-alpha-sig.figma.com/img/a7c2/c95a/e57df5f03ddceb5a4011eb1efd953170?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=i7lvM1s0i74MfggIel4C7VrexlGfffkxShALGiS99Txtnir6kf9cE0wDtpfwUiHXVw0BRZQHQIfzxZw1EQ0H1ClfCtFjay3rQCAIS~nSYjLOjg2TBlpcxwCRke5MQCppl-mEDFaqK3aVya7rCuiCkN2hntF9bpWkY8IHJUAJHnAT3XawIK1KXfQdPSW8NrdCJX0OPs0WWHm1JoUY~g374aVLigYQeWKFPHWCLbp7LdkPNRoL~08fbV~qj1viBUfox9ktE9IfCzq6zwxjitIwcAaYxJhH7o77FBChfuYVChd6aYDxaStNv9~tWtzOPwKUir3zVend3~SPe9Jc-FP5VA__"
              alt="website logo"
            />
          <div className='btn-container'>
            <button
            type="button"
            className="biz-login-desktop-btn"
            onClick={onClickBizlogin}
          >
            Biz Login
          </button>
         
          <button
            type="button"
            className="login-desktop-btn"
            onClick={onClicklogin}
          >
            Login
          </button>
          
            </div>
        </div>
        <div className="nav-bar-large-container">
            <img
              className="website-logo"
              src="https://s3-alpha-sig.figma.com/img/a7c2/c95a/e57df5f03ddceb5a4011eb1efd953170?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=i7lvM1s0i74MfggIel4C7VrexlGfffkxShALGiS99Txtnir6kf9cE0wDtpfwUiHXVw0BRZQHQIfzxZw1EQ0H1ClfCtFjay3rQCAIS~nSYjLOjg2TBlpcxwCRke5MQCppl-mEDFaqK3aVya7rCuiCkN2hntF9bpWkY8IHJUAJHnAT3XawIK1KXfQdPSW8NrdCJX0OPs0WWHm1JoUY~g374aVLigYQeWKFPHWCLbp7LdkPNRoL~08fbV~qj1viBUfox9ktE9IfCzq6zwxjitIwcAaYxJhH7o77FBChfuYVChd6aYDxaStNv9~tWtzOPwKUir3zVend3~SPe9Jc-FP5VA__"
              alt="website logo"
            />
            <div className='btn-container'>
            <button
            type="button"
            className="biz-login-desktop-btn"
            onClick={onClickBizlogin}
          >
            Biz Login
          </button>
          <button
            type="button"
            className="login-desktop-btn"
            onClick={onClicklogin}
          >
            Login
          </button>
            </div>
        </div>
      </div>
    </nav>
  )
}

export default Header