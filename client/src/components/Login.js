import React from 'react';


export default  (props) =>{
    return (
        <div>
            <form>
                <fieldset>
                    <h1>Login</h1>
                    <input type="text" placeholder="username"/>
                    <input type="password" placeholder="password"/>
                    <button onClick={props.handleLoginUser}>submit</button>
                </fieldset>
            </form>
        </div>
    )

    
}