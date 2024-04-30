import tw from "tailwind-styled-components";
import { Link, useLocation } from "react-router-dom";
import { useCallback } from "react";

import {
  ROUTE_BASE,
  ROUTE_GAMES,
  ROUTE_METRIC,
  ROUTE_PURPOSE,
  ROUTE_ROADMAP,
} from "../utilities/route.constants";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./LanguageSelector.component";

interface RouteProps {
  active: boolean;
}

const LogoBlockStyled = tw.span`flex bg-secondary-500 h-20 w-20 items-center justify-center `;
const RouteItem = tw.li<RouteProps>`inline-block pb-2 ${(props) =>
  props.active ? "border-gold route-active border-b-2" : ""}`;

export default function Header() {
  const { t } = useTranslation();
  const location = useLocation();

  const routeMatch = useCallback(
    (match: RegExp): boolean => {
      return match.test(location.pathname);
    },
    [location]
  );

  return (
    <header className="h-20 flex">
      <LogoBlockStyled>
        <div className="bg-loot-logo bg-contain bg-no-repeat h-14 w-14 bg-center"></div>
      </LogoBlockStyled>
      <div className="flex-1 flex justify-center items-center">
        <span className="inline-block font-bold px-6 pb-2">
          <Link to={ROUTE_BASE}>PAY 2 WIN</Link>
        </span>
        <ul className="inline-block [&>li]:px-2 capitalize">
          <RouteItem active={routeMatch(/^\/$/)}>
            <Link to={ROUTE_PURPOSE}> {t("title.purpose")}</Link>
          </RouteItem>
          <RouteItem active={routeMatch(/\/game/g)}>
            <Link to={ROUTE_GAMES}>{t("title.games")}</Link>
          </RouteItem>
          <RouteItem active={routeMatch(/\/metrics/g)}>
            <Link to={ROUTE_METRIC}>{t("title.metrics")}</Link>
          </RouteItem>
          <RouteItem active={routeMatch(/\/roadmap/g)}>
            <Link to={ROUTE_ROADMAP}>{t("title.roadmap")}</Link>
          </RouteItem>
        </ul>
      </div>
      <LanguageSelector />
    </header>
  );
}
