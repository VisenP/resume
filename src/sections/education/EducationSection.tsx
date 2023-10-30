import { FC } from "react";

import { SectionBox } from "../../elements/SectionBox.tsx";
import { EducationPointBox } from "./EducationPointBox.tsx";

export type EducationPoint = {
    type: string;
    institution: string;
    location: string;
    degree?: string;
    image?: string;
    startDate: Date;
    endDate: Date;
};

const educationPoints: EducationPoint[] = [
    {
        type: "Higher",
        institution: "Faculty of Electrical Engineering and Computing",
        location: "Zagreb, Croatia",
        startDate: new Date("2023-10-1"),
        endDate: new Date("2026-7-1"),
    },
    {
        type: "Secondary",
        institution: "XIII. Gymnasium",
        location: "Zagreb, Croatia",
        startDate: new Date("2019-9-1"),
        endDate: new Date("2023-7-1"),
    },
    {
        type: "Primary",
        institution: "O.Š. Ljubo Babić",
        location: "Jastrebarsko, Croatia",
        startDate: new Date("2011-9-1"),
        endDate: new Date("2019-6-28"),
    },
];

export const EducationSection: FC = () => {
    return (
        <SectionBox>
            <div className={"text-3xl font-bold w-fit"}>Education</div>
            <div className={"flex flex-col gap-5"}>
                {educationPoints.map((educationPoint) => (
                    <EducationPointBox
                        educationPoint={educationPoint}
                        key={educationPoint.startDate.getTime().toString()}
                    />
                ))}
            </div>
        </SectionBox>
    );
};
