import React, { FC } from "react";
import styles from './Footer.module.scss';

type FooterProps = {
   footer: string;
};

const Footer: FC<FooterProps> = ({ footer }) => {

   return (
      <div className={styles.footer}>{footer}</div>
   )

}

export default Footer;