import {SectionTitle} from "../../elements/SectionTitle";
import {Crown} from "../../icons/Crown";
import {Calendar, Compass} from "react-feather";


export const AboutMe = () => {
    return (
        <div tw={"w-full flex flex-col justify-start gap-y-[30px] h-[300px]"}>
            <div><SectionTitle><Crown/> About me</SectionTitle></div>
            <div tw={"flex justify-around h-full"}>
                <div tw={"flex flex-col justify-around"}>
                    <div tw={"flex items-center text-xl gap-x-[15px]"}>
                        <Compass size={"24px"} color={"white"}/> Zagreb, Croatia
                    </div>
                    <div tw={"flex items-center text-xl gap-x-[15px]"}>
                        <Calendar size={"24px"} color={"white"}/> April 9th 2005
                    </div>
                </div>
            </div>
        </div>
    );
}