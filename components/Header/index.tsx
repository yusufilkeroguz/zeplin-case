import Link from "next/link";
import Button from "../Button";
import IconButton from "../IconButton";
import IconAuthor from "../Icons/Author";
import IconKurul from "../Icons/Kurul";
import IconSearch from "../Icons/Search";
import Logo from "../Logo";
import IconHome from "../Icons/Home";
import IconMessage from "../Icons/Message";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-zeplin-navy xl:bg-white flex items-start justify-between">
      <div className="rounded-0 xl:rounded-tr-[100px] bg-zeplin-navy py-2 px-2 xl:py-5.5 xl:pl-6 xl:pr-20 border-white">
        <Logo />
      </div>

      <div className="text-right w-full hidden xl:block">
        <div className="bg-zeplin-dark-navy w-full scoop rounded-bl-[45px] py-3 flex items-end justify-between pl-12 text-white text-[17px] leading-[21px] pr-8">
          <span className="flex items-center gap-2">
            <IconMessage width={16} height={16} fill="var(--color-white)" />
            profuture@gmail.com
          </span>

          <span className="space-x-5">
            <span>
              <b>ISSN</b>: 345-255
            </span>
            <span>Başlangıç 2025</span>
            <span>
              Periyot: <b>Yılda 2 Sayı</b>
            </span>
          </span>
        </div>
        <div className="hidden xl:flex items-end justify-between">
          <div className="pl-14 pb-2">
            <IconHome fill="var(--color-zeplin-green)" />
          </div>
          <div className="flex items-center gap-1 mt-4 pr-8 text-[17px] leading-[21px] justify-end">
            <div className="mr-5 space-x-2.5 hidden xl:block">
              <Link href="/">Amaç ve Kapsam</Link>
              <Link href="/">Etik İlkeler ve Yayın Politikası</Link>
              <Link href="/">Makale Çağrıları</Link>
              <Link href="/">Sayılar</Link>
              <Link href="/">İletişim</Link>
            </div>
            <Button
              leftIcon={
                <IconKurul fill="var(--color-white)" width={16} height={16} />
              }
              classNames="bg-zeplin-navy text-white"
            >
              Dergi Kurulu
            </Button>
            <Button
              leftIcon={
                <IconAuthor fill="var(--color-white)" width={16} height={16} />
              }
              classNames="bg-zeplin-green text-white"
            >
              Yazar Rehberi
            </Button>
            <IconButton>
              <IconSearch
                fill="var(--color-zeplin-black)"
                width={24}
                height={24}
              />
            </IconButton>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
