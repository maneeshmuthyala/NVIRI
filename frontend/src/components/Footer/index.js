import React from 'react';

import './index.css'
const Footer = ()=>{
    return(
  <div className="footer">
 <div className="footer2">
  <div className="footer-cont">
    <div>
        <p className="foot-desc">GET touch with us</p>
        <div className="inp-cont">
        <input type="text" placeholder="Email Address"/>
        <div className="btn-cont">
        <img src="https://res.cloudinary.com/dvmcsww2y/image/upload/v1733760946/arrows-down-top-move-1_cg04wp.png" className="arrow" alt="arrow" />
        </div>
         </div>
    </div>
    <p className="foot-desc">Hello, we are Lift Media. Our goal is to translate the positive effects from 
        revolutionizing how companies engage with their clients & their team.</p>
  </div>
  <button className="footer-btn">Book a Service</button>
  <div className="last-cont">
    <p className="foot-desc">Terms</p>
    <p className="foot-desc">Privacy</p>
    <p className="foot-desc">Cookies</p>
    <p className="foot-desc">Business Login</p>
  </div>

  </div>
  <hr className="line"/>    
  <div className="foot">
<img src="https://s3-alpha-sig.figma.com/img/a7c2/c95a/e57df5f03ddceb5a4011eb1efd953170?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=i7lvM1s0i74MfggIel4C7VrexlGfffkxShALGiS99Txtnir6kf9cE0wDtpfwUiHXVw0BRZQHQIfzxZw1EQ0H1ClfCtFjay3rQCAIS~nSYjLOjg2TBlpcxwCRke5MQCppl-mEDFaqK3aVya7rCuiCkN2hntF9bpWkY8IHJUAJHnAT3XawIK1KXfQdPSW8NrdCJX0OPs0WWHm1JoUY~g374aVLigYQeWKFPHWCLbp7LdkPNRoL~08fbV~qj1viBUfox9ktE9IfCzq6zwxjitIwcAaYxJhH7o77FBChfuYVChd6aYDxaStNv9~tWtzOPwKUir3zVend3~SPe9Jc-FP5VA__" alt="logo" className="logo"/>
<div className="cont">
    <img src="https://res.cloudinary.com/dvmcsww2y/image/upload/v1733752848/Linkedin_fbbjqz.png" alt="logo"/>
    <img src="https://res.cloudinary.com/dvmcsww2y/image/upload/v1733752848/Facebook_hsr3bd.png" alt="logo"/>
    <img src="https://res.cloudinary.com/dvmcsww2y/image/upload/v1733752848/Twitter_e27xcv.png" alt="logo"/>
</div>
  </div>
        </div>
 
    )
}
export default Footer