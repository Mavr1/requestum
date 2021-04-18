import styles from '../components/ResultsList/ResultsList.module.scss';

export const paginationProps = {
  defaultCurrent: 1,
  defaultPageSize: 5,
  showPrevNextJumpers: true,
  prevIcon: () => <span className={styles.paginationControl}>{' << '}</span>,
  nextIcon: () => <span className={styles.paginationControl}>{' >> '}</span>,
  jumpPrevIcon: () => <span className={styles.paginationControl}>{' < '}</span>,
  jumpNextIcon: () => <span className={styles.paginationControl}>{' > '}</span>,
  className: styles.pagination,
  hideOnSinglePage: true,
};
