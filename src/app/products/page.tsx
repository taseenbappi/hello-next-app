import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Product",
};

const ProductList = () => {
  return (
    <div>
      <h3>Products List</h3>

      <p>
        <Link href="/products/1">ProductList-1</Link>
      </p>
      <p>
        <Link href="/products/2" replace>
          ProductList-2
        </Link>
      </p>
      <p>ProductList-2</p>
      <p>ProductList-3</p>
      <p>ProductList-4</p>
    </div>
  );
};

export default ProductList;
