import { FC } from "react";
import { IconType } from "react-icons";
import { FaJava, FaPython, FaTerminal } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { FiCode, FiDatabase, FiGitBranch, FiTool } from "react-icons/fi";
import {
    SiDocker,
    SiGradle,
    SiJavascript,
    SiMongodb,
    SiMysql,
    SiRedis,
    SiScylladb,
    SiTypescript,
    SiYarn,
} from "react-icons/si";

import BashLogo from "../../assets/bash.svg";
import DockerLogo from "../../assets/docker.webp";
import GitLogo from "../../assets/git.webp";
import GoLogo from "../../assets/golang.svg";
import GradleLogo from "../../assets/gradle.svg";
import JavaLogo from "../../assets/java.svg";
import JavascriptLogo from "../../assets/javascript.webp";
import MongoLogo from "../../assets/mongo.svg";
import MySQLLogo from "../../assets/mysql.webp";
import PythonLogo from "../../assets/python.webp";
import RedisLogo from "../../assets/redis.svg";
import ScyllaLogo from "../../assets/scylla.svg";
import TypescriptLogo from "../../assets/typescript.webp";
import YarnLogo from "../../assets/yarn.svg";
import { SectionBox } from "../../elements/SectionBox.tsx";
import { SkillBox } from "./SkillBox.tsx";

type Skill = {
    name: string;
    icon?: IconType;
    image?: string;
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
                name: "Javascript",
                icon: SiJavascript,
                image: JavascriptLogo,
            },
            {
                name: "Typescript",
                icon: SiTypescript,
                image: TypescriptLogo,
            },
            {
                name: "Java",
                icon: FaJava,
                image: JavaLogo,
            },
            {
                name: "Python",
                icon: FaPython,
                image: PythonLogo,
            },
            {
                name: "GO",
                icon: FaGolang,
                image: GoLogo,
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
                image: GitLogo,
            },
            {
                name: "Docker",
                icon: SiDocker,
                image: DockerLogo,
            },
            {
                name: "Bash",
                icon: FaTerminal,
                image: BashLogo,
            },
            {
                name: "Gradle",
                icon: SiGradle,
                image: GradleLogo,
            },
            {
                name: "Yarn",
                icon: SiYarn,
                image: YarnLogo,
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
                image: MySQLLogo,
            },
            {
                name: "Scylla",
                icon: SiScylladb,
                image: ScyllaLogo,
            },
            {
                name: "Redis",
                icon: SiRedis,
                image: RedisLogo,
            },
            {
                name: "Mongo",
                icon: SiMongodb,
                image: MongoLogo,
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
