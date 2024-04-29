import { useState } from "react";
import {
  SectionContainerStyled,
  SectionContentStyled,
} from "../../components/share.styled";
import tw from "tailwind-styled-components";

interface GameNavItemProps {
  selected: boolean;
}

const GameNavItem = tw.div<GameNavItemProps>`font-bold text-primary-400 ${(
  props
) =>
  props.selected ? "bg-primary-600 text-white px-4" : "text-primary-400 px-2"}`;

export default function Games() {
  const [selection, setSelection] = useState("eft");

  return (
    <SectionContainerStyled>
      <SectionContentStyled>
        <div className="flex bg-primary-600">
          <div className="bg-primary-700 basis-72 rounded-sm">
            <GameNavItem
              selected={selection === "eft"}
              onClick={() => setSelection("eft")}
            >
              Escape from Tarkov
            </GameNavItem>
            <GameNavItem
              selected={selection === "d4"}
              onClick={() => setSelection("d4")}
            >
              Diablo IV
            </GameNavItem>
            <GameNavItem
              selected={selection === "lark"}
              onClick={() => setSelection("lark")}
            >
              Lost Ark
            </GameNavItem>
            <GameNavItem
              selected={selection === "lol"}
              onClick={() => setSelection("lol")}
            >
              League of Legends
            </GameNavItem>
            <GameNavItem
              selected={selection === "fifau"}
              onClick={() => setSelection("fifau")}
            >
              FIFA Ultimate
            </GameNavItem>
          </div>
          <div className="min-h-[700px]">
            <div className="px-4 pt-8">
              In Escape of Tarkov (EFT) there are different pay tiers that allow
              for extra space of private stash inventory.
              <div className="w-96 my-4 grid grid-cols-2 bg-primary-700 p-4">
                <div>Basic Edition:</div>
                <div>10 x 28</div>
                <div>Left Behind Edition:</div>
                <div>10 x 38</div>
                <div>Prepare for Escape:</div>
                <div>10 x 48</div>
                <div>The Unheard:</div>
                <div> 10 x 72</div>
              </div>
              To evaluate the effect on PvP combat we will take the value ratio
              gained in Pay-4-Time and apply it to possible ammo, weapons, and
              armor advantage and possible time frame window that this advantage
              will exist
            </div>
          </div>
        </div>
      </SectionContentStyled>
    </SectionContainerStyled>
  );
}
