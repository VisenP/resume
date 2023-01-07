import React from "react";
import styled from "styled-components";


type Props = {
    percent: number
};

const ProgressContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0;
`

const DisplayDiv = styled.div<{ $percent: number, $color: string }>`
  flex-basis: ${({$percent}) => $percent * 100}%;
  background-color: ${({$color}) => $color};
  margin-left: 0;
  margin-right: 0;
  height: available;
  width: available;
  border-radius: 6px;
`

export const ProgressBar: React.FC<Props> = ({percent, ...props}) => {
    return (
        <ProgressContainer {...props}>
            <DisplayDiv $percent={percent} $color={"#66ff52"}/>
            <DisplayDiv $percent={1 - percent} $color={"#595959"}/>
        </ProgressContainer>
    )
}