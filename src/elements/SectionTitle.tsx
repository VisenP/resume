import React, {ReactNode} from "react";

type Props = {
    children?: ReactNode
}

export const SectionTitle: React.FC<Props> = ({children}) => {
    return <div tw={"text-3xl flex justify-start items-center ml-[-20px]"}>{children}</div>
}