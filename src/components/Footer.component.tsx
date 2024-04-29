import tw from "tailwind-styled-components";
import { SectionContentStyled } from "./share.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons/faDiscord";
import { Button } from "@viewtech-labs/pay2win-library";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  ROUTE_GAMES,
  ROUTE_METRIC,
  ROUTE_PURPOSE,
  ROUTE_ROADMAP,
} from "../utilities/route.constants";

const CopyInfoStyled = tw.ul`flex flex-row [&>li]:border-r-2 [&>li]:px-8 [&>li:first-child]:pl-0 [&>li:last-child]:border-r-0`;
const NavParentLiStyled = tw.li`font-bold text-lg`;

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-primary-900 text-white">
      <div className="flex border-b-[1px]  border-opacity-30 border-primary-400">
        <div className="flex flex-col flex-1 border-r-[1px] border-opacity-30 border-primary-400 ">
          <div className="flex border-b-[1px] border-opacity-30 border-primary-400 py-8 justify-end">
            <div className="flex basis-[calc(1440px/2)] pr-8 justify-center text-center">
              <div className="flex-1 text-2xl flex items-center justify-center">
                <a href="/">Pay2Win.gg</a>
                <span className="inline-block bg-loot-chest-empty h-6 w-6 bg-contain ml-4 bg-no-repeat bg-center align-middle"></span>
              </div>
              <div className="flex-1 text-left">{t("footer.mission")}</div>
            </div>
          </div>
          <div className="flex flex-row justify-end">
            <div className="flex py-8 basis-[calc(1440px/2)] capitalize">
              <div className="flex-1">
                <ul>
                  <NavParentLiStyled>
                    <Link to={ROUTE_PURPOSE}> {t("title.purpose")}</Link>
                  </NavParentLiStyled>
                </ul>
              </div>
              <div className="flex-1">
                <ul>
                  <NavParentLiStyled>
                    <Link to={ROUTE_GAMES}>{t("title.games")}</Link>
                  </NavParentLiStyled>
                </ul>
              </div>
              <div className="flex-1">
                <ul>
                  <NavParentLiStyled>
                    <Link to={ROUTE_METRIC}>{t("title.metrics")}</Link>
                  </NavParentLiStyled>
                </ul>
              </div>
              <div className="flex-1">
                <ul>
                  <NavParentLiStyled>
                    <Link to={ROUTE_ROADMAP}>{t("title.roadmap")}</Link>
                  </NavParentLiStyled>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-1 align-middle items-center">
          <div className="inline-block text-2xl basis-[calc(1440px/2)] text-center">
            <Button variation="secondary">
              <FontAwesomeIcon icon={faDiscord} /> {t("footer.discord")}
            </Button>
          </div>
        </div>
      </div>
      <SectionContentStyled className="py-8">
        <div className="flex pb-4">
          <CopyInfoStyled>
            <li>&copy; Viewtech Labs 2024</li>
            <li>
              <a href="mailto:support@viewtechlabs.com">
                {t("footer.legal.support")}
              </a>
            </li>
            <li>
              <a href="/legal/privacy-policy">{t("footer.legal.privacy")}</a>
            </li>
            <li>
              <a href="/legal/terms">{t("footer.legal.terms")}</a>
            </li>
          </CopyInfoStyled>
        </div>
      </SectionContentStyled>
    </footer>
  );
}
