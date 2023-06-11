import React from 'react';
import { Flex, View } from '@aws-amplify/ui-react';

import HomeFooterView from '../components/HomeFooterView';
import HomeFaqView from '../components/HomeFaqView';
import HomeMiddle1View from '../components/HomeMiddle1View';
import HomeMiddle2View from '../components/HomeMiddle2View';
import HomeTopView from '../components/HomeTopView';

const HomePage = () => {
//  const { tokens } = useTheme();

  return (
    <View
      as="div"
      height="100%"
      width="100%"
      backgroundColor="var(--amplify-colors-neutral-90)">
      <Flex 
        direction="column" 
        justifyContent="space-between" 
        alignItems="stretch" 
        alignContent="flex-start" 
        wrap="nowrap" 
        gap="0.2rem">

        <HomeTopView 
          position="relative"
          height={{ base: "85vh", small: "55vh", medium: "60vh"}}
          width="100%" 
          backgroundColor="var(--amplify-colors-neutral-100)"
          border="1px solid var(--amplify-colors-black)" />

        <HomeMiddle1View 
          height={{ base: "90vh", small: "70vh", medium: "85vh", xl: "60vh", xxl: "50vh"}}
          width="100%" 
          backgroundColor="var(--amplify-colors-black)"
          border="1px solid var(--amplify-colors-black)" />

        <HomeMiddle2View 
          height={{ base: "90vh", small: "70vh", medium: "85vh", xl: "60vh", xxl: "60vh"}}
          width="100%" 
          backgroundColor="var(--amplify-colors-black)"
          border="1px solid var(--amplify-colors-black)" />

        <HomeFaqView 
          height={{ base: "130vh", small: "80vh", medium: "85vh", xl: "130vh", xxl: "120vh"}}
          width="100%" 
          backgroundColor="var(--amplify-colors-black)"
          border="1px solid var(--amplify-colors-black)" />

        <HomeFooterView 
          height={{ base: "90vh", small: "70vh", medium: "60vh", xl: "50vh", xxl: "50vh"}}
          width="100%" 
          backgroundColor="var(--amplify-colors-black)"
          border="1px solid var(--amplify-colors-black)" />
      </Flex>
    </View>
  );
}

export default HomePage;