export default function NavItems({ className }) {
  return (
    <ul
      id="navbar-sticky"
      className={`${className} flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-primary dark:border-gray-700`}
    >
      <li>
        <a
          href="/"
          className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-primary md:hover:opacity-70 md:p-0 md:dark:text-secondary"
          aria-current="page"
        >
          Home
        </a>
      </li>
      <li>
        <a
          href="/about-us"
          className="block py-2 px-3 text-primary rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:opacity-70 md:p-0 md:dark:hover:text-secondary dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
        >
          About
        </a>
      </li>
      <li>
        <a
          href="#"
          className="block py-2 px-3 text-primary rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:opacity-70 md:p-0 md:dark:hover:text-secondary dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
        >
          Services
        </a>
      </li>

      {/* <li className="relative group">
        <a className="hover:text-primary hover:bg-secondary hover:opacity-80 p-3 lg:p-5 block transition-all duration-200 ease-in-out cursor-pointer">
          Inventory
        </a>
        <ul className="absolute overflow-hidden left-0 mt-2 w-48 bg-primary  shadow-2xl rounded-lg opacity-0 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transform translate-y-2 transition-all duration-200 ease-in-out invisible">
          <li>
            <Link
              href="/inventory/new"
              className="block px-4 py-2 hover:bg-secondary hover:text-primary transition-colors duration-300"
            >
              New Cars
            </Link>
          </li>
          <li>
            <Link
              href="/inventory/used"
              className="block px-4 py-2 hover:bg-secondary hover:text-primary transition-colors duration-300"
            >
              Used Cars
            </Link>
          </li>
          <li>
            <Link
              href="/inventory/certified"
              className="block px-4 py-2 hover:bg-secondary hover:text-primary transition-colors duration-300"
            >
              Certified Pre-Owned
            </Link>
          </li>
        </ul>
      </li> */}
    </ul>
  );
}
