interface IParamsSlug {
  params: {
    slug: string[];
  };
}

const Docs = ({ params }: IParamsSlug) => {
  if (params.slug.length === 2) {
    return (
      <div>
        Docs view for {params.slug[0]} & {params.slug[1]}
      </div>
    );
  } else if (params.slug.length === 1) {
    return <div>Docs view for {params.slug[0]}</div>;
  }
  return <div>Docs home page</div>;
};

export default Docs;
