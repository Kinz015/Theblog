import { formatDatetime, formatDistanceToNow } from "@/utils/format-datetime";

type PostDateProps = {
  dataTime: string;
};

export function PostDate({ dataTime }: PostDateProps) {
  return (
    <time
      className="text-slate-600 text-sm/tight"
      dateTime={formatDatetime(dataTime)}
      title={formatDistanceToNow(dataTime)}
    >
      {formatDatetime(dataTime)}
    </time>
  );
}
