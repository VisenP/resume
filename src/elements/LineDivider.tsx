import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

type Props = {
}

const Line = styled.div`
  ${tw`border-gray-500 border-solid border-[2px] w-full m-0 h-[1px] border-t-0 border-l-0 border-r-0`}
`

export const LineDivider: React.FC<Props> = ({...props}) => {
    return (<Line {...props}></Line>);
}