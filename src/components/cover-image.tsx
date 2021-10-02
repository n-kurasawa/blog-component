// @ts-ignore
import styles from "./cover-image.module.css";

type Props = {
  title: string;
  src: string;
};

export const CoverImage: React.FC<Props> = ({ title, src }) => {
  if (src == "") {
    return null;
  }
  return (
    <div className={styles["cover-image"]}>
      <img
        className={styles["cover-image-shadow"]}
        src={src}
        alt={`Cover Image for ${title}`}
      />
    </div>
  );
};
