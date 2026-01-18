"use client";

import { cx } from "@/utils/cx";
import Button from "../Button";

const IconButton = ({
  children,
  href,
  classNames,
}: {
  children: React.ReactNode;
  href?: string;
  classNames?: string;
}) => {
  const className = cx(
    "relative w-[55px] h-[55px] flex items-center justify-center flex-nowrap border border-zeplin-gray rounded-full shrink-0",
    classNames
  );

  return (
    <Button classNames={className} href={href}>
      {children}
    </Button>
  );
};

export default IconButton;
