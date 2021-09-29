// @ts-ignore
import styles from "./post-body.module.css";

type Props = {
  content: string;
};

export const PostBody: React.FC<Props> = ({ content }) => {
  return (
    <div className={styles["post-body"]}>
      <div
        className={styles["markdown"]}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};
