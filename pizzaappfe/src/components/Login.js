import React from 'react';
import { useHistory } from "react-router-dom";

import BackVideo from '../video/BGbroll.mp4';

import Header from './Header';
import Footer from './Footer';

export default function LoginForm(props) {

    const history = useHistory();

    const createUser = (event) => {
        history.push('/register');
    }

    const FormHeader = (props) => (
        <h2 id="headerTitle">{props.title}</h2>
    );

    const Form = (props) => (
        <div>
            <FormInput placeholder="Username" type="text" />
            <FormInput placeholder="Password" type="password" />
            <FormButton title="Log in" />
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

    const CreateAccount = props => (
        <div id="alternativeLogin">
            <div id="button" class="row" >
                <button type="submit" onClick={createUser}>Create Account</button>
            </div>
        </div>
    );

    const VideoBg = props => (
        <video src={BackVideo} id="background-video" muted loop autoPlay>
            Your browser does not support the video tag.
        </video>
    );

    return (
        <>
            <div>
                <Header />
                {/* <VideoBg /> */}
                <div id="loginform">
                    <FormHeader title="Login" />
                    <Form />
                    <CreateAccount />
                </div>
                <Footer />
            </div>
        </>
    )
}

