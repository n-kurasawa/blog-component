// @ts-ignore
import styles from "./post-title.module.css";

export const PostTitle: React.FC = ({ children }) => {
  return <h1 className={styles["post-title"]}>{children}</h1>;
};
