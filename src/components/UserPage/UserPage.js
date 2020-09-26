import React from "react";

function UserPage(props)
{
    return(
        <div className ="Construction">
        {"Wow you reached @ "+ props.response}
        </div>
    );
}

export default UserPage;