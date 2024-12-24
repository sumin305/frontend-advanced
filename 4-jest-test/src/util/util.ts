export const toUpperCase = (str: string) => {
  if (str === "") {
    throw new Error("빈 문자열을 넣을 수 없습니다.");
  }
  return str.toUpperCase();
};
