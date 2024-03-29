import { FC, ReactNode } from "react";

type Properties = {
    children: ReactNode[] | ReactNode | undefined;
};

export const SectionBox: FC<Properties> = ({ children }) => {
    return (
        <div
            className={
                "w-full flex flex-col justify-start rounded-xl md:p-4 gap-5"
            }
        >
            {children}
        </div>
    );
};
