import { ReactNode } from "react";

const ProductDetailsLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      {children}
      <h1>Others Products</h1>
    </div>
  );
};

export default ProductDetailsLayout;
