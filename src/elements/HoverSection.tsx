import React, {ReactNode} from "react";
import styled from "styled-components";


const Section = styled.div<{ $visible: boolean }>`
  position: absolute;
  display: flex;
  padding: 0.5rem;
  max-width: 180px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: 2px solid white;
  padding: 0.5rem;
  border-radius: 8px;
  visibility: ${({ $visible}) => $visible ? `visible` : `hidden`};
  text-align: center;
  font-size: 0.8rem;
  z-index: 20;
  translate: -40% -110%;
  background-color: #27272a;
  opacity: 90%;
`

type Props = {
    visible: boolean,
    children?: ReactNode,
}

export const HoverSection: React.FC<Props> = ({visible, children, ...props}) => {
    return (
        <Section $visible={visible} {...props}>{children}</Section>
    )
}