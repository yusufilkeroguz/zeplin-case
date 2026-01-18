import Button from "@/components/Button";
import IconArrowLeft from "@/components/Icons/ArrowLeft";
import IconArrowRight from "@/components/Icons/ArrowRight";
import Pagination from "@/components/Pagination";

export default function ComponentsPage() {
  return (
    <main className="space-y-8">
      <section>
        <h1 className="text-h1 font-bold mb-6">Headings</h1>
        <h1 className="text-h1">32 px font-size / 38 line height</h1>
        <h2 className="text-h2">28 px font-size / 36 line height</h2>
        <h3 className="text-h3">26 px font-size / 32 line height</h3>
        <h4 className="text-h4">24 px font-size / 30 line height</h4>
        <h5 className="text-h5">22 px font-size / 28 line height</h5>
        <h6 className="text-h6">20 px font-size / 26 line height</h6>
      </section>

      <section>
        <h1 className="text-h1 font-bold mb-6">Pagination</h1>
        <Pagination />
      </section>

      <section>
        <h1 className="text-h1 font-bold mb-6">Buttons</h1>
        <Button
          classNames="text-white"
          leftIcon={<IconArrowLeft fill="#fff" width={16} height={16} />}
        >
          Geri
        </Button>

        <Button
          classNames="text-white"
          rightIcon={<IconArrowRight fill="#fff" width={16} height={16} />}
        >
          İleri
        </Button>
      </section>
    </main>
  );
}
