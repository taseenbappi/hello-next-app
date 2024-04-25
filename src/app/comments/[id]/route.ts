import { commentsData } from "../data";

interface IParams {
  params: {
    id: string;
  };
}

export async function GET(_request: Request, { params }: IParams) {
  const comment = commentsData.find(
    (comment) => comment.id === parseInt(params.id),
  );
  return Response.json(comment);
}

// PATCH
export async function PATCH(request: Request, { params }: IParams) {
  const body = await request.json();
  const { text } = body;
  const index = commentsData.findIndex(
    (comment) => comment.id === parseInt(params.id),
  );
  commentsData[index].text = text;
  return Response.json(commentsData[index]);
}

// Delete
export async function DELETE(_request: Request, { params }: IParams) {
  const index = commentsData.findIndex(
    (comment) => comment.id === parseInt(params.id),
  );
  commentsData.splice(index, 1);
  return Response.json({
    message: "Comment deleted successfully",
    data: commentsData[index],
  });
}
