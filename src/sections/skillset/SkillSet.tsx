import {SectionTitle} from "../../elements/SectionTitle";
import {LineDivider} from "../../elements/LineDivider";
import {Fire} from "../../icons/Fire";
import {TitledSection} from "../../elements/TitiledSection";


export const SkillSet = () => {
    return (
        <div>
            <div tw={"w-full flex flex-col justify-start gap-y-[30px] h-[300px]"}>
                <SectionTitle><Fire/> SkillSet</SectionTitle>
                <div tw={"w-full flex justify-around"}>
                    <TitledSection title={"Languages"} border tw={"text-neutral-300"}>
                        <div>Typescript</div>
                        <div>Javascript</div>
                        <div>Python</div>
                        <div>Java</div>
                    </TitledSection>
                    <TitledSection title={"Tools"} border>
                        <div>Git</div>
                        <div>Docker</div>
                        <div>Yarn</div>
                        <div>Gradle</div>
                        <div>Bash</div>
                    </TitledSection>
                    <TitledSection title={"Databases"} border>
                        <div>MySQL</div>
                        <div>Scylla</div>
                        <div>Cassandra</div>
                        <div>MongoDB</div>
                    </TitledSection>
                </div>
            </div>
            <LineDivider tw={"mt-20 mb-10"}/>
        </div>
    );
}