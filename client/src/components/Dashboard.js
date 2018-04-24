import React from 'react';

export default (props) =>{
    return (
        <div>
            <fieldset>
                <h1>Dashboard </h1>
                <input placeholder="api_key" id="api_key"/>
                <button onClick={props.handleGetLogs}>Show logs</button>
                {props.logs.map((log) =>{
                    return (
                        <p key={log._id}>{log.title +': '  + log.text}</p>
                    )
                })}
            </fieldset>
        </div>
    );
}