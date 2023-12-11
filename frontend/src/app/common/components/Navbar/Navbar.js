import Link from "next/link";
import NavItems from "../NavItems/NavItems";

export default function Navbar(company_info) {
  const data = company_info.children.attributes;
  const formattedPhone = (number) => {
    const cleaned = ("" + number).replace(/\D/g, "");
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return "(" + match[1] + ") " + match[2] + "-" + match[3];
    }
    return null;
  };
  return (
    <header className="sticky px-20 shadow text-white bg-sky-600 py-4 md:py-0">
      <nav className="container mx-auto flex flex-col md:flex-row justify-between items-center ">
        <Link href="/" className="md:me-10 font-thin text-3xl italic  ">
          <span className=" font-bold">A</span>uto
          <span className=" font-bold">D</span>ealer
        </Link>
        <NavItems className={`flex space-x-3`} />
        <a
          className="mx-auto md:ms-auto md:me-0 block text-2xl p-2 px-3 md:p-4 bg-sky-700 md:bg-transparent rounded-full font-extrabold md:hover:bg-sky-700  transition-all duration-150"
          href={`tel:${data.phone}`}
        >
          {formattedPhone(data.phone)}
        </a>
      </nav>
    </header>
  );
}
