import Image from "next/image";

import Button from "../Button";
import IconArrowRight from "../Icons/ArrowRight";

const Description = () => {
  return (
    <section className="container mx-auto flex items-center justify-between flex-wrap xl:flex-nowrap relative py-[100px] px-4 xl:px-0">
      <div className="w-full max-w-[739px] xl:w-1/2 order-1 xl:order-2">
        <Image
          src="/dergion.png"
          alt="Description"
          width={739}
          height={696}
          className="absolute -top-10 bottom-10 xl:top-auto xl:bottom-25 w-full max-w-[739px] left-0 xl:left-auto"
        />
      </div>
      <div className="relative pt-96 sm:pt-[500px] md:pt-[600px] xl:pt-0 w-full xl:w-1/2 order-2 xl:order-1">
        <h5 className="text-h6 xl:text-h5 text-zeplin-stone font-medium">
          Dergi Amacı ve Kapsamı
        </h5>
        <h2 className="text-h5 xl:text-h2 mb-[10px] font-bold text-zeplin-navy">
          Profuture Teknoloji Dergisi
        </h2>
        <div className="text-lg leading-[25px]">
          Profuture Teknoloji Dergisi, 2022 yılında yayın hayatına başlayan;
          teknoloji, inovasyon, dijital dönüşüm ve geleceğin üretim modelleri
          ekseninde sosyal bilimler ile mühendislik ve fen bilimlerini bir araya
          getiren, uluslararası hakemli ve açık erişimli bir akademik yayındır.
        </div>

        <Button
          rightIcon={
            <IconArrowRight
              width={16}
              height={16}
              fill="var(--color-zeplin-black)"
            />
          }
          classNames="text-zeplin-black border-zeplin-gray min-w-[150px] mt-[50px]"
        >
          Detay
        </Button>
      </div>
    </section>
  );
};

export default Description;
