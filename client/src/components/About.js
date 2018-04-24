import React from 'react';

export default () => {
    return (
        <div>
            
                <h1>About</h1>
                <p>Welcome to esh.io a simple logging SaaS.</p>
                <p>In order to use esh.io simply insert this code inside your head tag:</p>
                <fieldset>               
                    <div>&lt;script> src="https://unpkg.com/axios/dist/axios.min.js"		&lt;/script></div>
                    <div  style={{"textIndent": "1em"}}>&lt;script></div>
                        <div  style={{"textIndent": "2em"}}>const esh_io = &#123;</div>
				            <div  style={{"textIndent": "3em"}}>sendLog : (api_key, title, text) => &#123;</div>
				            <div  style={{"textIndent": "4em"}}>let logData = &#123;</div>
                            <div  style={{"textIndent": "4em"}}>api_key,</div>
						    <div  style={{"textIndent": "4em"}}>title,</div>
						    <div  style={{"textIndent": "4em"}}>text</div>                       
                            <div  style={{"textIndent": "3em"}}>&#125;</div>
                        <div  style={{"textIndent": "2em"}}>axios.post('http://ec2-18-184-124-31.eu-central-1.compute.amazonaws.com/insert_logs', logData).then((res) => &#123;console.log(res)&#125;).catch((err) => &#123;console.log(err)&#125;)</div>
                    <div  style={{"textIndent": "1em"}}>&#125;</div>
                    &#125;<br/>
                &lt;/script>                                         
                </fieldset>
                <p>You can then use the sendLog function inside your code like this:</p>
                <fieldset>
                    esh_io.sendLog('my api key','my log title','this is my log text');
                </fieldset>
                <p>And your logs will be availble at the dashboard section of esh.io website</p>
        </div>
    )
}