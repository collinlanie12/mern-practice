import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Logo } from "../logo";

const FooterContainer = styled.div`
    background-color: #223646;
    ${tw`
        flex
        flex-col
        min-w-full
        pt-10
        md:pt-12
        items-center
        justify-center
    `}
`;

const BottomContainer =  styled.div`
    ${tw`
        w-full
        flex
        max-w-screen-2xl
        justify-start
        md:justify-center
        mt-7
        md:mt-1
    `};
`;

const CopyRightText = styled.small`
    font-size: 12px;
    ${tw`
        text-gray-400
        ml-6
        md:ml-10
    `};
`;

const InnerContainer = styled.div`
    ${tw`
        flex
        w-full
        h-full
        ml-12
        md:ml-20
        lg:ml-20
        max-w-screen-2xl
        flex-wrap
    `}
`;

const AboutContainer = styled.div`
    ${tw`
        flex
        flex-col
        mr-2
        md:mr-16
    `}
`;

const AboutText = styled.p`
    ${tw`
        w-full
        text-white
        text-sm
        font-normal
        max-w-xs
        leading-5
        mt-2
    `}
`;

const SectionContainer = styled.div`
    ${tw`
        w-full
        md:w-auto
        flex
        flex-col
        mr-2
        md:mr-12
        pl-0
        md:pl-6
        mt-7
        md:mt-0
    `}
`;

const LinksList = styled.ul`
    ${tw`
        outline-none
        list-none
        flex
        flex-col
        pl-0
        -mt-1
    `}
`;

const ListItem = styled.li`
    ${tw`
        mb-3
    `};

    & > a {
        ${tw`
            text-xs
            text-white
            transition-all
            hover:text-gray-400
        `};
    }
`;

const HorizontalContainer = styled.div`
    ${tw`
        flex
        items-center
        mt-0
    `};
`;

const HeaderTitle = styled.h3`
    ${tw`
        text-xl
        font-bold
        text-white
        mt-0
        mb-3
    `}
`;

const RedIcon = styled.span`
    ${tw`
        w-9
        h-9
        rounded-full
        bg-red-500
        flex
        items-center
        justify-center
        text-white
        text-base
        mr-2
    `};
`;

const SmallText = styled.h6`
    ${tw`
        text-sm
        text-white
    `};
`;


export function Footer() {

    return(
        <FooterContainer>
            <InnerContainer>
                <AboutContainer>
                    <Logo color="white" bgColor="dark" />
                    <AboutText>
                        Yourcar is a Car renting and selling company located in many countries across
                        the world which has high quality cars and top rated service.
                    </AboutText>
                </AboutContainer>
                <SectionContainer>
                    <HeaderTitle>Our Links</HeaderTitle>
                    <LinksList>
                        <ListItem><a href="#">Home</a></ListItem>
                        <ListItem><a href="#">About Us</a></ListItem>
                        <ListItem><a href="#">Services</a></ListItem>
                        <ListItem><a href="#">Models</a></ListItem>
                        <ListItem><a href="#">Blog</a></ListItem>
                    </LinksList>
                </SectionContainer>
                <SectionContainer>
                    <HeaderTitle>Other Links</HeaderTitle>
                    <LinksList>
                        <ListItem><a href="#">FAQ</a></ListItem>
                        <ListItem><a href="#">Contact Us</a></ListItem>
                        <ListItem><a href="#">Support</a></ListItem>
                        <ListItem><a href="#">Privacy Policy</a></ListItem>
                        <ListItem><a href="#">Terms &amp; Conditions</a></ListItem>
                    </LinksList>
                </SectionContainer>
                <SectionContainer>
                    <HeaderTitle>Call Now</HeaderTitle>
                    <HorizontalContainer>
                        <RedIcon>
                            <FontAwesomeIcon icon={faPhoneAlt} />
                        </RedIcon>
                        <SmallText>+1 (123)456-7890</SmallText>
                    </HorizontalContainer>
                </SectionContainer>
                <SectionContainer>
                    <HeaderTitle>Mail</HeaderTitle>
                    <HorizontalContainer>
                        <RedIcon>
                            <FontAwesomeIcon icon={faEnvelope} />
                        </RedIcon>
                        <SmallText>info@yourcar.com</SmallText>
                    </HorizontalContainer>
                </SectionContainer>
            </InnerContainer>
            <BottomContainer>
                <CopyRightText>Copyright &copy; {new Date().getFullYear()} Yourcar. All rights reserved.</CopyRightText>
            </BottomContainer>
        </FooterContainer>
    );
}