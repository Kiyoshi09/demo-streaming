import React from 'react';
import styled from 'styled-components';
import { Expander, ExpanderItem, Flex, Text, View } from '@aws-amplify/ui-react';
import GetStartedComp from './GetStartedComp';

const HomeFaqView = (props) => {
  return (
    <StyledViewHomeFaqContainer {...props}>
      <Flex
        direction="column"
        display="relative"
        justifyContent="space-between"
        alignItems="center">

          <View width="100%">
              <StyledTextHeading>Frequently Asked Questions</StyledTextHeading>
          </View>

          <StyledViewFaq>
            <Expander isCollapsible>
              <StyledExpanderItem title="What is Tealium Prime Video ?" value='faq-item1'>
                <StyledSpan>
                  Tealium Prime Video is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!
                </StyledSpan>
              </StyledExpanderItem>
              <StyledExpanderItem title="How much Tealium Prime Video cost ?" value='faq-item2'>
                <StyledSpan>
                  Watch Tealium Prime Video on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from JPY990 to JPY1,980 a month. No extra costs, no contracts.
                </StyledSpan>
              </StyledExpanderItem>
              <StyledExpanderItem title="Where can I watch ?" value='faq-item3'>
                <StyledSpan>
                  Watch anywhere, anytime. Sign in with your Tealium Prime Video account to watch instantly on the web at tealiumlabs.com from your personal computer or on any internet-connected device that offers the Tealium Prime Video app, including smart TVs, smartphones, tablets, streaming media players and game consoles. You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Tealium Prime Video with you anywhere.
                </StyledSpan>
              </StyledExpanderItem>
              <StyledExpanderItem title="How do I cancel ?" value='faq-item4'>
                <StyledSpan>
                  Tealium Prime Video is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.
                </StyledSpan>
              </StyledExpanderItem>
              <StyledExpanderItem title="What can I watch on Tealium Prime Video ?" value='faq-item5'>
                <StyledSpan>
                  Tealium Prime Video has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
                </StyledSpan>
              </StyledExpanderItem>
              <StyledExpanderItem title="Is Tealium Prime Video good for kids ?" value='faq-item6'>
                <StyledSpan>
                  The Tealium Prime Video Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.00
                </StyledSpan>
              </StyledExpanderItem>
            </Expander>
          </StyledViewFaq>

          <StyledViewInputEmailContainer>
            <StyledTextHeading5>Ready to watch? Enter your email to create or restart your membership.</StyledTextHeading5>
            <GetStartedComp />
          </StyledViewInputEmailContainer>

      </Flex>
    </StyledViewHomeFaqContainer>
  );
}

export default HomeFaqView;


const StyledViewHomeFaqContainer = styled(View)`
`;

const StyledTextHeading = styled(Text)`
  font-size: 48px;
  font-family: 'Ubuntu';
  font-weight: 700;
  color: var(--amplify-colors-white);
  text-align: center;
  padding-block-start: 50px;

  @media screen and (max-width: 991px) {
    font-size: 36px;
    padding-block-start: 40px;
  }

  @media screen and (max-width: 479px) {
    font-size: 28px;
    padding-block-start: 30px;
  }
`;

const StyledViewFaq = styled(View)`
  padding-block-start: 20px;
  width: 60%;

  @media screen and (min-width: 1280px){
    width: 70%;
  }

  @media screen and (max-width: 1279px){
    width: 90%;
  }

  @media screen and (max-width: 479px){
    width: 97%;
  }

`;

const StyledExpanderItem = styled(ExpanderItem)`
  color: var(--amplify-colors-white);
  font-size: 1.7rem;
  font-weight: 500;
  font-family: 'Ubuntu';
  background-color: rgba(45, 45, 45, 1.0);
  border: 4px solid var(--amplify-colors-black);
  padding-block: 20px 20px;

  @media screen and (max-width: 991px) {
    font-size: 1.3rem;
    padding-block: 10px 10px;
  }

  @media screen and (max-width: 479px) {
    font-size: 1.0rem;
    padding-block: 7px 7px;
  }
`;

const StyledSpan = styled.span`
  font-size: 1.2rem;
  color: var(--amplify-colors-neutral-60);

  @media screen and (max-width: 991px) {
    font-size: 1.0rem;
  }

  @media screen and (max-width: 479px) {
    font-size: 0.7rem;
  }
`;

const StyledViewInputEmailContainer = styled(View)`
  padding-block-start: 40px;
`;

const StyledTextHeading5 = styled(Text)`
  font-size: 24px;
  font-family: 'Ubuntu';
  font-weight: 500;
  color: var(--amplify-colors-white);
  text-align: center;

  @media screen and (max-width: 992px) {
    font-size: 18px;
  }
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;
