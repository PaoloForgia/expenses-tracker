export const createClassName = (...classNames: (string | undefined)[]) =>
  classNames.filter((classNames) => classNames).join(" ");
