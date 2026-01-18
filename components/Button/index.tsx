import { cx } from "@/utils/cx";

const Button = ({
  children,
  classNames,
  href,
  leftIcon,
  rightIcon,
}: {
  children: React.ReactNode;
  classNames?: string;
  href?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}) => {
  const baseClasses =
    "inline-flex items-center justify-between gap-2 border border-transparent rounded-[50px] px-[15px] py-[16.5px] text-[17px] leading-[21px]";
  const Component = href ? "a" : "button";

  return (
    <Component href={href} className={cx(baseClasses, classNames)}>
      {leftIcon}
      {children}
      {rightIcon}
    </Component>
  );
};

export default Button;
