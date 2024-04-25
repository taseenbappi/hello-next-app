import Link from "next/link";

const F4 = () => {
  return (
    <div>
      F4 page
      <Link href={"/f1/f3"}>.. interceptor page f3</Link>
      <Link href={"/about"}>... interceptor About</Link>
    </div>
  );
};

export default F4;
