import { DateFormatter } from "./date-formatter";
import { CoverImage } from "./cover-image";
import { PostTitle } from "./post-title";
// @ts-ignore
import styles from "./post-header.module.css";

type Props = {
  title: string;
  coverImage: string;
  date: string;
};

export const PostHeader: React.FC<Props> = ({ title, coverImage, date }) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className={styles["post-header-cover-image"]}>
        <CoverImage title={title} src={coverImage} />
      </div>
      <div className={styles["post-header-date"]}>
        <DateFormatter dateString={date} />
      </div>
    </>
  );
};
