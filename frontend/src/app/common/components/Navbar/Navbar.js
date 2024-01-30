import Link from "next/link";
import NavItems from "../NavItems/NavItems";

export default function Navbar({data}) {

  console.log("company_info: ", data)

  const business = data && data.children && data.children.attributes ? data.children.attributes : {};

  const formattedPhone = (number) => {
    if (!number) return "No Phone"; // Return a default message if the phone number is not provided
    const cleaned = ("" + number).replace(/\D/g, "");
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return "(" + match[1] + ") " + match[2] + "-" + match[3];
    }
    return "Invalid Number"; // Return a message for invalid numbers
  };

  return (
    <header className="sticky px-20 shadow text-white bg-sky-600 py-4 md:py-0">
      <nav className="container mx-auto flex flex-col md:flex-row justify-between items-center ">
        <Link href="/" className="md:me-10 font-thin text-3xl italic">
          <span className=" font-bold">A</span>uto
          <span className=" font-bold">D</span>ealer
        </Link>
        <NavItems className={`flex space-x-3`} />
        <a
          className="mx-auto md:ms-auto md:me-0 block text-2xl p-2 px-3 md:p-4 bg-sky-700 md:bg-transparent max-md:rounded-full font-extrabold md:hover:bg-sky-700  transition-all duration-150"
          href={`tel:${data.phone}`}
        >
          {formattedPhone(business.phone)}
        </a>
      </nav>
    </header>
  );
}
