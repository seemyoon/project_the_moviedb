import React from 'react';
import Image from "next/image";
import profile from "@/img/profile.png"
import styles from "./userInfo.module.css"

const UserInfoComponent = () => {
    return (
        <div className={styles.userInfo}>
        <Image className={styles.userImg} src={profile} alt={"user photo"} height={35} width={35}></Image>
            <h4>User account</h4>
        </div>
    );
};

export default UserInfoComponent;
