import {SectionTitle} from "../../elements/SectionTitle";
import {LineDivider} from "../../elements/LineDivider";
import {Fire} from "../../icons/Fire";
import {TitledSection} from "../../elements/TitiledSection";
import styled, {StyledComponent} from "styled-components";

import typeScriptLogo from "/assets/images/typescript_logo.png";
import javaScriptLogo from "/assets/images/javascript_logo.png";
import pythonLogo from "/assets/images/python_logo.webp";
import javaLogo from "/assets/images/java_logo.svg";
import gitLogo from "/assets/images/git_logo.webp"
import dockerLogo from "/assets/images/docker_logo.webp"
import yarnLogo from "/assets/images/yarn_logo.svg"
import gradleLogo from "/assets/images/gradle_logo.svg"
import bashLogo from "/assets/images/bash_logo.svg"
import mySQLLogo from "/assets/images/mysql_logo.webp"
import scyllaLogo from "/assets/images/scylla_logo.svg"
import cassandraLogo from "/assets/images/cassandra_logo.webp"
import mongoDBLogo from "/assets/images/mongo_logo.svg"

import tw from "twin.macro";
import React from "react";

const SizedLogoImg = styled.img`
  height: 32px;
`

type Props = {
    src: string
}

const SizedLogo: React.FC<Props> = ({src}) => {
    return <div tw={"flex justify-center"}><SizedLogoImg src={src}/></div>
}

const SkillItem = styled.div`
  ${tw`col-span-2`}
`

const AlignDiv = styled.div`
  ${tw`text-neutral-300 grid grid-cols-3 gap-1 gap-y-3 content-start items-center`}
`

export const SkillSet = () => {
    return (
        <div>
            <div tw={"w-full flex flex-col justify-start gap-y-[30px]"}>
                <SectionTitle><Fire/> SkillSet</SectionTitle>
                <div tw={"w-full flex justify-around"}>
                    <TitledSection title={"Languages"} border tw={"justify-start"}>
                        <AlignDiv>
                            <SizedLogo src={typeScriptLogo}/>
                            <SkillItem>TypeScript</SkillItem>
                            <SizedLogo src={javaScriptLogo}/>
                            <SkillItem>JavaScript</SkillItem>
                            <SizedLogo src={pythonLogo}/>
                            <SkillItem>Python</SkillItem>
                            <SizedLogo src={javaLogo}/>
                            <SkillItem>Java</SkillItem>
                        </AlignDiv>
                    </TitledSection>
                    <TitledSection title={"Tools"} border tw={"justify-start"}>
                        <AlignDiv>
                            <SizedLogo src={gitLogo}/>
                            <SkillItem>Git</SkillItem>
                            <SizedLogo src={dockerLogo}/>
                            <SkillItem>Docker</SkillItem>
                            <SizedLogo src={yarnLogo}/>
                            <SkillItem>Yarn</SkillItem>
                            <SizedLogo src={gradleLogo}/>
                            <SkillItem>Gradle</SkillItem>
                            <SizedLogo src={bashLogo}/>
                            <SkillItem>Bash</SkillItem>
                        </AlignDiv>
                    </TitledSection>
                    <TitledSection title={"Databases"} border tw={"justify-start"}>
                        <AlignDiv>
                            <SizedLogo src={mySQLLogo}/>
                            <SkillItem>MySQL</SkillItem>
                            <div tw={"flex justify-center"}>
                                <SizedLogo src={scyllaLogo}/>
                            </div>
                            <SkillItem>Scylla</SkillItem>
                            <SizedLogo src={cassandraLogo}/>
                            <SkillItem>Cassandra</SkillItem>
                            <SizedLogo src={mongoDBLogo}/>
                            <SkillItem>MongoDB</SkillItem>
                        </AlignDiv>
                    </TitledSection>
                </div>
            </div>
            <LineDivider tw={"mt-20 mb-10"}/>
        </div>
    );
}