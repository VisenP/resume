import {SectionTitle} from "../../elements/SectionTitle";
import {Book} from "../../icons/Book";
import {GraphPoint} from "./GraphPoint";
import {GraphLine} from "./GraphLine";


export const Education = () => {
    return (
        <div tw={"w-full flex flex-col justify-start gap-y-[30px] h-[300px]"}>
            <SectionTitle><Book/> Education</SectionTitle>
            <div tw={"flex w-full h-full justify-start items-center"}>
                <GraphPoint
                    known={true}
                    level={"primary"}
                    name={"OS Ljubo Babic"}
                    location={"Jastrebarsko, Croatia"}
                    progress={1}
                    status={"completed"}
                    totalTime={8}
                    />
                <GraphLine complete/>
                <GraphPoint
                    known={true}
                    level={"secondary"}
                    name={"XIII. Gimnazija"}
                    location={"Zagreb, Croatia"}
                    progress={0.85}
                    status={"active"}
                    totalTime={4}
                />
                <GraphLine complete={false}/>
                <GraphPoint known={false} level={"higher"}/>
            </div>
        </div>
    );
};