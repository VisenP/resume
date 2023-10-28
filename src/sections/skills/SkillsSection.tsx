import { FC } from "react";
import { IconType } from "react-icons";
import { FaJava, FaPython } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { FiCode, FiDatabase, FiGitBranch, FiTool } from "react-icons/fi";
import {
    SiDocker,
    SiGradle,
    SiMongodb,
    SiMysql,
    SiScylladb,
    SiTypescript,
    SiYarn,
} from "react-icons/si";

import { SectionBox } from "../../elements/SectionBox.tsx";
import { SkillBox } from "./SkillBox.tsx";

type Skill = {
    name: string;
    icon: IconType;
};

export type SkillSection = {
    title: string;
    icon?: IconType;
    skills: Skill[];
};

const skillSections: SkillSection[] = [
    {
        title: "Languages",
        icon: FiCode,
        skills: [
            {
                name: "Typescript",
                icon: SiTypescript,
            },
            {
                name: "Java",
                icon: FaJava,
            },
            {
                name: "Python",
                icon: FaPython,
            },
            {
                name: "GO",
                icon: FaGolang,
            },
        ],
    },
    {
        title: "Tools",
        icon: FiTool,
        skills: [
            {
                name: "Git",
                icon: FiGitBranch,
            },
            {
                name: "Yarn",
                icon: SiYarn,
            },
            {
                name: "Gradle",
                icon: SiGradle,
            },
            {
                name: "Docker",
                icon: SiDocker,
            },
        ],
    },
    {
        title: "Databases",
        icon: FiDatabase,
        skills: [
            {
                name: "MySQL",
                icon: SiMysql,
            },
            {
                name: "Scylla",
                icon: SiScylladb,
            },
            {
                name: "Mongo",
                icon: SiMongodb,
            },
        ],
    },
];

export const SkillsSection: FC = () => {
    return (
        <SectionBox>
            <div className={"text-3xl font-bold w-fit"}>Skills</div>
            <div
                className={
                    "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-2"
                }
            >
                {skillSections.map((section) => (
                    <SkillBox section={section} key={section.title} />
                ))}
            </div>
        </SectionBox>
    );
};
