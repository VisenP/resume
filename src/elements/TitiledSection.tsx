import React, {ReactNode} from "react";
import {ContentSection} from "./ContentSection";


type Props = {
    title: string,
    border: boolean,
    children?: ReactNode
}

export const TitledSection: React.FC<Props> = ({title, border , children, ...props}) => {
    return (<div tw={"flex flex-col justify-start gap-y-[10px] items-center"}>
        <div tw={"text-2xl"}>{title}</div>
        <ContentSection border={border} {...props}>{children}</ContentSection>
    </div>)
}