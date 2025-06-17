import styles from './Skeleton.module.scss'

interface SkeletonProps {
  count: number,
  variant: 'default' | 'hot'
}

const Skeleton = ({count, variant}: SkeletonProps) => {
  return (
    <ul className={variant === "default" ? styles.skeletonList : styles.skeletonListHot}>
      {Array(count)
        .fill(null)
        .map((_, index) => (
          <li key={index} className={variant === "default" ? styles.skeletonItem : styles.skeletonItemHot}></li>
        ))}
    </ul>
  )
}

export default Skeleton
