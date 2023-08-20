import React, { FC } from "react";
import classNames from "classnames";
import { Theme } from "src/@types";

import { EmptyListIcon } from "src/assets/icons";
import { useThemeContext } from "src/context/Theme";

import styles from "./EmptyState.module.scss";



type EmptyStatePropsType = {
  title: string;
  description: string;
};


const EmptyState: FC<EmptyStatePropsType> = ({ title, description }) => {

    const { themeValue } = useThemeContext();

  return (
    <div className={styles.container}>
      <EmptyListIcon />
      <div className={styles.infoContainer}>
        <div className={classNames(styles.title, {[styles.lightTitle] : themeValue === Theme.Light})}>{title}</div>
        <div className={classNames(styles.description, {[styles.lightDescription] : themeValue === Theme.Light})}>{description}</div>
      </div>
    </div>
  );
};

export default EmptyState;