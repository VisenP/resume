import {SectionTitle} from "../../elements/SectionTitle";
import {LineDivider} from "../../elements/LineDivider";
import {Code} from "../../icons/Code";
import {TitledSection} from "../../elements/TitiledSection";
import styled from "styled-components";
import tw from "twin.macro";

const Dot = styled.div<{ $color: string }>`
  ${tw`w-[10px] h-[10px] rounded-full`};
  background-color: ${({$color}) => $color};
`

export const Projects = () => {
    return (
        <div>
            <div tw={"w-full flex flex-col justify-start gap-y-[30px]"}>
                <SectionTitle><Code/> Projects</SectionTitle>
                <div tw={"w-full flex justify-around gap-x-[5rem]"}>
                    <TitledSection title={"Resume"} border tw={"gap-y-[1rem]"}>
                        <div>Personal website written in React.</div>
                        <div>You are looking at it.</div>
                        <LineDivider/>
                        <div><a href={"https://visen.dev"}>https://visen.dev</a></div>
                        <LineDivider/>
                        <div tw={"flex justify-start items-center gap-x-[0.5rem]"}><Dot $color={"#009ae1"}/> React</div>
                        <LineDivider/>
                    </TitledSection>
                    <TitledSection title={"SmartLights"} border tw={"gap-y-[1rem]"}>
                        <div>An API for remotely controlling govee smart LED lights.</div>
                        <LineDivider/>
                        <div><a href={"https://github.com/VisenP/SmartLights"}>git/SmartLights</a></div>
                        <LineDivider/>
                        <div tw={"flex justify-start items-center gap-x-[0.5rem]"}><Dot $color={"#eaff00"}/> JavaScript</div>
                        <LineDivider/>
                    </TitledSection>
                    <TitledSection title={"Evaluator"} border tw={"gap-y-[1rem]"}>
                        <div>A compact platform for making programming contests.</div>
                        <LineDivider/>
                        <div><a href={"https://github.com/ItKlubBozoLagan/evaluator-backend"}>git/Evaluator</a></div>
                        <LineDivider/>
                        <div tw={"flex justify-start items-center gap-x-[0.5rem]"}><Dot $color={"#004d6c"}/> TypeScript</div>
                        <LineDivider/>
                    </TitledSection>
                </div>
            </div>
            <LineDivider tw={"mt-20 mb-10"}/>
        </div>
    );
}