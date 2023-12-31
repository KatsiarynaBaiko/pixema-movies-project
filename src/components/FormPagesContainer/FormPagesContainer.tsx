import React, { FC, ReactElement } from "react";
import classNames from "classnames";

import { Children, Theme } from "src/@types";
import { PixemaLogoIcon } from "src/assets/icons";
import { useThemeContext } from "src/context/Theme";

import styles from './FormPagesContainer.module.scss';
import Title from "../Title";
import Button, { ButtonTypes } from "../Button";
import Footer from "../Footer";



type FormPagesContainerProps = {
    title: string;
    children: Children;
    btnTitle: string;
    onSubmit: () => void;
    additionalInfo?: ReactElement;
    isSubmitDisabled?: boolean;
};

// children - наполняемость контейнера соответсвующими инпутами
const FormPagesContainer: FC<FormPagesContainerProps> = ({ title, children, btnTitle, onSubmit, additionalInfo, isSubmitDisabled, }) => {

    const { themeValue } = useThemeContext();

    return (
        <div className={styles.container}>
            <div className={styles.pixemaLogo}> <PixemaLogoIcon /> </div>
            <div className={styles.formContainerCenter}>
                <div className={classNames(styles.formContainer, { [styles.lightFormContainer]: themeValue === Theme.Light })}>
                    <Title title={title} />
                    <div className={styles.fieldsContainer}>{children}</div>
                    <Button
                        type={ButtonTypes.Primary}
                        title={btnTitle}
                        onClick={onSubmit}
                        className={styles.button}
                        disabled={isSubmitDisabled}
                    />
                    <div>{additionalInfo}</div>
                </div>
            </div>
            <div className={styles.footer}>
                <Footer footer={'© All rights reserved'} className={styles.footerSecondary} />
            </div>
        </div>
    )
}

export default FormPagesContainer;