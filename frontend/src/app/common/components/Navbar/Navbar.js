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
    <header>
      <nav className="flex flex-row shadow sticky justify-between px-20  text-white bg-sky-600 items-center ">
        <Link href="/" className="me-10 font-thin text-3xl italic  ">
          <span className=" font-bold">A</span>uto
          <span className=" font-bold">D</span>ealer
        </Link>
        <NavItems className={`flex space-x-4`} />
        <a
          className="ms-auto me-0 block text-2xl p-4 font-extrabold hover:bg-sky-700  transition-all duration-150"
          href={`tel:${data.phone}`}
        >
          {formattedPhone(data.phone)}
        </a>
      </nav>
    </header>
  );
}
