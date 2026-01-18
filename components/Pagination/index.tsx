"use client";

import { FC } from "react";

import IconArrowLeft from "../Icons/ArrowLeft";
import IconArrowRight from "../Icons/ArrowRight";
import Button from "./button";

import { IPaginationProps } from "./interface";

const Pagination: FC<IPaginationProps> = ({
  innerPage = 0,
  pageChange = () => {},
}) => {
  const pageRange =
    innerPage > 3
      ? [
          { page: 1, link: "1" },
          { page: 2, link: "2" },
          { page: 3, link: "3" },
          { page: "..." },
          { page: innerPage, link: innerPage.toString() },
        ]
      : Array.from({ length: innerPage }, (_, i) => ({
          page: i + 1,
          link: (i + 1).toString(),
        }));

  return (
    <div className="flex items-center gap-4">
      <Button onClick={() => pageChange(-1)} isDisabled={true}>
        <IconArrowLeft width={14} height={14} fill="var(--color-zeplin-gray)" />
      </Button>

      {pageRange.map((page) => {
        if (page.link) {
          return (
            <Button
              key={page.link}
              onClick={() => pageChange(Number(page.link))}
            >
              {page.page}
            </Button>
          );
        } else {
          return (
            <span className="w-10 h-10 text-zeplin-gray" key={page.page}>
              {page.page}
            </span>
          );
        }
      })}

      <Button onClick={() => pageChange(+1)}>
        <IconArrowRight
          width={14}
          height={14}
          fill="var(--color-zeplin-navy)"
        />
      </Button>
    </div>
  );
};

export default Pagination;
