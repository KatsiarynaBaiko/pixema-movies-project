import classNames from "classnames";
import React, { FC } from "react";
import styles from './Footer.module.scss';

type FooterProps = {
   footer: string;
   className?: string;
};

const Footer: FC<FooterProps> = ({ footer, className }) => {

   return (
      <div className={classNames(styles.footer, className)}>{footer}</div>
   )

}

export default Footer;