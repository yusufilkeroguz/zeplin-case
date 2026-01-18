"use client";

import { FC } from "react";

import { MagazineProps } from "./interface";
import IconArrowRight from "../Icons/ArrowRight";
import IconButton from "../IconButton";
import IconDownload from "../Icons/Download";
import IconEye from "../Icons/Eye";
import IconCilt from "../Icons/Cilt";
import IconNumber from "../Icons/Number";
import IconCalendar from "../Icons/Calendar";

const Magazine: FC<MagazineProps> = ({
  image,
  name,
  icon,
  date,
  badge,
  bind = 1,
  number = 1,
}) => {
  return (
    <div className="flex relative bg-white border border-[#E9F4F8] rounded-2xl p-4 pr-8">
      <img src={image} alt={name} className="rounded-l-2xl rounded-b-2xl" />
      <div className="pl-4 flex flex-col justify-between">
        <div className="flex items-start justify-between flex-nowrap pb-4">
          {icon}
          {badge}
        </div>
        <h5 className="text-xl text-zeplin-navy leading-[28px] font-bold">
          {name}
        </h5>

        <div className="flex items-center gap-4 text-zeplin-black text-base leading-[18px]">
          <span className="flex items-center gap-1.5">
            <IconCilt fill="var(--color-zeplin-black)" width={17} height={17} />
            Cilt: <b>{bind}</b>
          </span>
          <span className="flex items-center gap-1.5">
            <IconNumber
              fill="var(--color-zeplin-black)"
              width={16}
              height={16}
            />
            Sayı: <b>{number}</b>
          </span>
        </div>

        <span className="text-base leading-[18px] text-zeplin-black flex items-center gap-1.5 font-bold">
          <IconCalendar
            fill="var(--color-zeplin-black)"
            width={18}
            height={18}
          />
          {date}
        </span>

        <div className="flex items-center justify-end gap-4">
          <IconButton href="/" classNames="bg-zeplin-navy border-zeplin-navy">
            <IconEye fill="var(--color-white)" width={24} height={24} />
          </IconButton>

          <IconButton href="/">
            <IconDownload
              fill="var(--color-zeplin-black)"
              width={18}
              height={18}
            />
          </IconButton>

          <IconButton href="/">
            <IconArrowRight
              fill="var(--color-zeplin-black)"
              width={15}
              height={15}
            />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Magazine;
