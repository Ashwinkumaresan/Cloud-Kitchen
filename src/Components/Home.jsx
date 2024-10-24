import { useState } from "react"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'

export const Home = () => {
const[openPopup, setOpenPopup]=useState(false)

// To stop scrolling while popup open index-168
if(openPopup)
{
  document.body.classList.add('active_modal');
}
else
{
  document.body.classList.remove('active_modal');
}

  return (
    <>
    <div className="Home-page">
        <div className="image">
            <h1>Gourmet, from the clouds to your plate</h1>
            <button onClick={()=> setOpenPopup(true)}>Order now</button>
        </div>
    </div>
    

    {
      openPopup &&
    <div className="popup_login">
      <button className="X" onClick={()=> setOpenPopup(false)}><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"/></svg></button>
      <div className="popup_login_container container">
        <div className="row">
          <div className="col"style={{padding:0}}>
            <div className="home_kitchen">
              <p className="business">BUSINESS</p>
              <h1>For <span>Kitchen</span></h1>
              <p className="popup_para">Efficient platform for cloud kitchens to manage orders and connect with customers easily.</p>
              <button><a href="/kitchen-login">Login</a> </button>
              <p>Don't  have account? <span><a href="/kitchen-sign-in" className="sign_up_para">Sign up</a></span></p>
            </div>
          </div>
          <div className="col" style={{padding:0}}>
            <div className="home_customer">
              <h1>For <span>Customer</span></h1>
              <p className="popup_para">Efficient platform for cloud kitchens to manage orders and connect with customers easily.</p>
              <button>Login</button>
              <p>Don't  have account? <span><a href="#" className="sign_up_para">Sign up</a></span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    }

    </>
  )
}
