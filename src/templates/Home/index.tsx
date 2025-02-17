import { useHomePageStore } from "./store";

const HomePage = () => {
  const { count, increase, decrease } = useHomePageStore();

  return (
    <div>
      <p>{count}</p>
      <button onClick={increase}>Add</button>
      <button onClick={decrease}>Remove</button>
      <p>Home Page</p>
    </div>
  );
};

const HomeTemplate = () => <HomePage />;

export default HomeTemplate;
