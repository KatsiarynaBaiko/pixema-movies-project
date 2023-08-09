import React, { FC, ReactElement } from "react";

import { Children } from "src/@types";

import styles from './FormPagesContainer.module.scss';

import Title from "../Title";
import Button, { ButtonTypes } from "../Button";
import { PixemaLogoIcon } from "src/assets/icons";

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

    return (
        <div className={styles.container}>
            <div className={styles.pixemaLogo}> <PixemaLogoIcon /> </div>
            <div className={styles.formContainerCenter}>
                <div className={styles.formContainer}>
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

        </div>
    )
}

export default FormPagesContainer;