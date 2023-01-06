import React, {ReactNode} from "react";
import styled from "styled-components";
import tw from "twin.macro";


type Props = {
    children?: ReactNode
    border: boolean,
};

const Container = styled.div<{ $border: boolean }>`
  ${({ $border }) => $border ? tw`border-dashed border-[2px] border-gray-600 rounded-md` : ``}
`

export const ContentSection: React.FC<Props> = ({children, border}) => {
    return (
        <Container $border={border} tw={"flex flex-col h-full justify-around p-[10px]"}>
            {children}
        </Container>
    );
}