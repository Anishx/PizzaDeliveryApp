import React from 'react';
import BackVideo from '../video/BGbroll.mp4';
import { useHistory } from "react-router-dom";

import Header from './Header';
import Footer from './Footer';


export default function Register(props) {

    const history = useHistory();

    const FormHeader = (props) => (
        <h2 id="headerTitle">{props.title}</h2>
    );

    const SignIn = (event) => {
        history.push('/login');
    }

    const Form = (props) => (
        <div>
            <FormInput placeholder="Email" type="text" />
            <FormInput placeholder="Phone" type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required />
            <FormInput placeholder="Password" type="password" />
            <FormInput placeholder="Repeat Password" type="password" />
            <FormButton title="Register" />
        </div>
    );

    const CreateAccount = props => (
        <div id="alternativeLogin">
            <div id="button" class="row" >
                <button type="submit" onClick={SignIn}>Sign In</button>
            </div>
        </div>
    );

    const FormButton = props => (
        <div id="button" className="row">
            <button>{props.title}</button>
        </div>
    );

    const FormInput = props => (
        <div className="row">
            <label>{props.description}</label>
            <input type={props.type} placeholder={props.placeholder} />
        </div>
    );


    const VideoBg = props => (
        <video src={BackVideo} id="background-video" muted loop autoPlay>
            Your browser does not support the video tag.
        </video>
    );

    return (
        <div>
            <Header />
            {/* <VideoBg /> */}
            <div id="loginform">
                <FormHeader title="Register" />
                <Form />
                <CreateAccount />
            </div>
            <Footer />
        </div>
    )
}

