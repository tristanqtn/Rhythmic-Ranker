import Link from "next/link";

export default () => (
  <footer className="fixed bottom-0 left-0 z-20 w-full p-4  border-t shadow md:flex md:items-center md:justify-between p-6 bg-gray-900 border-gray-600">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        Go check my GitHub account, all source code is there:{" "}
        <Link href="https://github.com/tristanqtn"> GitHub</Link>
      </span>
    </div>
  </footer>
);
