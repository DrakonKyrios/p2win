import tw from "tailwind-styled-components";
import { RevealingText } from "@viewtech-labs/revealing-text";
import {
  SectionContainerStyled,
  SectionContentStyled,
} from "../../components/share.styled";
import { LandingInfo } from "./LandingInfo.component";

const LeftNavStyled = tw.aside`absolute`;
const GameListItemStyled = tw.li`text-black placeholder:block pr-4 border-0 [&>span]:bg-gold [&>span]:bprder-0 line-1 leading-[2.3rem] [&>span]:px-2 [&>span]:py-2 `;

export default function LandingPage() {
  return (
    <>
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
                As P2W ( Pay 2 Win ) becomes more prevalent in the gaming
                sphere, it is my belief that we need an objective metric to
                identify the scale correctly, so a singular person can determine
                for themselves if that game is the right game for themselves.
              </div>
              <div className="w-[48%]">
                For P4T ( Pay 4 Time ), I think the same overlapping metrics can
                be used to determine the rationale of worth to the player and to
                see if the grind is worth it.
              </div>
            </div>
            <div className="mb-8">
              <button>Explore Metrics</button>
            </div>
            <div className="px-12 pb-[500px]">
              Establishing these two concepts, I believe we can create a
              framework that can create some objective truths that can quantify
              expectations before spending hundreds of hours into a game, then
              realizing that it's a dipropionate hill.
            </div>
          </div>
          <div className="relative flex-1 flex pt-[200px]">
            <div className="bg-secondary-500  w-[410px] h-[400px] p-8 z-20">
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
              text="Embracing objectivity has to be the singular most important aspect of any truths esablished and after the initial obversations have been concluded.  The scoring of the different games will also have to be measured by different skill levels and through hard work creating results that can be replicable has to be something we strive for."
            ></RevealingText>
          </div>
        </SectionContentStyled>
      </SectionContainerStyled>
      <SectionContainerStyled className="bg-primary-600">
        <SectionContentStyled>
          <LandingInfo></LandingInfo>
        </SectionContentStyled>
      </SectionContainerStyled>
      <SectionContainerStyled className="bg-primary-500">
        <SectionContentStyled>
          <div className="flex items-center">
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
              <div className="bg-loot-chest-multi w-full h-[340px] bg-no-repeat bg-contain bg-right" />
            </div>
          </div>
        </SectionContentStyled>
      </SectionContainerStyled>
    </>
  );
}
