import {SectionTitle} from "../../elements/SectionTitle";
import {LineDivider} from "../../elements/LineDivider";
import {ContactIcon} from "../../icons/Contact";
import {SizedLogo} from "../skillset/SkillSet";

import emailLogo from "/assets/images/mail_logo.svg"
import discordLogo from "/assets/images/discord_logo.svg"
import linkedInLogo from "/assets/images/linkedin_logo.svg"
import twitterLogo from "/assets/images/twitter_logo.svg"
import gitHubLogo from "/assets/images/github_logo.svg"
import styled from "styled-components";
import tw from "twin.macro";

const ContactItem = styled.div`
  ${tw`flex justify-start items-center`};
`

export const Contact = () => {
    return (
        <div>
            <div tw={"w-full flex flex-col justify-start gap-y-[30px] h-[300px]"}>
                <SectionTitle><ContactIcon/> Contact</SectionTitle>
                <div tw={"grid grid-cols-2 gap-[5rem]"}>
                    <ContactItem><SizedLogo src={emailLogo}/> visen@visen.dev</ContactItem>
                    <ContactItem><SizedLogo src={discordLogo}/> Visen#3081</ContactItem>
                    <ContactItem><SizedLogo src={linkedInLogo}/> /in/visenpavlica/</ContactItem>
                    <ContactItem><SizedLogo src={twitterLogo}/> @NotVisen</ContactItem>
                    <ContactItem><SizedLogo src={gitHubLogo}/> @VisenP</ContactItem>
                </div>
            </div>
            <LineDivider tw={"mt-20 mb-10"}/>
        </div>
    );
}