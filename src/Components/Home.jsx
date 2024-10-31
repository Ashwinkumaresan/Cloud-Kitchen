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




    {/* About page */}
    <div className="main_about mt-5 row"   style={{padding:0,margin:0}}>
      <div className="about_image col-lg-5 col-xl-5 col-xxl-5" style={{padding:0}}>
        <img className="img-fluid" id="About"  src="About.svg" alt="" />
      </div>
      <div className="about_des col"  style={{padding:0}}>
        <h1 className="mt-xxl-5 mt-xl-5 mt-lg-5 ps-2" >About Us</h1>
        <div className="about_data_ px-xxl-4 px-xl-4 px-lg-4 px-md-3">
          <p style={
            {fontSize:18,padding:11}
          }>
            At Heavenly Vaults, we believe in more than just great food, we offer a delightful culinary experience tailored to your schedule. Our sessions are designed to provide you with personalized meal options at your convenience, ensuring fresh and timely delivery from our cloud kitchens.
            </p>
            <div className="about_list" style={{fontSize:18}}>
              <ul>
                <li> <span style={{fontWeight:600}}> Customized Meal Plans:</span> Select from a variety of meal plans based on your dietary preferences and schedule.</li>
                <li> <span style={{fontWeight:600}}>Flexible Timings:</span> Choose delivery windows that suit your routine, whether it’s for breakfast, lunch, dinner, or snacks.</li>
                <li> <span style={{fontWeight:600}}> Pre-Order Options:</span> Set up your orders in advance for special occasions or regular meals, and we’ll handle the rest.</li>
                <li> <span style={{fontWeight:600}}> Live Cooking Sessions:</span> Join our live-streamed cooking sessions to see how your food is being prepared, offering transparency and trust.</li>
                <li> <span style={{fontWeight:600}}> Interactive Experiences:</span> Connect with chefs, ask questions, and provide feedback during live sessions.</li>
                <button className="fs-5" onClick={()=> setOpenPopup(true)}>Order now</button>
              </ul>
            </div>
        </div>
      </div>
    </div>
    </>
  )
}
