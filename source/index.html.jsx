import About from './pages/about.html.mdx';
import Logo from "./logo.svg";

export default () => {
  return (
    <div style="text-align:center;">
      <Logo/>
      <h1>Welcome to my Portfolio Site, powered by Charge.js!</h1>
      <About />
    </div>
  );
};
