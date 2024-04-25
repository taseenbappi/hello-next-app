import Link from "next/link";

const F1 = () => {
  return (
    <div className="py-4 text-center flex gap-3">
      Hello F1
      <Link href={"/f1/f2"} className="text-blue-500">
        Got to f2
      </Link>
    </div>
  );
};

export default F1;
