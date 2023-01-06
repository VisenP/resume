import React, {ReactNode} from "react";
import styled from "styled-components";
import {boolean} from "zod";


type Props = {
    children?: ReactNode
    border: boolean,
};

const Container = styled.div<{ border: boolean }>`
    ${({border}) => border ? "border-[2px] border-grey-500 border-dashed" : ""}
`

export const ContentSection: React.FC<Props> = ({children, border}) => {
    return (
        <Container border={border} tw={"flex flex-col justify-around"}>
            {children}
        </Container>
    );
}