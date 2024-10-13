import { useState } from "react"
import "./../style/Kitchen_page.css"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
export const Kitchen_page = () => {
  const [openPopup, setOpenPopup] = useState(false);

  const [user, setUser] = useState({name:"Kitchen name", yourname:"your name", bio:"hi i am the react developer"});

  function submit(e){
    const name=e.target.name;
    const value=e.target.value;
    setUser({...user, [name]:value});
  }
  function close(){
    setOpenPopup(false);
  }

  return (
    <>
    <div className="kitchen_page_">
        <div className="image_kitchen">
          <div className="item_display">
            
            <h1> {user.name} </h1>
            <p> {user.yourname} </p>
            <h4 className="bio_kitchen"> {user.bio} </h4>
          </div>
            <button onClick={()=> setOpenPopup(true)}><svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 24 24"><path d="M5 19h1.425L16.2 9.225L14.775 7.8L5 17.575zm-2 2v-4.25L16.2 3.575q.3-.275.663-.425t.762-.15t.775.15t.65.45L20.425 5q.3.275.438.65T21 6.4q0 .4-.137.763t-.438.662L7.25 21zM19 6.4L17.6 5zm-3.525 2.125l-.7-.725L16.2 9.225z"/></svg></button>
        </div>
    </div>

    {/* Kitchen deatils changing popup */}

    
    {
    openPopup  && 
    <div className="popup_kitchen">
    <button className="X" onClick={()=> setOpenPopup(false)}><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"/></svg></button>
      <div className="popup_main_form">
        <form action="#">
          
          <label htmlFor="kitchen_name">Kitchen name</label>
          <input type="text" name='name' onChange={submit} id="kitchen_name" value={user.name}/>

          <label htmlFor="your-name">Your name</label>
          <input type="text" id="your_name" name="yourname" onChange={submit} value={user.yourname}/>

          <label htmlFor="bio">Bio</label>
          <input type="text" id="bio" name="bio" onChange={submit} value={user.bio}/>

          <button onClick={close} >Save</button>

        </form>
      </div>
    </div>
    }
    </>
  )
}
