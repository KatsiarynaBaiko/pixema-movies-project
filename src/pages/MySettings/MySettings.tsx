import React, { useState } from "react";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";

import ThemeSwitcher from "src/components/ThemeSwitcher";
import { useThemeContext } from "src/context/Theme";
import { Theme } from "src/@types";
import Title from "src/components/Title";
import Input from "src/components/Input";
import Button, { ButtonTypes } from "src/components/Button";

import styles from './MySettings.module.scss';
import { RoutesList } from "../Router";



const MySettings = () => {

    const { themeValue } = useThemeContext();

    const navigate = useNavigate();
    const onClickCancel = () => {
        navigate(RoutesList.Home);
    };

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')


    return (
        <div className={styles.container}>

            <Title className={classNames(styles.title)} title={"Profile"} />
            <div className={classNames(styles.profileContainerInput, {[styles.lightProfileContainerInput] : themeValue === Theme.Light})}>
                <Input title={'Name'} placeholder={'Your name'} onChange={setName} value={name} />
                <Input title={'Email'} placeholder={'Your email'} onChange={setEmail} value={email} />
            </div>


            <div className={styles.passwordContainer}>
                <Title className={styles.title} title={"Password"} />
                <div className={classNames(styles.passwordContainerInput, {[styles.lightPasswordContainerInput] : themeValue === Theme.Light})}>
                    <div className={styles.passwordContainerInputLeft}>
                        <Input title={'Password'} placeholder={'Your password'} onChange={setPassword} value={password} />
                    </div>
                    <div className={styles.passwordContainerInputRight}>
                        <Input title={'New Password'} placeholder={'New password'} onChange={setNewPassword} value={newPassword} />
                        <Input title={'Confirm Password'} placeholder={'Confirm password'} onChange={setConfirmPassword} value={confirmPassword} />
                    </div>
                </div>
            </div>

            <Title className={styles.title} title={"Color mode"} />
            <div className={styles.colorModeContainer}>
                <ThemeSwitcher titleSun={"Use light thema"} titleMoon={"Use dark thema"} />
            </div>

            <div className={styles.buttonContainer}>
                  <Button
                  title={'Cancel'}
                  type={ButtonTypes.Secondary}
                  onClick={onClickCancel}
                  />

                  <Button
                  className={styles.button}
                  title={"Save"}
                  type={ButtonTypes.Primary}
                  onClick={()=>{}}
                  />
                  
               </div>
         </div>
    )
}




export default MySettings