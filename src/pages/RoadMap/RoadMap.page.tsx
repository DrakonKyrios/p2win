import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  SectionContainerStyled,
  SectionContentStyled,
} from "../../components/share.styled";
import { faCheckCircle } from "@fortawesome/pro-duotone-svg-icons";

export const RoadMapPage = () => {
  return (
    <SectionContainerStyled className="flex flex-1">
      <SectionContentStyled className="flex flex-1 flex-row">
        <section className="flex-1">as</section>
        <section className="flex flex-1 h-svh ">
          <div className="flex-1">asd</div>
          <div className="border-l-2 border-white flex-1">
            <div className="relative py-4">
              <div className="text-center ">
                <div className="text-xl font-bold">Phase 1</div>
                <div className="text-sm">Feb 2024 - May 2024</div>
              </div>
              <span className="absolute z-20 bottom-0 left-0 h-4 w-4 align-middle">
                <FontAwesomeIcon
                  className="bg-primary-500"
                  icon={faCheckCircle}
                />
              </span>
              <span className="absolute bg-white h-[2px] w-[50%] bottom-0 left-0 z-0"></span>
            </div>
          </div>
        </section>
      </SectionContentStyled>
    </SectionContainerStyled>
  );
};
