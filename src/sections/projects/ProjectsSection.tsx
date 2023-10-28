import { LinkDisplay } from "../../elements/LinkDisplay.tsx";
import { ProjectDisplay } from "./ProjectDisplay.tsx";

type ProjectLang = "Typescript" | "Go";

export type Project = {
    name: string;
    description?: string;
    lang?: ProjectLang;
    site?: string;
    git?: string;
    team: boolean;
};

const projectsSection: Project[] = [
    {
        name: "Kontestis",
        description: "A full feature competitive programming platform",
        lang: "Typescript",
        site: "https://kontestis.ac",
        git: "ItKlubBozoLagan/kontestis",
        team: true,
    },
    {
        name: "Resume",
        description: "My personal website",
        lang: "Typescript",
        site: "https://visen.dev",
        git: "VisenP/resume",
        team: false,
    },
    {
        name: "File sharing",
        description: "A file sharing service written in GO using Gin",
        git: "VisenP/cdn",
        lang: "Go",
        team: false,
    },
];

export const ProjectsSections = () => {
    return (
        <div
            className={
                "w-full flex flex-col justify-start rounded-xl bg-neutral-100 dark:bg-neutral-800 p-4 gap-5"
            }
        >
            <div className={"text-3xl font-bold w-fit"}>Projects</div>
            <div
                className={
                    "grid grid-cols-1 lg:grid-cols-3 text-zinc-800 dark:text-zinc-200 gap-2"
                }
            >
                {projectsSection.map((project) => (
                    <ProjectDisplay project={project} key={project.name} />
                ))}
            </div>
            <div className={"flex gap-1.5 justify-center"}>
                Check out more projects on my
                <LinkDisplay
                    link={"https://github.com/VisenP"}
                    display={"Github"}
                />
            </div>
        </div>
    );
};
