'use client'
import React, { FC, ReactNode } from 'react';
import { useRouter } from 'next/router';

const BackButtonComponent = () => {
    const router = useRouter();

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        router.back();
    }

    return (
        <button onClick={handleClick} style={{ marginRight: 10, color: 'black', background: 'none', border: 'none', cursor: 'pointer' }}>
            Back
        </button>
    );
};

export default BackButtonComponent;
