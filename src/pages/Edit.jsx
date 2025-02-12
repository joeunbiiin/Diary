import { useParams } from "react-router-dom";

const Edit = () => {
  const params = useParams;
  console.log({ params });

  return <div>{params.id}번째 페이지입니다.</div>;
};

export default Edit;
