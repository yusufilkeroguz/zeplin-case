import Button from "../Button";
import IconArrowRight from "../Icons/ArrowRight";

const Hero = () => {
  return (
    <section className="relative h-[750px]">
      <div className="absolute inset-0 z-0">
        <div className="bg-[url('/hero-bg.jpg')] bg-cover bg-center bg-no-repeat h-[750px]"></div>
      </div>

      <div className="absolute z-10 flex items-center flex-wrap h-full text-white">
        <div className="max-w-md mx-auto px-3 md:px-6 xl:px-8">
          <h2 className="text-h2">Profuture Teknoloji Dergisi</h2>
          <h1 className="text-h1 mb-4">Son Sayı Yayında</h1>
          <p className="text-lg leading-[25px]">
            Protufure teknoloji mekanizmaları değişikliği alanlarında özgün
            akademik çalışmalar içeren yeni sayıya şimdi erişin.
          </p>

          <Button
            href="/"
            rightIcon={<IconArrowRight width={16} height={16} fill="white" />}
            classNames="mt-[50px] bg-zeplin-navy text-white"
          >
            Dergiyi Görüntüle
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
