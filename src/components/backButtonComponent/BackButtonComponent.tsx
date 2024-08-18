import React from 'react';
import { useRouter } from 'next/navigation'; // todo take a note
import Button from '@mui/material/Button';
import styles from "@/app/(clients)/(movies)/movies/[id]/page.module.css";

const BackButtonComponent = () => {
    const router = useRouter();

    const handleBack = () => {
        router.back();
    };

    return (
        <Button className={styles.backButton}  variant="contained" color="inherit" onClick={handleBack}>
            To back
        </Button>
    );
};

export default BackButtonComponent;
