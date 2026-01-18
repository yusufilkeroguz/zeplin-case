import IconButton from "../IconButton";
import IconIdCard from "../Icons/IdCard";
import IconLocation from "../Icons/Location";
import IconMessage from "../Icons/Message";
import FooterCopyright from "./copyright";

const Footer = () => {
  return (
    <footer className="w-full bg-zeplin-footer-bg text-white text-[15px] font-light pt-[55px]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 border-b border-zeplin-gray mb-10 pb-10">
          <div className="flex flex-nowrap justify-start items-center gap-4">
            <IconButton>
              <IconIdCard fill="white" />
            </IconButton>
            <div>
              <div className="text-[16.5px] leading-[20px]">Dergi Editörü</div>
              <div className="text-[18px] leading-[22px] font-bold">
                Prof. Dr. Elif Başkaya Acar
              </div>
              <div className="text-[16px] leading-[19px]">elif@gmail.com</div>
            </div>
          </div>
          <div className="flex flex-nowrap justify-start items-center gap-4">
            <IconButton>
              <IconMessage fill="white" />
            </IconButton>
            <div>
              <div className="text-[16.5px] leading-[20px]">Mail Adresi</div>
              <div className="text-[18px] leading-[22px] font-bold">
                profuture@gmail.com
              </div>
            </div>
          </div>
          <div className="flex flex-nowrap justify-start items-center gap-4">
            <IconButton>
              <IconLocation fill="white" />
            </IconButton>
            <div>
              Profuture Teknoloji Yayınevi <br />
              Ahmet Kemal Mahallesi 1245. Cadde No: 10 <br />
              Çankaya/Ankara
            </div>
          </div>
        </div>
        <div className="text-center py-6 italic text-[15px] leading-[20px]">
          Bu sitede yer alan tüm yazılı, görsel ve uygulama içerikleri kaynak
          gösterilmeden kullanılamaz. Site içerisinde sunulan bilgiler yalnızca
          bilgilendirme amacıyla hazırlanmış olup, bu bilgilerin kullanımından
          doğabilecek her türlü sorumluluk kullanıcıya aittir. Siteye erişim
          sağlayan kullanıcılar, bu şartları okumuş, anlamış ve kabul etmiş
          sayılır.
        </div>
      </div>
      <FooterCopyright />
    </footer>
  );
};

export default Footer;
