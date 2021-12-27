import React from 'react';
import classes from './profile.module.css';
import Post from './posts.jsx';

const Prof = (props) => {


    let posts = props.postData.map(el => <Post text={el.text}/>);


    return (
        <div className={classes.content}>
            <div>
                <img
                    src='https://media-exp1.licdn.com/dms/image/C4D1BAQGDmALg_8s-Yg/company-background_10000/0/1519799119530?e=2159024400&v=beta&t=4WV9YKR9L3PAEnppWmPPMk5xVnETtWvhZN8NexEzPwM'>
                </img>
            </div>
            <div>
                <textarea>fg</textarea>
                <div>
                    <button>add post</button>
                </div>
                <div>аватар+описание</div>
                <div>{posts} </div>
            </div>
        </div>

    );
}


export default Prof;