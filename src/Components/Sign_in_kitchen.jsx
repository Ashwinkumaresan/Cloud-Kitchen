import "./../style/Kitchen_sign_in.css"
export const Sign_in_kitchen = () => {
  return (
    <>
    <div className="kitchen_sign_in">
        <h1>Register your <span>kitchen</span></h1>
        <div className="form">
            <form >
                <input type="text" title="Kitchen name" placeholder="Kitchen name" required />
                <input type="text" title="Your name" placeholder="Your name" required/>
                <textarea name="Kitchen_Address" title="Kitchen address" id="Kitchen_Address" placeholder="Kitchen address" required></textarea>
                <input type="text" title="City" placeholder="City" required/>
                <input type="text" title="State" placeholder="State" required/>
                <input type="number" title="Pincode" placeholder="Pincode"  required/>
                <label htmlFor="Upload" className="custom-file-upload">Choose your kitchen image</label>
                <input type="file" id="Upload" required/>
                <center>
                    <a href="/kitchen-page"><button>Sign in</button></a>
                
                </center>
            </form>
        </div>
    </div>
    </>
    )
}
