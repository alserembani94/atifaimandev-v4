export const cx = (
  classNameList: React.HTMLAttributes<HTMLElement>["className"][]
) => {
  return classNameList.filter(Boolean).join(" ");
};
