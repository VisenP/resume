import {Header} from "./sections/header/Header";
import {AboutMe} from "./sections/aboutme/AboutMe";
import {Education} from "./sections/education/Education";
import {Projects} from "./sections/projects/Projects";
import {SkillSet} from "./sections/skillset/SkillSet";
import {Contact} from "./sections/contact/Contact";

const App = () => {

    return (
        <div tw={"flex justify-center mt-[200px]"}>
            <div tw={"flex-col w-[800px] p-[1rem]"}>
                <Header/>
                <div tw={"flex flex-col justify-between w-full p-[0.5rem]"}>
                    <AboutMe/>
                    <Education/>
                    <SkillSet/>
                    <Projects/>
                    <Contact/>
                </div>
            </div>
        </div>
    );

};

export default App;
