import { FC } from "react";

import { EducationPoint } from "./EducationSection.tsx";

type Properties = {
    educationPoint: EducationPoint;
};

export const EducationPointBox: FC<Properties> = ({ educationPoint }) => {
    const duration =
        educationPoint.endDate.getTime() - educationPoint.startDate.getTime();

    const past = Date.now() - educationPoint.startDate.getTime();

    const complete = Math.min(1, past / duration);

    const percentage = complete * 100;

    console.log(complete, percentage);
    const inverse = 100 - percentage;

    return (
        <div
            className={
                "w-full flex flex-col gap-5 justify-start bg-slate-50 shadow hover:bg-gradient-to-r from-slate-50 to-amber-50 dark:bg-neutral-900 dark:from-neutral-900 dark:to-amber-950 transition-all ease-linear hover:-translate-y-1 hover:shadow-lg rounded p-3"
            }
        >
            <div
                className={"flex flex-col gap-2 md:grid md:grid-cols-4 w-full"}
            >
                <div className={"font-bold md:place-self-start"}>
                    {educationPoint.type}
                </div>
                <div
                    className={
                        "font-bold col-span-2 md:place-self-center text-lg"
                    }
                >
                    {educationPoint.institution}
                </div>
                <div className={"custom-place-self"}>
                    {educationPoint.location}
                </div>
            </div>
            <div className={"flex items-center px-2 -ml-1"}>
                <div
                    className={"bg-green-700 rounded-full w-3 h-3 -mr-2 z-30"}
                />
                <div
                    className={
                        "bg-blue-200 dark:bg-sky-900 rounded-full h-2 z-20"
                    }
                    style={{ width: percentage + "%" }}
                />
                <div
                    className={
                        "bg-red-300 dark:bg-red-950 -ml-2 -mr-1 rounded-full h-2"
                    }
                    style={{ width: inverse + "%" }}
                />
                {complete === 1 ? (
                    <div
                        className={
                            "bg-green-700 rounded-full w-3 h-3 -mr-2 z-30"
                        }
                    />
                ) : (
                    <div
                        className={
                            "bg-red-500 dark:bg-red-800 rounded-full w-3 h-3 -mr-2 z-30"
                        }
                    />
                )}
            </div>
            <div className={"flex w-full justify-between"}>
                <div>{educationPoint.startDate.getFullYear()}</div>
                <div>{educationPoint.endDate.getFullYear()}</div>
            </div>
        </div>
    );
};
