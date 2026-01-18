import Image from "next/image";

import Button from "../Button";
import IconArrowRight from "../Icons/ArrowRight";

const Description = () => {
  return (
    <section className="container mx-auto flex items-center justify-between flex-nowrap relative py-[100px]">
      <div className="relative w-1/2">
        <h5 className="text-h5 text-zeplin-stone font-medium">
          Dergi Amacı ve Kapsamı
        </h5>
        <h2 className="text-h2 mb-[10px] font-bold text-zeplin-navy">
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
      <div className="w-1/2">
        <div>
          <Image
            src="/dergion.png"
            alt="Description"
            width={739}
            height={696}
            className="absolute bottom-25"
          />
        </div>
      </div>
    </section>
  );
};

export default Description;
