import Image from "next/image";
import Button from "../Button";
import IconArrowRight from "../Icons/ArrowRight";
import Article from "./item";
import IconButton from "../IconButton";
import IconDownload from "../Icons/Download";
import IconEye from "../Icons/Eye";

const Articles = () => {
  return (
    <section className="container mx-auto flex items-start justify-between gap-6 pb-40 mt-32">
      <div className="px-5 pt-6 pb-3.5 bg-white rounded-3xl border-[5px] border-[#FFD9DA] max-w-[478px] shrink-0">
        <Image
          src="/article-bg.png"
          alt="article-bg"
          width={428}
          height={641}
        />

        <div className="flex items-center justify-center gap-2 mt-3.5">
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
      <div className="w-full">
        <div className="flex items-center justify-between pb-10 mt-8">
          <div className="text-zeplin-stone text-h5 font-medium">
            <h2>Profuture Teknoloji Dergisi</h2>
            <h3 className="text-zeplin-red font-bold text-h2">
              Güncel Yazılar
            </h3>
          </div>

          <Button
            rightIcon={
              <IconArrowRight
                fill="var(--color-zeplin-black)"
                width={16}
                height={16}
              />
            }
            classNames="bg-transparent text-zeplin-black border border-zeplin-gray"
          >
            Tümünü Görüntüle
          </Button>
        </div>
        <div className="space-y-5">
          {Array.from({ length: 4 }).map((_, index) => (
            <Article key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
