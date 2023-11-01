import Link from "next/link";

const Footer = () => (
  <footer className="fixed bottom-0 left-0 z-20 w-full p-4  border-t shadow md:flex md:items-center md:justify-between md:p-6 bg-gray-800 border-gray-600">
    <span className="block text-sm sm:text-center text-gray-400">
      Go check my GitHub account, all source code is there:{" "}
      <Link href="https://github.com/tristanqtn"> GitHub</Link>
    </span>
  </footer>
);

Footer.displayName = "Footer";
export default Footer;
