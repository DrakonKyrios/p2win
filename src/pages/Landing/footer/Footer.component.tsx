import tw from "tailwind-styled-components";
import { SectionContentStyled } from "../../../components/share.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons/faDiscord";
import { Button } from "@pay2win/storybook";
const CopyInfoStyled = tw.ul`flex flex-row [&>li]:border-r-2 [&>li]:px-8 [&>li:first-child]:pl-0`;
export default function Footer() {
  //basis-[calc(1440px/2)]
  return (
    <footer className="bg-primary-900 text-white">
      <div className="flex border-b-[1px]  border-opacity-30 border-primary-400">
        <div className="flex flex-col flex-1 border-r-[1px] border-opacity-30 border-primary-400 ">
          <div className="flex border-b-[1px] border-opacity-30 border-primary-400 py-8 justify-end">
            <div className="basis-[calc(1440px/2)] pr-8">
              <div>Pay2Win.gg</div>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel
                deleniti dolor reprehenderit incidunt aut cupiditate repellat
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-end">
            <div className="flex py-8 basis-[calc(1440px/2)]">
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
        </div>
        <div className="flex flex-1 justify-center align-middle items-center">
          <div className="inline-block text-2xl basis-[calc(1440px/2)]">
            <Button variation="secondary">
              <FontAwesomeIcon icon={faDiscord} /> Join the Discord
            </Button>
          </div>
        </div>
      </div>
      <SectionContentStyled className="py-8">
        <div className="flex pb-4">
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
