import { FC } from "react";
import { IconType } from "react-icons";
import { FaDiscord, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import { LinkDisplay } from "../../elements/LinkDisplay.tsx";
import { SectionBox } from "../../elements/SectionBox.tsx";

type ContactInfo = {
    handle: string;
    link: string;
    service: string;
    icon: IconType;
};

const contact: ContactInfo[] = [
    {
        handle: "visen@visen.dev",
        link: "mailto:visen@visen.dev",
        service: "E-mail",
        icon: MdEmail,
    },
    {
        handle: "@NotVisen",
        link: "https://x.com/NotVisen",
        service: "Twitter",
        icon: FaTwitter,
    },
    {
        handle: "visen",
        link: "",
        service: "Discord",
        icon: FaDiscord,
    },
    {
        handle: "/in/visenpavlica",
        link: "https://www.linkedin.com/in/visenpavlica/",
        service: "LinkedIn",
        icon: FaLinkedin,
    },
];

export const ContactSection: FC = () => {
    return (
        <SectionBox>
            <div className={"text-3xl font-bold w-fit"}>Contact</div>
            <div className={"grid grid-cols-1 lg:grid-cols-2"}>
                {contact.map((element) => (
                    <LinkDisplay
                        link={element.link}
                        display={element.handle}
                        context={element.service + ": "}
                        icon={element.icon}
                        key={element.link}
                    />
                ))}
            </div>
        </SectionBox>
    );
};
