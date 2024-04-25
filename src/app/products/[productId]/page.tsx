import { Metadata } from "next";

interface IParams {
  params: {
    productId: string;
  };
}

const ProductDetails = ({ params }: IParams) => {
  return (
    <div>
      <h4>ProductDetails - {params.productId} </h4>
    </div>
  );
};

export default ProductDetails;

export const generateMetadata = async ({
  params,
}: IParams): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Phone ${params.productId}`);
    }, 100);
  });
  return {
    title: `Product ${title}`,
  };
};
