import About from './pages/about.html.mdx';
import Logo from "./logo.svg";
import Style from "./style.css";

export default () => {
  return (
    <div>
      <Logo />
      <h1>Welcome to my Portfolio Site, powered by Charge.js!</h1>
      <About />
    </div>
  );
};
