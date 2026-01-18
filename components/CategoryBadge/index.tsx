const BADGES = {
  default:
    "bg-[#F6F8FF] text-[#112053] text-sm leading-[25px] py-[3px] px-[10px] rounded-[8px]",
  turquoise:
    "bg-zeplin-turquoise text-white text-xs leading-[18px] py-[1px] px-[8px] rounded-[15px]",
  "dark-navy":
    "bg-zeplin-navy text-white text-xs leading-[18px] py-[1px] px-[8px] rounded-[15px]",
  orange:
    "bg-zeplin-orange text-white text-sm leading-[18px] py-[3px] px-[10px] rounded-[8px]",
  green:
    "bg-zeplin-green text-white text-xs leading-[18px] py-[3px] px-[10px] rounded-[8px]",
  navy: "bg-zeplin-green text-white text-xs leading-[18px] py-[3px] px-[10px] rounded-[8px]",
};

const CategoryBadge = ({
  type,
  label,
}: {
  type: keyof typeof BADGES;
  label: string;
}) => {
  return <span className={BADGES[type]}>{label}</span>;
};

export default CategoryBadge;
