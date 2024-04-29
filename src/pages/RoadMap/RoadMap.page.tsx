import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  SectionContainerStyled,
  SectionContentStyled,
} from "../../components/share.styled";
import { faCheckCircle } from "@fortawesome/pro-duotone-svg-icons";
import { getStatusText } from "../../utilities/task.utility";
import tw from "tailwind-styled-components";
import { get, keys, reduce } from "lodash";
import { getQuarter, getYear, parseISO } from "date-fns";

const StatusBulbStyled = tw.span`absolute left-8 inline-block ${(
  props: React.HTMLAttributes<HTMLSpanElement> & { status: number }
) => {
  switch (props.status) {
    case 20:
      return "bg-[rgb(236,236,94)] rounded-xl h-2 w-2 shadow-[rgb(236,236,94)]";
    case 30:
    default:
      return "bg-[rgb(73,168,73)] rounded-xl h-2 w-2 shadow-[rgb(73,168,73)]";
  }
}} shadow-[0px_0px_5px_2px_white] flex-1 mr-4
`;
export const RoadMapPage = () => {
  const timeline = [
    {
      name: "Phase 1",
      type: 1,
    },
    {
      name: "Add Metrics",
      type: 2,
      description:
        "Looking to add first metric to determine if a game is Pay-2-win or Pay-4-time ",
    },
    {
      name: "Add First Game",
      type: 2,
      description: "Looking to add first game ",
    },
    {
      name: "Phase 2",
      type: 3,
    },
    {
      name: "Add Handful of Games",
      type: 2,
      description:
        "With Metrics establish the next focus will be adding multiple games to add context",
    },
    {
      name: "Phase 5",
      type: 3,
    },
  ];
  interface Task {
    id: number;
    status: number;
    slate: string;
    title: string;
    description: string;
  }

  interface QuarteredTask {
    [key: string]: Task[];
  }

  const tasks = [
    {
      id: 1,
      status: 30,
      slate: "2024-04-01",
      title: "Add Pay-2-Win Metric",
      description: "Establish Parameters for determining weight for Pay-2-Win",
    },
    {
      id: 1,
      status: 30,
      slate: "2024-04-01",
      title: "Establish Parameters for determining weight for Pay-4-Time",
      description: "",
    },
    {
      id: 1,
      status: 30,
      slate: "2024-04-01",
      title: "Add Frontpage Verbiage",
      description: "Outline the mission of this website",
    },
    {
      id: 1,
      status: 20,
      slate: "2024-04-01",
      title: "Add Escape of Tarkov",
      description: "Add a game that dips into Pay-2-Win and Pay-4-Time lightly",
    },
    {
      id: 1,
      status: 10,
      slate: "2024-07-01",
      title: "Add Diablo IV",
      description: "Dive deeper into Pay-2-Win and Pay-4-Time division",
    },
    {
      id: 1,
      status: 10,
      slate: "2024-08-01",
      title: "Add League of Legends",
      description: "Add game that doesn't necessarily react into either metric",
    },
    {
      id: 1,
      status: 10,
      slate: "2024-09-01",
      title: "Add Stars Wars Battlefront 2",
      description:
        "Add a game that abused loot boxes and where that would land into new metrics",
    },
    {
      id: 1,
      status: 10,
      slate: "2025-10-01",
      title: "Add Lost Ark",
      description:
        "Introduce game that heavily embraces both divisions for the sake of free to play",
    },
    {
      id: 1,
      status: 10,
      slate: "2025-11-01",
      title: "Add FIFA 2024",
      description:
        "Introduce game that cold heartedly delves into unethical practices",
    },
  ] as Task[];

  const quarteredTasks: QuarteredTask = reduce(
    tasks,
    (mem: QuarteredTask, cur: Task) => {
      const quarter = getQuarter(parseISO(cur.slate));
      const year = getYear(parseISO(cur.slate));
      const currentQuarter = get(mem, `Q${quarter} ${year}`, []);

      mem[`Q${quarter} ${year}`] = [...currentQuarter, cur];

      return mem;
    },
    {} as QuarteredTask
  );

  return (
    <SectionContainerStyled className="flex flex-1">
      <SectionContentStyled className="flex flex-1 flex-row">
        <section className="flex-1 basis-3/4 pr-8">
          {quarteredTasks
            ? keys(quarteredTasks).map((quarteredTask) => {
                return (
                  <div className="mb-8">
                    <div className="mb-4 bg-primary-800 inline-block px-4 py-2 text-xs rounded-xl">
                      {quarteredTask}
                    </div>
                    <div>
                      {quarteredTasks[quarteredTask]
                        ? quarteredTasks[quarteredTask].map((task) => {
                            return (
                              <div className="flex bg-primary-600 bg mb-2 rounded-md overflow-hidden">
                                <div className="bg-primary-800 flex items-center flex-col justify-center flex-grow-0 flex-shrink-0 basis-[180px] relative pl-8">
                                  {task.status > 10 ? (
                                    <StatusBulbStyled
                                      status={task.status}
                                    ></StatusBulbStyled>
                                  ) : null}
                                  {getStatusText(task.status)}
                                </div>
                                <div className="flex-1 p-4 bg-[primary-200]">
                                  <div className="uppercase">{task.title}</div>
                                  <div className="text-xs">
                                    {task.description}
                                  </div>
                                </div>
                              </div>
                            );
                          })
                        : null}
                    </div>
                  </div>
                );
              })
            : null}
        </section>
        <section className="flex flex-1  min-h-svh basis-1/4">
          <div className="border-l-2 [border-image:radial-gradient(circle,rgb(102,22,131)_10%,_rgb(250,175,64)_100%)_30] flex-1">
            {timeline.map((period) => {
              switch (period.type) {
                case 1:
                  return (
                    <div className="relative py-4 mb-8">
                      <div className="text-center ">
                        <div className="text-xl font-bold">{period.name}</div>
                        <div className="text-xs">Feb 2024 - May 2024</div>
                      </div>
                      <span className="absolute z-20 bottom-[-6px] -left-2 h-4 w-4 align-middle bg-[rgba(250,175,64,.8)] rounded-2xl  shadow-[rgba(250,175,64,.8)] shadow-[0px_0px_20px_white] ">
                        <FontAwesomeIcon
                          className="absolute top-0 left-0 z-10 [--fa-primary-color:#154360] [--fa-secondary-color:rgba(250,175,64,.8)]"
                          icon={faCheckCircle}
                        />
                      </span>
                      <span className="absolute bg-[rgba(250,175,64,.8)] h-[2px] w-[50%] bottom-0 left-0 z-0">
                        <span className="absolute bg-[rgba(250,175,64,.8)] h-2 w-2 right-0 -bottom-[3px] rounded-lg"></span>
                      </span>
                    </div>
                  );
                case 2:
                  return (
                    <div className="relative py-4 justify-self-auto">
                      <div className="text-center [border-image:linear-gradient(to_right,rgb(253,221,174),_rgb(250,175,64))_30] border-2 w-[70%] mx-auto p-4">
                        <div className="text-sm font-semibold border-b-[1px] border-[rgba(250,175,64,.8)] pb-2 uppercase">
                          {period.name}
                        </div>
                        <div className="text-xs p-2">{period.description}</div>
                      </div>
                    </div>
                  );
                default:
                  return (
                    <div className="relative py-4 mb-8">
                      <div className="text-center ">
                        <div className="text-l font-semibold text-[rgba(250,175,64,.8)]">
                          {period.name}
                        </div>
                        <div className="text-xs">Feb 2024 - May 2024</div>
                      </div>
                      <span className="absolute z-20 bottom-[-6px] -left-2 h-4 w-4 align-middle bg-[rgba(250,175,64,.8)] rounded-2xl  shadow-[rgba(250,175,64,.8)] shadow-[0px_0px_20px_white] ">
                        <FontAwesomeIcon
                          className="absolute top-0 left-0 z-10 [--fa-primary-color:#154360]"
                          icon={faCheckCircle}
                        />
                      </span>
                      <span className="absolute bg-[rgba(250,175,64,.8)] h-[2px] w-[50%] bottom-0 left-0 z-0">
                        <span className="absolute bg-[rgba(250,175,64,.8)] h-2 w-2 right-0 -bottom-[3px] rounded-lg"></span>
                      </span>
                    </div>
                  );
              }
            })}
          </div>
        </section>
      </SectionContentStyled>
    </SectionContainerStyled>
  );
};
