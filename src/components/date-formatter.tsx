import { parseISO, format } from "date-fns";

type Props = {
  dateString: string;
};

export const DateFormatter: React.FC<Props> = ({ dateString }) => {
  if (dateString == "") {
    return null;
  }
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, "yyyy-MM-dd")}</time>;
};
