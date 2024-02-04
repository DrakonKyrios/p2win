import tw from "tailwind-styled-components";
import { SectionContentStyled } from "../../../components/share.styled";

const CopyInfoStyled = tw.ul`flex flex-row [&>li]:border-r-2 [&>li]:px-8 [&>li:first-child]:pl-0`;
export default function Footer() {
  return (
    <footer className="bg-primary-900 text-white">
      <div className="flex border-b-[1px]  border-opacity-30 border-primary-400">
        <div className="flex-1">&nbsp;</div>
        <div className="flex flex-col border-r-[1px] border-opacity-30 border-primary-400 flex-[0 0 calc(1280px/2px)]">
          <div className="flex p-8 border-b-[1px] border-opacity-30 border-primary-400">
            <div>Pay2Win.gg</div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel
              deleniti dolor reprehenderit incidunt aut cupiditate repellat
            </div>
          </div>
          <div className="flex p-8">
            <div className="flex-1">
              <ul>
                <li className="font-bold">Lorem</li>
                <li>ipsum</li>
                <li>dolor</li>
                <li>sit</li>
                <li>amet</li>
              </ul>
            </div>
            <div className="flex-1">
              <ul>
                <li className="font-bold">Lorem</li>
                <li>ipsum</li>
                <li>dolor</li>
                <li>sit</li>
                <li>amet</li>
              </ul>
            </div>
            <div className="flex-1">
              <ul>
                <li className="font-bold">Lorem</li>
                <li>ipsum</li>
                <li>dolor</li>
                <li>sit</li>
                <li>amet</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex  flex-[0 0 calc(1280px/2px)]">
          Join the Conversation, Join the Discord
        </div>
        <div className="flex-1">&nbsp;</div>
      </div>
      <SectionContentStyled>
        <div className="flex pt-20 pb-4 px-8">
          <CopyInfoStyled>
            <li>&copy; Viewtech Labs</li>
            <li>Support</li>
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
          </CopyInfoStyled>
        </div>
      </SectionContentStyled>
    </footer>
  );
}
