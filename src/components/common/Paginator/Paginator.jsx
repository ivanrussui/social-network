import styles from './Paginator.module.css';

const Paginator = ({currentPage, onPageChanged, totalCount, pageSize}) => {
    let pagesCount = Math.ceil(totalCount / pageSize);

    let pages = [];
    // for (let i = 4120; i <= pagesCount; i++) {
    //   if (pages.length < 4200) { // условие чтобы 1000+ страниц не было
    //     pages.sort((a, b) => a - b).push(i);
    //   }
    // }

    for (let i = 1; i <= pagesCount; i++) {
        if (pages.length < 40) { // условие чтобы 1000+ страниц не было
            // pages.push(i);
            pages.sort((a, b) => a - b).push(i);
        }
    }

    return (
        <div>
            {pages.map(p => {
                return <span key={p} className={currentPage === p ? styles.selectedPage : null}
                             onClick={() => {onPageChanged(p)}}>
                    {p}</span>
            })}
        </div>
    )
};

export default Paginator;