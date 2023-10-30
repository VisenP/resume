import "./App.css";

import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

import { AboutMeSection } from "./sections/aboutme/AboutMeSection.tsx";
import { ContactSection } from "./sections/contact/ContactSection.tsx";
import { HeaderSection } from "./sections/introduction/IntroductionSection.tsx";
import { ProjectsSections } from "./sections/projects/ProjectsSection.tsx";
import { SkillsSection } from "./sections/skills/SkillsSection.tsx";

function App() {
    const [theme, setTheme] = useState(localStorage.theme ?? "light");

    useEffect(() => {
        document.body.style.backgroundColor =
            theme === "dark" ? "#171717" : "#e5e5e5";
        localStorage.theme = theme;
    }, [theme]);

    return (
        <div className={theme}>
            <div
                className={
                    "flex p-10 flex-col self-center gap-10 bg-gradient-to-b from-neutral-100 via-blue-50 to-neutral-200 dark:bg-neutral-800 dark:from-neutral-800 dark:to-neutral-900 text-amber-600 rounded-xl w-full h-full max-w-[1200px]"
                }
            >
                <div
                    className={
                        "lg:absolute lg:self-start self-center flex gap-2 text-3xl p-1 hover:cursor-pointer hover:text-amber-700 transition-all ease-linear"
                    }
                >
                    <div
                        className={
                            theme === "dark"
                                ? "text-neutral-700 "
                                : "text-yellow-600"
                        }
                        onClick={() => setTheme("light")}
                    >
                        <FiSun />
                    </div>
                    <div
                        className={"text-slate-300"}
                        onClick={() => setTheme("dark")}
                    >
                        <FiMoon />
                    </div>
                </div>

                <HeaderSection />
                <AboutMeSection />
                <ProjectsSections />
                <SkillsSection />
                <ContactSection />
            </div>
        </div>
    );
}

export default App;
