"use client";

import { FC } from "react";

import { IPaginationButtonProps } from "./interface";
import { cx } from "@/utils/cx";

const PaginationButton: FC<IPaginationButtonProps> = ({
  onClick,
  children,
  isDisabled,
}) => {
  const className = cx(
    "text-[#666e8b] text-sm leading-3.5 rounded-[15px] w-10 h-10 flex items-center justify-center",
    isDisabled ? "bg-[#e7eaf5]" : "bg-[#dee6ff]"
  );
  return (
    <button className={className} onClick={onClick} disabled={isDisabled}>
      {children}
    </button>
  );
};

export default PaginationButton;
