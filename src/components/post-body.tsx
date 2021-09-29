// @ts-ignore
import styles from "./post-body.module.css";
import { useEffect, useState } from "react";
import { markdownToHtml } from "../lib/markdownToHtml";

type Props = {
  content: string;
};

export const PostBody: React.FC<Props> = ({ content }) => {
  const [html, setHtml] = useState("");

  useEffect(() => {
    const mToH = async () => {
      const result = await markdownToHtml(content);
      setHtml(result);
    };
    mToH();
  }, [content]);
  return (
    <div className={styles["post-body"]}>
      <div
        className={styles["markdown"]}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
};
