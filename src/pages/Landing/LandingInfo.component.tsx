import tw from "tailwind-styled-components";

const DetailContentStyled = tw.div`flex-1 bg-primary-500 py-2 px-4  rounded-lg`;
const DetailContainerStyled = tw.div`flex mb-2`;
const DetailIconStyled = tw.span`inline-block bg-loot-box bg-contain h-6 w-6 mr-2`;
const DetailTitleStyled = tw.span`font-bold`;
export const LandingInfo = () => {
  return (
    <>
      <div className="flex relative pb-10">
        <div className="flex-1 flex items-center">
          <div>
            <div className="text-2xl font-bold mb-2">
              This is about measuring{" "}
              <span className="text-gold">Pay-2-Win</span>
            </div>
            <div className="pr-32">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
              aperiam repudiandae asperiores enim qui, in corrupti veritatis
              possimus officia voluptate nostrum dolorum illo assumenda earum
              nisi ex ipsa aspernatur exercitationem.
            </div>
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
            <DetailTitleStyled>Reporting</DetailTitleStyled>
          </DetailContainerStyled>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
            aperiam repudiandae asperiores enim qui, in corrupti veritatis
            possimus officia voluptate nostrum dolorum illo assumenda earum nisi
            ex ipsa aspernatur exercitationem.
          </div>
        </DetailContentStyled>
        <DetailContentStyled>
          <DetailContainerStyled>
            <DetailIconStyled className="bg-loot-box"></DetailIconStyled>
            <DetailTitleStyled>Reporting</DetailTitleStyled>
          </DetailContainerStyled>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
            aperiam repudiandae asperiores enim qui, in corrupti veritatis
            possimus officia voluptate nostrum dolorum illo assumenda earum nisi
            ex ipsa aspernatur exercitationem.
          </div>
        </DetailContentStyled>
      </div>
      <div className="grid justify-between grid-cols-3 gap-4">
        <DetailContentStyled>
          <DetailContainerStyled>
            <DetailIconStyled className="bg-loot-box"></DetailIconStyled>
            <DetailTitleStyled>Reporting</DetailTitleStyled>
          </DetailContainerStyled>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
            aperiam repudiandae asperiores enim qui, in corrupti veritatis
            possimus officia voluptate nostrum dolorum illo assumenda earum nisi
            ex ipsa aspernatur exercitationem.
          </div>
        </DetailContentStyled>
        <DetailContentStyled>
          <DetailContainerStyled>
            <DetailIconStyled className="bg-loot-box"></DetailIconStyled>
            <DetailTitleStyled>Reporting</DetailTitleStyled>
          </DetailContainerStyled>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
            aperiam repudiandae asperiores enim qui, in corrupti veritatis
            possimus officia voluptate nostrum dolorum illo assumenda earum nisi
            ex ipsa aspernatur exercitationem.
          </div>
        </DetailContentStyled>
        <DetailContentStyled className="border-2 border-gold relative">
          <div className=" text-4xl py-4">
            <span className="text-gold">P</span>ay 2 Win on a
            <br />
            <span className="text-gold">B</span>alance scale
            <br />
            <span className="text-gold">W</span>ith Purpose
          </div>
          <div className="absolute right-8 bottom-4 h-[80px] w-[80px] bg-loot-box-white bg-contain bg-no-repeat" />
        </DetailContentStyled>
      </div>
    </>
  );
};