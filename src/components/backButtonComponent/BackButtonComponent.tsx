import React from 'react';
import {useRouter} from 'next/navigation';
import Button from '@mui/material/Button';

const BackButtonComponent = () => {
    const router = useRouter();

    const handleBack = () => {
        router.back();
    };

    return (
        <Button  variant="contained" color="inherit" onClick={handleBack}>
            To back
        </Button>
    );
};

export default BackButtonComponent;
