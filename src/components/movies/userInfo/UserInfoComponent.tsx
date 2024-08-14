import React from 'react';
import Image from "next/image";
import circleUserRegularFr from "@/img/circle-user-regular.svg"
import styles from "./userInfo.module.css"

const UserInfoComponent = () => {
    return (
        <div className={styles.userInfo}>
        <Image className={styles.userImg} src={circleUserRegularFr} alt={"user photo"} height={35} width={35}></Image>
            <h4>User account</h4>
        </div>
    );
};

export default UserInfoComponent;
