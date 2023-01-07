import styled from "styled-components";
import tw from "twin.macro";
import React, {useState} from "react";
import { HoverSection } from "../../elements/HoverSection";
import {LineDivider} from "../../elements/LineDivider";
import {ProgressBar} from "../../elements/ProgressBar";

export const Point = styled.div<{ $color: string }>`
  ${tw`rounded-full`};
  width: 25px;
  height: 25px;
  background-color: ${({$color}) => $color};
  z-index: 100;
`

const pointColors = {
    completed: "#24FF00",
    active: "#0C5500",
    unknown: "#595959"
};

const pointLabels = {
    primary: "Primary Education",
    secondary: "Secondary Education",
    higher: "Higher Education"
}

type Props = {
    known: false,
    level: "primary" | "secondary" | "higher"
} | {
    known: true,
    name: string,
    location: string,
    level: "primary" | "secondary" | "higher",
    progress: number,
    totalTime: number,
    status: "completed" | "active"
};

export const GraphPoint: React.FC<Props> = (props) => {

    const [hoverVisible, setHoverVisible] = useState(false);

    return (
        <div tw={"z-10"}>
            <HoverSection visible={hoverVisible}>
                {props.known ? <div>
                    <div>{props.name}</div>
                    <div tw={"text-red-400"}>{props.location}</div>
                    <LineDivider tw={"mt-[2px] mb-[2px]"}/>
                    <div tw={"flex justify-around"}>
                        <div tw={"text-green-500"}>{props.status === "completed" ? "Completed" : (props.progress * 100) + "%"}</div>
                        <div>{props.totalTime} years!</div>
                    </div>
                    <ProgressBar percent={props.progress} tw={"mt-2 mb-2 w-full h-[5px]"}/>
                </div> : <div>To be decided!</div>}
            </HoverSection>
            <Point $color={props.known ? pointColors[props.status] : pointColors["unknown"]}
                   onMouseEnter={() => setHoverVisible(true)}
                   onMouseLeave={() => setHoverVisible(false)}
            />
        </div>
    )
}