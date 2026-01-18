import Button from "../Button";
import CategoryBadge from "../CategoryBadge";
import IconArrowRight from "../Icons/ArrowRight";
import IconPdf from "../Icons/Pdf";
import Magazine from "./item";
import { MagazineProps } from "./interface";
import Pagination from "../Pagination";

const Magazines = () => {
  const magazine: MagazineProps = {
    name: "Teknoloji ve Dijital Dergisi",
    image: "/magazine.png",
    icon: <IconPdf fill="var(--color-zeplin-gray)" />,
    date: "Aralık 2022",
    badge: <CategoryBadge type="turquoise" label="Yeni" />,
    bind: 1,
    number: 1,
  };
  return (
    <section className="container mx-auto mb-40 px-4 xl:px-0">
      <div className="flex justify-between items-end flex-nowrap mb-8">
        <div className="flex flex-nowrap gap-5">
          <div>
            <h2 className="text-base xl:text-h5 text-zeplin-stone">Sayılar</h2>
            <h5 className="text-lg xl:text-h2 text-zeplin-navy leading-[28px] font-bold">
              Dergiler
            </h5>
          </div>
          <div className="flex items-end">
            <Pagination />
          </div>
        </div>
        <div>
          <Button
            rightIcon={
              <IconArrowRight
                fill="var(color-zeplin-stone)"
                width={14}
                height={14}
              />
            }
            classNames="border-zeplin-gray"
          >
            Tümünü Görüntüle
          </Button>
        </div>
      </div>

      <div className="flex flex-nowrap space-x-5 relative overflow-x-scroll">
        {Array.from({ length: 3 }).map((_, index) => (
          <Magazine key={index} {...magazine} />
        ))}
      </div>
    </section>
  );
};

export default Magazines;
