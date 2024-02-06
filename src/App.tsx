import tw from "tailwind-styled-components";
import viteLogo from "/vite.svg";
import { RevealingText } from "@viewtech-labs/revealing-text";
import "./App.css";
import Footer from "./pages/Landing/footer/Footer.component";
import {
  SectionContainerStyled,
  SectionContentStyled,
} from "./components/share.styled";

const LogoBlockStyled = tw.span`inline-block p-4 bg-gold h-20 w-20 [&>img]:h-full `;
const LeftNavStyled = tw.aside`absolute`;
const GameListItemStyled = tw.li`text-black placeholder:block pr-4 border-0 [&>span]:bg-gold [&>span]:bprder-0 line-1 leading-[2.3rem] [&>span]:px-2 [&>span]:py-2 `;
const DetailContentStyled = tw.div`flex-1 bg-primary-500 py-2 px-4  rounded-lg`;
function App() {
  return (
    <>
      <header className="h-20 flex">
        <LogoBlockStyled>
          <img src={viteLogo} />
        </LogoBlockStyled>
        <div className="flex-1 flex justify-center items-center">
          <span className="inline-block font-bold px-6  pb-2">PAY 2 WIN</span>
          <ul className="inline-block [&>li]:px-2">
            <li className="inline-block pb-2 border-b-2 border-gold">
              Purpose
            </li>
            <li className="inline-block pb-2">Games</li>
            <li className="inline-block pb-2">Metrics</li>
            <li className="inline-block pb-2">Roadmap</li>
          </ul>
        </div>
      </header>
      <main>
        <SectionContainerStyled className="flex flex-1">
          <LeftNavStyled>
            <ul className="pt-14">
              <GameListItemStyled>
                <span>God of War</span>
              </GameListItemStyled>
              <GameListItemStyled>
                <span>League of Legends</span>
              </GameListItemStyled>
              <GameListItemStyled>
                <span>Lost Ark</span>
              </GameListItemStyled>
              <GameListItemStyled>
                <span>Escape from Tarkov</span>
              </GameListItemStyled>
              <GameListItemStyled>
                <span>Diablo 4</span>
              </GameListItemStyled>
            </ul>
          </LeftNavStyled>
          <SectionContentStyled className="flex flex-row h-[1000px]">
            <div className="flex-1 pt-[200px]">
              <div>
                <span className="text-4xl font-bold">Pay 2 Win.</span>
              </div>
              <div>
                <span className="text-4xl font-bold">Pay 4 Time</span>
              </div>
              <div>
                <span className="text-4xl font-bold text-gray-800">
                  Pay != Victory
                </span>
              </div>
              <div className="flex text-sm px-12 justify-between pt-12 mb-8">
                <div className="w-[48%]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                  itaque nulla, officiis a, rerum eius in totam quaerat eaque
                  neque, maiores quisquam voluptas nisi eum vero ullam minus
                </div>
                <div className="w-[48%]">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Velit modi accusamus, quaerat voluptatum perspiciatis atque
                  doloribus odio suscipit molestias fuga sit qui, assumenda
                </div>
              </div>
              <div className="mb-8">
                <button>Explore Metrics</button>
              </div>
              <div className="px-12 pb-[500px]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius,
                eveniet voluptate! Quia at atque voluptas quis distinctio ut
                labore! Error ad sapiente voluptatem fuga rerum tenetur quod.
                Sit, modi minima. Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Eius, eveniet voluptate! Quia at atque
                voluptas quis distinctio ut labore! Error ad sapiente voluptatem
                fuga rerum tenetur quod. Sit, modi minima.
              </div>
            </div>
            <div className="relative flex-1 flex pt-[200px]">
              <div className="bg-gold  w-[410px] h-[400px] p-8 z-20">
                <span className="block bg-loot-box bg-cover bg-no-repeat w-full h-full" />
                &nbsp;
              </div>
              <div className="bg-white  w-[300px] h-[600px] mt-[-100px] ml-[-100px] flex flex-col z-10">
                <span className="block bg-black bg-loot-chest-vector bg-contain bg-center bg-no-repeat flex-1" />
              </div>
            </div>
          </SectionContentStyled>
        </SectionContainerStyled>
        <SectionContainerStyled className="pb-[200px]">
          <SectionContentStyled>
            <div className="">
              <RevealingText
                className={
                  "[&>span]:text-3xl [&>span]:text-gray-50 [&>span]:font-bold"
                }
                startZoneY={1400}
                endZoneY={300}
                opacitySharpness={16}
                minOpacity={0.1}
                text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius,
                eveniet voluptate! Quia at atque voluptas quis distinctio ut
                labore! Error ad sapiente voluptatem fuga rerum tenetur quod.
                Sit, modi minima. Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Eius, eveniet voluptate! Quia at atque
                voluptas quis distinctio ut labore! Error ad sapiente voluptatem
                fuga rerum tenetur quod. Sit, modi minima."
              ></RevealingText>
            </div>
          </SectionContentStyled>
        </SectionContainerStyled>
        <SectionContainerStyled className="bg-primary-600">
          <SectionContentStyled>
            <div className="flex relative py-10">
              <div className="flex-1">
                <div className="text-2xl font-bold mb-2">
                  This is about measuring{" "}
                  <span className="text-gold">Pay-2-Win</span>
                </div>
                <div className="pr-32">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Velit aperiam repudiandae asperiores enim qui, in corrupti
                  veritatis possimus officia voluptate nostrum dolorum illo
                  assumenda earum nisi ex ipsa aspernatur exercitationem.
                </div>
              </div>
              <div className="flex-0 w-[200px] h-[200px] overflow-hidden rounded-full">
                <div
                  className={
                    "bg-loot-box-stencil h-[200px] bg-no-repeat bg-contain overflow-hidden  rounded-4xl"
                  }
                ></div>
              </div>
            </div>
            <div className="grid justify-between grid-cols-2 gap-4 mb-4">
              <DetailContentStyled>
                <div>
                  <span
                    className={"inline-block bg-loot-box bg-contain h-6 w-6"}
                  ></span>
                  <span>Reporting</span>
                </div>
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Velit aperiam repudiandae asperiores enim qui, in corrupti
                  veritatis possimus officia voluptate nostrum dolorum illo
                  assumenda earum nisi ex ipsa aspernatur exercitationem.
                </div>
              </DetailContentStyled>
              <DetailContentStyled>
                <div>
                  <span
                    className={"inline-block bg-loot-box bg-contain h-6 w-6"}
                  ></span>
                  <span>Reporting</span>
                </div>
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Velit aperiam repudiandae asperiores enim qui, in corrupti
                  veritatis possimus officia voluptate nostrum dolorum illo
                  assumenda earum nisi ex ipsa aspernatur exercitationem.
                </div>
              </DetailContentStyled>
            </div>
            <div className="grid justify-between grid-cols-3 gap-4">
              <DetailContentStyled>
                <div>
                  <span
                    className={"inline-block bg-loot-box bg-contain h-6 w-6"}
                  ></span>
                  <span>Reporting</span>
                </div>
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Velit aperiam repudiandae asperiores enim qui, in corrupti
                  veritatis possimus officia voluptate nostrum dolorum illo
                  assumenda earum nisi ex ipsa aspernatur exercitationem.
                </div>
              </DetailContentStyled>
              <DetailContentStyled>
                <div>
                  <span
                    className={"inline-block bg-loot-box bg-contain h-6 w-6"}
                  ></span>
                  <span>Reporting</span>
                </div>
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Velit aperiam repudiandae asperiores enim qui, in corrupti
                  veritatis possimus officia voluptate nostrum dolorum illo
                  assumenda earum nisi ex ipsa aspernatur exercitationem.
                </div>
              </DetailContentStyled>
              <DetailContentStyled className="border-2 border-gold relative">
                <div className=" text-4xl pt-4">
                  <span className="text-gold">P</span>ay 2 Win on a
                  <br />
                  <span className="text-gold">B</span>alance scale
                  <br />
                  <span className="text-gold">W</span>ith Purpose
                </div>
                <div className="absolute right-0 bottom-4 h-[100px] w-[100px] bg-loot-box-white bg-contain" />
              </DetailContentStyled>
            </div>
          </SectionContentStyled>
        </SectionContainerStyled>
        <SectionContainerStyled className="bg-primary-500">
          <SectionContentStyled>
            <div className="flex">
              <div className="flex-1">
                <div className="text-2xl">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel
                  deleniti dolor reprehenderit incidunt aut cupiditate repellat
                </div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel
                deleniti dolor reprehenderit incidunt aut cupiditate repellat
                tenetur cumque odio quis? Id hic labore incidunt, impedit
                similique nulla doloremque. Itaque, autem.
              </div>
              <div className="flex-1">
                <div className="bg-loot-chest-multi w-full h-[400px] bg-no-repeat bg-contain bg-center" />
              </div>
            </div>
          </SectionContentStyled>
        </SectionContainerStyled>
      </main>

      <Footer />
    </>
  );
}

export default App;
