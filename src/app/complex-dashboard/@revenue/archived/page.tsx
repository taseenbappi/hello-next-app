import Card from "@/components/Card/Card";
import Link from "next/link";

const Archived = () => {
  return (
    <Card>
      <p>Archived</p>
      <Link href={"/complex-dashboard"} className="text-blue-500">
        -default
      </Link>
    </Card>
  );
};

export default Archived;
