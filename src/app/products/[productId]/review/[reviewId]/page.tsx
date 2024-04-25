import { notFound } from "next/navigation";

interface IParams {
  params: {
    productId: string;
    reviewId: string;
  };
}

const ReviewDetails = ({ params }: IParams) => {
  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }
  return (
    <h1>
      Review {params.reviewId} for product {params.productId}
    </h1>
  );
};

export default ReviewDetails;
