import {SectionTitle} from "../../elements/SectionTitle";
import {Crown} from "../../icons/Crown";
import {Calendar, Compass} from "react-feather";
import {ContentSection} from "../../elements/ContentSection";
import {TitledSection} from "../../elements/TitiledSection";
import {LineDivider} from "../../elements/LineDivider";


export const AboutMe = () => {
    return (
        <div>
            <div tw={"w-full flex flex-col justify-start gap-y-[30px] h-[300px]"}>
                <SectionTitle><Crown/> About me</SectionTitle>
                <div tw={"flex justify-between h-full"}>
                    <ContentSection border={false}>
                        <div tw={"flex items-center text-xl gap-x-[15px]"}>
                            <Compass size={"24px"} color={"white"}/> Zagreb, Croatia
                        </div>
                        <div tw={"flex items-center text-xl gap-x-[15px]"}>
                            <Calendar size={"24px"} color={"white"}/> April 9th 2005
                        </div>
                    </ContentSection>
                    <TitledSection title={"Languages"} border>
                        <div tw={"text-xl"}>English - Full Professional Proficiency</div>
                        <div tw={"text-xl"}>Croatian - Native Proficiency</div>
                    </TitledSection>
                </div>
            </div>
            <LineDivider tw={"mt-20 mb-10"}/>
        </div>
    );
}