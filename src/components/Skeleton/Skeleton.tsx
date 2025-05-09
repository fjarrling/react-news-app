import styles from './Skeleton.module.scss'

const Skeleton = ({count}) => {
  return (
    <ul className={styles.skeletonList}>
      {Array(count)
        .fill(null)
        .map((_, index) => (
          <li key={index} className={styles.skeletonItem}></li>
        ))}
    </ul>
  )
}

export default Skeleton
