import { useAboutPageStore } from "./store";

const AboutPage = () => {
  const { count, increase, decrease } = useAboutPageStore();

  return (
    <div>
      <p>{count}</p>
      <button onClick={increase}>Add</button>
      <button onClick={decrease}>Remove</button>
      <p>About Page</p>
    </div>
  );
};

const AboutTemplate = () => <AboutPage />;

export default AboutTemplate;
