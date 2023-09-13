import Link from "next/link";
import NavItems from "../NavItems/NavItems";

export default function Navbar(company_info) {
  const data = company_info.children.attributes;
  const formattedPhone = (number) => {
      const cleaned = ('' + number).replace(/\D/g, '');
      const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
      if (match) {
          return '(' + match[1] + ') ' + match[2] + '-' + match[3];
      }
      return null;
  }
  return (
    <header>
      <nav className="flex flex-row shadow sticky justify-between p-5 px-20 text-white bg-neutral-800 items-center ">
        <Link
          href="/"
          className="me-10 font-bold text-white text-3xl italic underline text underline-offset-4 "
        >
          <span className="text-red-600 ">A</span>uto
          <span className="text-red-600 ">D</span>ealer!
        </Link>
        <NavItems className={`flex space-x-4`}/>
        <a className="ms-auto me-0 block text-2xl font-extrabold" href={`tel:${data.phone}`}>{formattedPhone(data.phone)}</a>
      </nav>
    </header>
  );
}
