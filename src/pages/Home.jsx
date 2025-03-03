import Header from "../components/header";
import Button from "../components/Button";
import DiaryList from "../components/DiaryList";

const Home = () => {
  return (
    <div>
      <Header
        title={"2025년 2월"}
        leftChild={<Button text={"<"} />}
        rightChild={<Button text={">"} />}
      />
      <DiaryList />
    </div>
  );
};

export default Home;
