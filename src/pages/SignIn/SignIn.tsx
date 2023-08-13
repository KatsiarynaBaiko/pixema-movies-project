import React, { useState } from "react";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";

import FormPagesContainer from "src/components/FormPagesContainer";
import Input from "src/components/Input";

import styles from './SignIn.module.scss'
import { RoutesList } from "../Router";


const SignIn = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate();
    const onClickToSignUp = () => {
        navigate(RoutesList.SignUp);
    };

    return (
        <FormPagesContainer
            title={'Sign In'}
            btnTitle={'Sign In'}
            onSubmit={() => { }}
            additionalInfo={
                <div className={styles.additionalInfo} onClick={onClickToSignUp}>
                    {'Don’t have an account? ' }
                    
                    <span className={styles.signUp}>Sign Up</span>
                </div>
            }
        >
            <Input title={'Email'} placeholder={'Your email'} onChange={setEmail} value={email} />
            <Input title={'Password'} placeholder={'Your password'} onChange={setPassword} value={password} />

            <div className={styles.forgotPassword}>{'Forgot password?'}</div>

        </FormPagesContainer>
    )
}

export default SignIn
