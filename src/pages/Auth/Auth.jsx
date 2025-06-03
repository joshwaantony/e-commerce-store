import React from "react";
import {Outlet} from 'react-router'
const Auth = () => {
    return(
        <div className="">
            Auth Page
            <Outlet/>
        </div>
    )
}
export default Auth;