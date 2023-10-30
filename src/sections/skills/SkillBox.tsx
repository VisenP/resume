import { FC, useState } from "react";

import { SkillSection } from "./SkillsSection.tsx";

type Properties = {
    section: SkillSection;
};

export const SkillBox: FC<Properties> = ({ section }) => {
    const SkillIcon = section.icon;

    const [d, setD] = useState(false);

    return (
        <div
            className={
                "w-full flex flex-col items-center shadow transition-all hover:shadow-xl hover:-translate-y-1 bg-slate-50 hover:bg-gradient-to-br from-slate-50 to-amber-50 dark:bg-neutral-900 dark:from-neutral-900 dark:to-amber-950 hover:transition-all ease-linear rounded-2xl gap-7 p-2 px-4"
            }
        >
            {SkillIcon && (
                <div
                    className={"absolute self-start m-1 text-xl"}
                    onClick={() => setD(!d)}
                >
                    <SkillIcon />
                </div>
            )}
            <div className={"font-bold text-lg text-amber-700"}>
                {section.title}
            </div>
            <div className={"flex flex-col w-fit gap-2 items-start"}>
                {section.skills.map((skill) => {
                    const Icon = skill.icon;

                    return (
                        <div
                            key={skill.name}
                            className={
                                "flex flex-row transform lg:translate-x-[-15px] gap-3 items-center cursor-default hover:translate-y-[-2px] transition-all ease-linear rounded-xl p-1"
                            }
                        >
                            <div>
                                {d && (
                                    <img
                                        src={skill.image}
                                        className={
                                            "object-scale-down h-[32px] w-[32px] rounded"
                                        }
                                        alt={""}
                                    ></img>
                                )}
                                {!d && Icon && <Icon />}
                            </div>
                            <div
                                className={
                                    "font-bold dark:font-normal font-mono"
                                }
                            >
                                {skill.name}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
