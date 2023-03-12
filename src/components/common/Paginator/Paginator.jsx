import styles from './Paginator.module.css';
import { useEffect, useState } from 'react';
import cn from 'classnames';

const Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const portionCount = Math.ceil(pagesCount / portionSize);
    const [portionNumber, setPortionNumber] = useState(1);
    // const [portionNumber , setPortionNumber ] = useState(Math.floor(currentPage/10) + 1)
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    const rightPortionPageNumber = portionNumber * portionSize;

    useEffect(() => {
        setPortionNumber(Math.ceil(currentPage / portionSize));
    }, [currentPage, portionSize]);

    return (
        <div className={styles.paginator}>
            {portionNumber > 1 &&
                <button onClick={() => {setPortionNumber(portionNumber - 1)}}>PREV</button>}
            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => {
                    return (
                        <span className={cn({[styles.selectedPage]: currentPage === p}, styles.pageNumber)}
                              key={p}
                            // className={currentPage === p ? styles.selectedPage : null}
                              onClick={() => {onPageChanged(p)}}>{p}</span>
                    )
                })}
            {portionCount > portionNumber &&
                <button onClick={() => {setPortionNumber(portionNumber + 1)}}>NEXT</button>}
        </div>
    )
};

export default Paginator;