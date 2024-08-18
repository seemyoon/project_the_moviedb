'use client'
import React, {FC} from 'react';
import {useRouter, useSearchParams} from "next/navigation";
import styles from "./paginationStyles.module.css";
import {useAppSelector} from "@/app/GlobalRedux/store";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

interface IProps {
    endPage: number;
}

const PaginationComponent: FC<IProps> = ({endPage}) => {
    const {isDarkTheme} = useAppSelector(state => state.themeToggleSliceState);
    const searchParams = useSearchParams();
    const router = useRouter();
    const page = Number(searchParams.get('page') || "1");

    const query = searchParams.get('query');

    const [pageState, setPageState] = React.useState(page);

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPageState(value);
        if (query) {
            router.push(`/movies/search?query=${query}&page=${value}`);
        } else {
            router.push(`?page=${value}`);
        }
    };

    return (
        <div className={styles.btnList}>
            <Stack spacing={2}>
                <div className={isDarkTheme ? styles.customPaginationContainerDark : styles.customPaginationContainer}>
                    <Pagination
                        count={endPage}
                        page={pageState}
                        onChange={handleChange}
                    />
                </div>
            </Stack>
        </div>
    );
};

export default PaginationComponent;
