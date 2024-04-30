import { RevealingText } from "@viewtech-labs/revealing-text";
import {
  SectionContainerStyled,
  SectionContentStyled,
} from "../../components/share.styled";
import { LandingInfo } from "./LandingInfo.component";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { ROUTE_METRIC } from "../../utilities/route.constants";

export default function LandingPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <>
      <SectionContainerStyled className="flex flex-1 pb-14">
        <SectionContentStyled className="flex flex-row">
          <div className="flex-1 pt-[200px]">
            <div>
              <span className="text-4xl font-bold">Pay 2 Win.</span>
            </div>
            <div>
              <span className="text-4xl font-bold">Pay 4 Time</span>
            </div>
            <div>
              <span className="text-4xl font-bold text-gray-800">
                Pay ? Worth
              </span>
            </div>
            <div className="flex text-sm px-12 justify-between pt-12 mb-8">
              <div className="w-[48%]">{t("home.main.left")}</div>
              <div className="w-[48%]">{t("home.main.right")}</div>
            </div>
            <div className="mb-8">
              <button
                onClick={() => {
                  navigate(ROUTE_METRIC);
                }}
              >
                {t("home.main.button")}
              </button>
            </div>
            <div className="px-12">{t("home.main.bottom")}</div>
          </div>
          <div className="relative flex-1 flex pt-[200px]">
            <div className="opacity-30 w-[410px] h-[400px] p-8 z-20"></div>
            <div className="bg-white   w-[300px] h-[600px] mt-[-100px] ml-[-100px] flex flex-col z-10">
              <span className="block bg-black bg-loot-chest-vector bg-contain bg-center bg-no-repeat flex-1" />
            </div>
          </div>
        </SectionContentStyled>
      </SectionContainerStyled>
      <SectionContainerStyled className="pb-24">
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
              text={t("home.revealingText")}
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
              <div className="text-2xl">{t("home.exit")}</div>
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
