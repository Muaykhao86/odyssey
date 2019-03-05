import React from 'react';
import {
  Link
 } from 'react-router-dom';


const Signin = ({requestSignIn}) => {

    return (
    <main className="login">
        <form className="login__form">
                <fieldset id="sign_up" className="fieldset">
                    <h2 className="fieldset__title">Sign In</h2>
                    <div className="components">
                        <label className="label" htmlFor="email-address">Email</label>
                        <input className="input-reset hover-bg-black hover-white box" type="email" name="email-address"  id="email-address"/>
                    </div>
                    <div className="components">
                        <label className="label" htmlFor="password">Password</label>
                        <input className=" input-reset hover-bg-black hover-white box" type="password" name="password"  id="password"/>
                    </div>

                </fieldset>
            {/* <div className="components">
                <input className="input-reset grow pointer btn" onClick={requestSignIn} type="submit" value="Sign in"/>
            </div> */}
            <div className="components">
                {/* <Link onClick={signout} className=" link dim" to="/">Signout</Link> */}

                <Link onClick={requestSignIn} className="link dim " to="/LandingPage">Sign In</Link>
            </div>
        </form>
    </main>

    );
}


export default Signin;