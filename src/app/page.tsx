import ListComponent from "./component/list";
import NewBtn from "./component/NewBtn";

export default function Home() {
  return (
    <div className="home">
      <ListComponent/>
      <NewBtn/>
    </div>
  );
}
