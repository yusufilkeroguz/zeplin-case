import Button from "../Button";
import CategoryBadge from "../CategoryBadge";
import IconButton from "../IconButton";
import IconAuthor from "../Icons/Author";
import IconDownload from "../Icons/Download";
import IconEmail from "../Icons/Email";
import IconEye from "../Icons/Eye";
import IconPdf from "../Icons/Pdf";
import IconStickyNotes from "../Icons/StickyNotes";

const Article = () => {
  return (
    <div className="border-2 border-[#DFE3F1] rounded-[20px] bg-white pl-[9px] pr-5 py-[15px] flex items-end justify-between flex-nowrap">
      <div>
        <div className="space-x-3">
          <CategoryBadge type="navy" label="İklim" />
          <CategoryBadge type="default" label="Araştırma Makalesi" />
        </div>
        <div className="text-h6 font-bold flex items-center gap-3 text-zeplin-black my-3">
          <IconPdf fill="var(--color-zeplin-stone)" />
          Türkiye’nin Teknoloji Politikaları ve Döngüsel Ekonomi
        </div>
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-2">
            <span className="bg-[#F0F0F3] rounded-full w-[26px] h-[26px] flex items-center justify-center">
              <IconStickyNotes
                fill="var(--color-zeplin-black)"
                height={15}
                width={"auto"}
              />
            </span>
            Sayfa: <b>12-18</b>
          </span>
          <span className="flex items-center gap-2">
            <span className="bg-[#F0F0F3] rounded-full w-[26px] h-[26px] flex items-center justify-center">
              <IconAuthor
                fill="var(--color-zeplin-black)"
                height={15}
                width={15}
              />
            </span>
            Elif Başkaya Acar, Emre Taran, Halil Başar
          </span>
        </div>
      </div>
      <div className="flex items-end justify-start flex-nowrap gap-2">
        <IconButton>
          <IconEmail width={18} height={18} fill="var(--color-zeplin-black)" />
        </IconButton>
        <IconButton>
          <IconDownload
            width={18}
            height={18}
            fill="var(--color-zeplin-black)"
          />
        </IconButton>
        <Button
          leftIcon={
            <IconEye width={24} height={24} fill="var(--color-white)" />
          }
          classNames="bg-zeplin-navy text-white"
        >
          Görüntüle
        </Button>
      </div>
    </div>
  );
};

export default Article;
