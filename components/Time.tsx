import { format } from "date-fns";

export type TimeProps = {
  dateTime: string;
  displayFormat: 'yyyy-MM-dd' | 'HH:mm:ss';
}

export default function Time({ dateTime, displayFormat }: TimeProps) {
  return (
    <time dateTime={dateTime} title={dateTime}>
      {format(new Date(dateTime), displayFormat)}
    </time>
  );
}
