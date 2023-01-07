import {Header} from "./sections/Header";
import {AboutMe} from "./sections/aboutme/AboutMe";
import {Education} from "./sections/education/Education";
import {Projects} from "./sections/Projects";
import {SkillSet} from "./sections/SkillSet";
import {Contact} from "./sections/Contact";

const App = () => {

    return (
        <div tw={"flex justify-center mt-[200px]"}>
            <div tw={"flex-col w-[800px]"}>
                <Header/>
                <div tw={"flex flex-col justify-between w-full p-[1rem]"}>
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
