'use client'
import React, {FC} from 'react';
import {useRouter, useSearchParams} from "next/navigation";

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
        <div>
            <button onClick={handlePrevious} disabled={currentPage <= 1}>Previous</button>
            <button onClick={handleNext} disabled={currentPage === endPage}>Next</button>
        </div>
    );
};

export default PaginationComponent;