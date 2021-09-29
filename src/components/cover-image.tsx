// @ts-ignore
import styles from "./cover-image.module.css";

type Props = {
  title: string;
  src: string;
};

export const CoverImage: React.FC<Props> = ({ title, src }) => {
  return (
    <div className={styles["cover-image"]}>
      <div className={styles["cover-image-shadow"]}>
        <img src={src} alt={`Cover Image for ${title}`} />
      </div>
    </div>
  );
};
