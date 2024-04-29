import tw from "tailwind-styled-components";
import {
  SectionContainerStyled,
  SectionContentStyled,
} from "../../components/share.styled";
import "./Metrics.page.css";
import { useState } from "react";

interface MetricActiveProps {
  active: boolean;
}
const MetricTitleStyled = tw.div`inline-block relative bg-secondary-500 text-primary-500 font-bold p-2 mb-4 uppercase`;
const MetricContainer = tw.div`mb-8`;
const MetricTitle = tw.div<MetricActiveProps>`basis-48 mx-8 border-b-2 text-center text-2xl font-bold pb-2 mb-8 ${(
  props
) => (props.active ? "text-secondary-500" : "")}`;
const MetricContentStyled = tw.div`border-l-2 border-l-secondary-500 bg-primary-700 p-4`;
const MetricTypeContainerStyled = tw.div<MetricActiveProps>`basis-[70%] px-8 transition-opacity duration-1000${(
  props
) =>
  props.active
    ? "opacity-100 relative"
    : "opacity-0 absolute invisible r-[10000px]"}`;

export default function Metrics() {
  const [isPay2WinSelected, setIsPay2WinSelected] = useState(false);
  const pay2winMetrics = [
    {
      title: "Pay 2 Win: Inventory - Escape from Tarkov",
      content: {
        __html: `In Escape of Tarkov (EFT) there are different pay tiers that
        allow for extra space of private stash inventory.        
        <ul>
          <li><strong>Basic Edition:</strong> 10 x 28</li>
          <li><strong>Left Behind Edition:</strong> 10 x 38</li>
          <li><strong>Prepare for Escape:</strong> 10 x 48</li>
          <li><strong>The Unheard:</strong> 10 x 72</li>
        </ul>
        To evaluate the effect on PvP combat we will take the value ratio gained 
        in Pay-4-Time and apply it to possible ammo, weapons, and armor advantage 
        and possible time frame window that this advantage will exist`,
      },
    },
    {
      title: "Pay 2 Win: Portals - Diablo IV",
      content: {
        __html: `Diablo IV has different tiers of Battle Pass which offer
          a lot of cosmetics but also offers additional town portals. This 
          feature will allow you hold different teleports to different towns
          that if placed well will cut time on daily grinding routes.`,
      },
    },
  ];

  const pay4timeMetrics = [
    {
      title: "Pay 4: Inventory - Escape from Tarkov",
      content: {
        __html: `In Escape of Tarkov (EFT) there are different pay tiers that
        allow for extra rows of private stash inventory.        
        <ul>
          <li><strong>Basic Edition:</strong> 10 x 28</li>
          <li><strong>Left Behind Edition:</strong> 10 x 38</li>
          <li><strong>Prepare for Escape:</strong> 10 x 48</li>
          <li><strong>The Unheard:</strong> 10 x 72</li>
        </ul>
        To evaluate the value we will look at player skill level and
        different stages of the game especially with flea market
        access, average value per inventory block, and death vs success
        variance. After the analysis hopefully people will have enough
        information to see if the level of Pay-4-Time is tolerable or
        determine at which price point you are willing to come in as.`,
      },
    },
    {
      title: "Pay 4: Portals - Diablo IV",
      content: {
        __html: `Diablo IV has different tiers of Battle Pass which offer
          a lot of cosmetics but also offers additional town portals. This 
          feature will allow you hold different teleports to different towns
          that if placed well will cut time on daily grinding routes.`,
      },
    },
  ];

  return (
    <SectionContainerStyled>
      <SectionContentStyled>
        <div>
          TLDR; On this site the term Pay-2-Win is primarily focused on money
          being used to gain advantage against another player in a direct
          competition with each other and Pay-4-Time is a term used for money
          being used to advance in a game's progress. Pay-4-Time can carry over
          to Pay-2-Win but both effects will be recorded separately.
        </div>
        <section>
          <div className="flex justify-center my-8 text-2xl font-bold">
            <MetricTitle
              active={isPay2WinSelected}
              onClick={() => setIsPay2WinSelected(true)}
            >
              Pay-2-Win
            </MetricTitle>
            <MetricTitle
              active={!isPay2WinSelected}
              onClick={() => setIsPay2WinSelected(false)}
            >
              Pay-4-Time
            </MetricTitle>
          </div>
          <div className="flex flex-row justify-center metric-choose">
            <MetricTypeContainerStyled active={isPay2WinSelected}>
              {pay2winMetrics.map((metric) => (
                <MetricContainer>
                  <div>
                    <MetricTitleStyled>{metric.title}</MetricTitleStyled>
                  </div>
                  <MetricContentStyled
                    dangerouslySetInnerHTML={metric.content}
                  ></MetricContentStyled>
                </MetricContainer>
              ))}
            </MetricTypeContainerStyled>
            <MetricTypeContainerStyled active={!isPay2WinSelected}>
              {pay4timeMetrics.map((metric) => (
                <MetricContainer>
                  <div>
                    <MetricTitleStyled>{metric.title}</MetricTitleStyled>
                  </div>
                  <MetricContentStyled
                    dangerouslySetInnerHTML={metric.content}
                  ></MetricContentStyled>
                </MetricContainer>
              ))}
            </MetricTypeContainerStyled>
          </div>
        </section>
      </SectionContentStyled>
    </SectionContainerStyled>
  );
}
