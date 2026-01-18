import Image from "next/image";
import Button from "../Button";
import IconArrowRight from "../Icons/ArrowRight";
import IconPromotion from "../Icons/Promotion";

const Banner = () => {
  return (
    <section className="container mx-auto min-h-[439px] bg-[url('/banner-bg.png')] bg-no-repeat bg-cover bg-center relative pt-4">
      <div className="z-20 text-left 2xl:text-center">
        <span className="hidden 2xl:block relative lg:absolute lg:left-0 top-0">
          <Image
            src="/banner-left.png"
            alt="Banner"
            width={514}
            height={439}
            className="w-full lg:max-w-[257px] 2xl:max-w-[514px]"
          />
        </span>
        <div className="max-w-xl mx-0 2xl:mx-auto flex items-start justify-start 2xl:justify-center flex-wrap pt-7 pl-8 2xl:pl-0">
          <div className="flex-[0_0_100%]">
            <IconPromotion
              fill="var(--color-zeplin-red)"
              width={39}
              height={39}
              className="mx-auto -rotate-45"
            />
          </div>
          <h5 className="flex-[0_0_100%] text-h5 text-zeplin-stone font-medium">
            Makale Çağrısı
          </h5>
          <h2 className="flex-[0_0_100%] text-h2 text-zeplin-navy font-bold">
            Türkiye Ulusal Dijital Veri ve Altyapıları
          </h2>
          <p className="flex-[0_0_100%] text-lg text-zeplin-black my-8">
            Bu dosya kapsamında; ulusal ölçekte dijital veri yönetimi, kamu ve
            özel sektörde teknoloji altyapıları, yapay zekâ uygulamaları, büyük
            veri analitiği, siber güvenlik, akıllı sistemler ve dijital dönüşüm
            odaklı özgün, güncel ve disiplinlerarası akademik çalışmalar
            değerlendirilecektir.
          </p>
          <Button
            classNames="bg-zeplin-red text-white min-w-[200px]"
            rightIcon={
              <IconArrowRight
                fill="var(--color-white)"
                width={16}
                height={16}
              />
            }
          >
            Makale Gönder
          </Button>
        </div>
        <span className="relative lg:absolute right-2 bottom-2">
          <Image
            src="/banner-right.png"
            alt="Banner"
            width={336}
            height={495}
            className="mx-auto lg:mx-0"
          />
        </span>
      </div>
    </section>
  );
};

export default Banner;
