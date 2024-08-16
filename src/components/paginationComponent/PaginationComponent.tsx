'use client'
import React, {FC} from 'react';
import {useRouter, useSearchParams} from "next/navigation";
import styles from "./paginationStyles.module.css"

interface IProps {
    currentPage: number,
    endPage: number
}

const PaginationComponent: FC<IProps> = ({currentPage, endPage}) => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const page = Number(searchParams.get('page') || "1");

    const handleNext = () => {
        const nextPage = page + 1;
        router.push(`?page=${nextPage}`);
    };

    const handlePrevious = () => {
        const prevPage = page > 1 ? page - 1 : 1;
        router.push(`?page=${prevPage}`);
    };
    return (
        <div className={styles.btnList}>
            <button
                className={styles.customButton}
                onClick={handlePrevious}
                disabled={currentPage <= 1}>
                Previous
            </button>
            <button
                className={styles.customButton}
                onClick={handleNext}
                disabled={currentPage === endPage}> {/* todo block btn with styles  */}
                Next
            </button>
        </div>
    );
}

export default PaginationComponent;