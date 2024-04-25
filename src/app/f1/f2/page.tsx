import Link from "next/link";

const F2 = () => {
  return (
    <div className="py-4 text-center">
      Hello F2
      <Link href={"/f1"} className="text-blue-500 flex gap-3">
        Got to f1
      </Link>
    </div>
  );
};

export default F2;
