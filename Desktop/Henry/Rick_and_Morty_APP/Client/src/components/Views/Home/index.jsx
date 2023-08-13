import Cards from "../../Cards/Cards";
import style from "./Home.module.css";

const Home = (props) => (
  <div className={style.container}>
    <Cards characters={props.characters} onClose={props.onClose} />
    console.log(characters);
  </div>
);

export default Home;