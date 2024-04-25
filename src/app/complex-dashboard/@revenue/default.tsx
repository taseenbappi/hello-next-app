import Card from "@/components/Card/Card";
import Link from "next/link";

const DefaultRevenue = () => {
  return (
    <Card>
      <p>Revenue</p>
      <Link href={"/complex-dashboard/archived"} className="text-blue-500">
        Archived
      </Link>
    </Card>
  );
};

export default DefaultRevenue;
