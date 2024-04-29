import { useTranslation } from "react-i18next";
import tw from "tailwind-styled-components";

const DetailContentStyled = tw.div`flex-1 bg-primary-500 py-2 px-4  rounded-lg`;
const DetailContainerStyled = tw.div`flex mb-2`;
const DetailIconStyled = tw.span`inline-block bg-loot-box bg-contain h-6 w-6 mr-2`;
const DetailTitleStyled = tw.span`font-bold text-secondary-500 uppercase`;
export const LandingInfo = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="flex relative pb-10">
        <div className="flex-1 flex items-center">
          <div>
            <div className="text-2xl font-bold mb-2">
              {t("home.purpose.title.part1")}&nbsp;
              <span className="text-secondary-500">
                {t("home.purpose.title.part2")}
              </span>
            </div>
            <div className="pr-32">{t("home.purpose.subTitle")}</div>
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
          <DetailContainerStyled>
            <DetailIconStyled className="bg-loot-box"></DetailIconStyled>
            <DetailTitleStyled>
              {t("home.purpose.reason1.title")}
            </DetailTitleStyled>
          </DetailContainerStyled>
          <div>{t("home.purpose.reason1.content")}</div>
        </DetailContentStyled>
        <DetailContentStyled>
          <DetailContainerStyled>
            <DetailIconStyled className="bg-loot-box"></DetailIconStyled>
            <DetailTitleStyled>
              {t("home.purpose.reason2.title")}
            </DetailTitleStyled>
          </DetailContainerStyled>
          <div>{t("home.purpose.reason2.content")}</div>
        </DetailContentStyled>
      </div>
      <div className="grid justify-between grid-cols-3 gap-4">
        <DetailContentStyled>
          <DetailContainerStyled>
            <DetailIconStyled className="bg-loot-box"></DetailIconStyled>
            <DetailTitleStyled>
              {t("home.purpose.reason3.title")}
            </DetailTitleStyled>
          </DetailContainerStyled>
          <div>{t("home.purpose.reason3.content")}</div>
        </DetailContentStyled>
        <DetailContentStyled>
          <DetailContainerStyled>
            <DetailIconStyled className="bg-loot-box"></DetailIconStyled>
            <DetailTitleStyled>
              {t("home.purpose.reason4.title")}
            </DetailTitleStyled>
          </DetailContainerStyled>
          <div>{t("home.purpose.reason4.content")}</div>
        </DetailContentStyled>
        <DetailContentStyled className="border-2 border-gold relative">
          <div className=" text-4xl py-4">
            <span className="text-secondary-500">
              {t("home.purpose.content.line1")[0]}
            </span>
            {t("home.purpose.content.line1").substring(
              1,
              t("home.purpose.content.line1").length
            )}
            <br />
            <span className="text-secondary-500">
              {t("home.purpose.content.line2")[0]}
            </span>
            {t("home.purpose.content.line2").substring(
              1,
              t("home.purpose.content.line2").length
            )}
            <br />
            <span className="text-secondary-500">
              {t("home.purpose.content.line3")[0]}
            </span>
            {t("home.purpose.content.line3").substring(
              1,
              t("home.purpose.content.line3").length
            )}
          </div>
          <div className="absolute right-8 bottom-4 h-[80px] w-[80px] bg-loot-box-white bg-contain bg-no-repeat" />
        </DetailContentStyled>
      </div>
    </>
  );
};
