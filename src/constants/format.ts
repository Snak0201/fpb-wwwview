/**
 * GQLから取得したタイムゾーン付きの日時文字列を変換する
 *
 * 2024-06-16T13:36:09+09:00 => 2024年06月16日 13時36分
 *  */
export const formatDatetimezone = (datetimezoneString: string) => {
  const dateString = datetimezoneString.split("T")[0]
  const [yearString, monthString, dayString] = dateString.split("-")
  const [hourString, minuteString] = datetimezoneString
    .split("T")[1]
    .split("+")[0]
    .split(":")
  return `${yearString}年${monthString}月${dayString}日 ${hourString}時${minuteString}分`
}
