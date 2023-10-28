import { FC } from "react";

import { SkillSection } from "./SkillsSection.tsx";

type Properties = {
    section: SkillSection;
};

export const SkillBox: FC<Properties> = ({ section }) => {
    const SkillIcon = section.icon;

    return (
        <div
            className={
                "w-full flex flex-col shadow transition-all hover:shadow-xl hover:-translate-y-1 bg-slate-50 dark:bg-neutral-900 hover:transition-all ease-linear rounded-2xl gap-5 p-2 px-4"
            }
        >
            {SkillIcon && (
                <div className={"absolute m-1"}>
                    <SkillIcon />
                </div>
            )}
            <div className={"font-bold text-amber-700"}>{section.title}</div>
            <div className={"flex flex-col gap-2 items-center lg:items-start"}>
                {section.skills.map((skill) => {
                    const Icon = skill.icon;

                    return (
                        <div
                            key={skill.name}
                            className={
                                "flex flex-row gap-3 items-center cursor-default hover:bg-amber-50 hover:dark:bg-amber-950 rounded-xl p-1"
                            }
                        >
                            <div>
                                <Icon />
                            </div>
                            <div>{skill.name}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
