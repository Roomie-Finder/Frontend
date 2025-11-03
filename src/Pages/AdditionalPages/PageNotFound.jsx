import { Link } from "react-router";

export default function PageNotFound() {
  return (
    <div
      className={`bg-[url(./assets/about.avif)] h-screen w-screen  bg-cover bg-bottom text-white flex flex-col p-5 pt-10 content-top items-center gap-5`}
    >
      <div className="md:text-xl text-xl font-semibold">404</div>
      <h1 className="md:text-8xl sm:text-7xl text-3xl font-semibold">
        Page not found
      </h1>
      <p className="md:text-2xl text-center">
        Sorry, we couldn’t find the page you’re looking for.
      </p>
      <Link to="/" className="">
        ← Back to home
      </Link>
    </div>
  );
}
