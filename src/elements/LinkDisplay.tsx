import { FC } from "react";
import { IconType } from "react-icons";

type Properties = {
    link: string;
    display: string;
    context?: string;
    icon?: IconType;
};

export const LinkDisplay: FC<Properties> = ({
    link,
    display,
    icon,
    context,
}) => {
    const Icon = icon;

    return (
        <div className={"flex flex-row gap-2 justify-start items-center"}>
            {Icon && (
                <div className={"text-amber-700"}>
                    <Icon />
                </div>
            )}
            {context && <div>{context}</div>}
            <div>
                <a
                    className={"text-amber-600 hover:text-amber-700"}
                    href={link}
                >
                    {display}
                </a>
            </div>
        </div>
    );
};
