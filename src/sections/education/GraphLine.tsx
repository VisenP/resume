import React from "react";
import styled from "styled-components";
import tw from "twin.macro";


type Props = {
    complete: boolean
}

const Line = styled.div<{ $color: string }>`
  ${tw`flex-grow h-[10px] ml-[-10px] mr-[-10px]`};
  background-color: ${({$color}) => $color};
  z-index: 0;
`

export const GraphLine: React.FC<Props> = ({complete}) => {

    return (
        <Line $color={complete ? "#1AB700" : "#E8E8E8"}/>
    );
}