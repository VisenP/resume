import { FC } from "react";
import { FiCode, FiGithub, FiGlobe, FiUser, FiUsers } from "react-icons/fi";

import { LinkDisplay } from "../../elements/LinkDisplay.tsx";
import { Project } from "./ProjectsSection.tsx";

type Properties = {
    project: Project;
};

export const ProjectDisplay: FC<Properties> = ({ project }) => {
    return (
        <div
            className={
                "w-full flex flex-col shadow transition-all hover:shadow-xl hover:-translate-y-1 bg-slate-50 hover:bg-gradient-to-br from-slate-50 to-amber-50 dark:bg-neutral-900 dark:from-neutral-900 dark:to-amber-950 hover:transition-all ease-linear rounded-2xl gap-5 p-2 px-4"
            }
        >
            <div
                className={
                    "font-bold text-amber-700 flex flex-row justify-between items-center gap-2 h-1/8"
                }
            >
                <div className={"w-full ml-3"}>{project.name}</div>
                <div>{project.team ? <FiUsers /> : <FiUser />}</div>
            </div>
            {project.description && (
                <div className={"h-1/4"}>{project.description}</div>
            )}
            {(project.git || project.lang || project.site) && (
                <div
                    className={
                        "flex flex-col gap-2 text-sky-700 items-start h-3/8"
                    }
                >
                    {project.git && (
                        <LinkDisplay
                            icon={FiGithub}
                            link={"https://github.com"}
                            display={project.git}
                        />
                    )}
                    {project.site && (
                        <LinkDisplay
                            link={project.site}
                            icon={FiGlobe}
                            display={project.name.toLowerCase()}
                        />
                    )}
                    {project.lang && (
                        <LinkDisplay
                            link={"a"}
                            display={project.lang}
                            icon={FiCode}
                        />
                    )}
                </div>
            )}
        </div>
    );
};
