import { parseISO, format } from "date-fns";

export default function Date(props) {
  const { value, ...rest } = props;
  const date = parseISO(value);
  return (
    <time dateTime={value} {...rest}>
      {format(date, "LLLL d, yyyy")}
    </time>
  );
}
