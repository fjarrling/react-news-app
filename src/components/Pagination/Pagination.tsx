import {getPagesArray} from "@/utils/utils.ts";
import styles from './Pagination.module.scss'

type PaginationProps = {
  totalPages: number,
  currentPage: number,
  changePage: (page: number) => void,
}

const Pagination = ({totalPages, changePage, currentPage}: PaginationProps) => {
  const pagesArray = getPagesArray(totalPages)

  return (
    <div className={styles.pagination}>
      <ul className={styles.paginationList}>
        {
          pagesArray.map((page, index) => {
            return (
              <li key={index} className={styles.paginationItem}>
                <button
                  className={`${styles.paginationButton} ${currentPage === page ? styles.paginationButtonActive : ''}`}
                  key={index}
                  onClick={() => changePage(page)}
                >
                  {page}
                </button>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
};

export default Pagination;