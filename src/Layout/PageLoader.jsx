export default function PageLoader() {
  return (
    <div className="flex justify-center items-center text-blue-500 text-2xl font-bold mt-50">
      <svg
        className="mr-3 size-7 animate-spin border-5 border-blue-200 border-t-blue-500 rounded-full"
        viewBox="0 0 24 24"
      ></svg>
      Processing…
    </div>
  );
}
