import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PixemaLogoIcon } from "src/assets/icons";

import FormPagesContainer from "src/components/FormPagesContainer";
import Input from "src/components/Input";

import { RoutesList } from "../Router";
import styles from './SignUp.module.scss'



// отслеживаем состояние инпутов => useState
const SignUp = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    
    const navigate = useNavigate();
    const onClickToSignIn = () => {
        navigate(RoutesList.SignIn);
    };


    return (

        
        <FormPagesContainer
            title={'Sign Up'}
            btnTitle={'Sign Up'}
            onSubmit={() => { }}
            additionalInfo={
                <div className={styles.additionalInfo} onClick={onClickToSignIn}>
                    {'Already have an account?'}
                    <span className={styles.signIn}>Sign In</span>
                </div>
            }
        >
            <Input title={'Name'} placeholder={'Your name'} onChange={setName} value={name} />
            <Input title={'Email'} placeholder={'Your email'} onChange={setEmail} value={email} />
            <Input title={'Password'} placeholder={'Your password'} onChange={setPassword} value={password} />
            <Input title={'Confirm Password'} placeholder={'Confirm password'} onChange={setConfirmPassword} value={confirmPassword} />

        </FormPagesContainer>

    )
};

export default SignUp 