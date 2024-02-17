import tw from "tailwind-styled-components";
import viteLogo from "/vite.svg";
import Footer from "../components/Footer.component";
import { Link, Outlet } from "react-router-dom";
const LogoBlockStyled = tw.span`inline-block p-4 bg-gold h-20 w-20 [&>img]:h-full `;

export default function DefaultShell() {
  return (
    <>
      <header className="h-20 flex">
        <LogoBlockStyled>
          <img src={viteLogo} />
        </LogoBlockStyled>
        <div className="flex-1 flex justify-center items-center">
          <span className="inline-block font-bold px-6  pb-2">
            <Link to={"/"}>PAY 2 WIN</Link>
          </span>
          <ul className="inline-block [&>li]:px-2">
            <li className="inline-block pb-2 border-b-2 border-gold">
              <Link to={"/"}> Purpose</Link>
            </li>
            <li className="inline-block pb-2">
              <Link to={"/404"}>Games</Link>
            </li>
            <li className="inline-block pb-2">
              <Link to={"/404"}>Metrics</Link>
            </li>
            <li className="inline-block pb-2">
              <Link to={"/roadmap"}>Roadmap</Link>
            </li>
          </ul>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
