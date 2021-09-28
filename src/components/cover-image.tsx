type Props = {
  title: string;
  src: string;
};

export const CoverImage: React.FC<Props> = ({ title, src }) => {
  return (
    <div className="sm:mx-0">
      <div className={"shadow-small"}>
        <img src={src} alt={`Cover Image for ${title}`} />
      </div>
    </div>
  );
};
