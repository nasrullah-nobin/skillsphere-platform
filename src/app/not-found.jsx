import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">

      <h1 className="text-6xl font-bold text-blue-600">404</h1>

      <h2 className="mt-4 text-2xl font-semibold text-heading">
        Page Not Found
      </h2>

      <p className="mt-2 text-body max-w-md">
        Sorry, we couldn’t find the page you’re looking for. 
        It might have been removed or the link is broken.
      </p>

      <div className="mt-6 flex gap-4">
        <Link
          href="/"
          className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Go Home
        </Link>

        <Link
          href="/courses"
          className="px-5 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition"
        >
          Browse Courses
        </Link>
      </div>

    </div>
  );
}