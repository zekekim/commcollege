import Layout from "./layout";

import {
    Stack,
    Flex,
    Button,
    Text,
    VStack,
    useBreakpointValue,
    Link
  } from '@chakra-ui/react';
import Head from "next/head";

  

export default function Home() {
    return(
    <Layout>
        <Head>
            <title>Conference 4 CC</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <WithBackgroundImage />
    </Layout>
    )
}

export function WithBackgroundImage() {
    return (
      <Flex
        w={'full'}
        h={'100vh'}
        backgroundImage={
          'url(https://i.imgur.com/7KXV8ay.png)'
        }
        backgroundSize={'cover'}
        backgroundPosition={'center 1em'}>
        <VStack
          w={'full'}
          justify={'center'}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={'linear(to-r, rgba(255,255,255,0.8), rgba(255,255,255,0.8))'}>
          <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
            <Text
              color={'black'}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: '4xl', md: '3xl' })}>
              Committed to getting community college students the best industry experience.
            </Text>
            <Link href='/upcomingconferences' _hover={{textDecoration: 'none',}}>
                <Button colorScheme={'red'} >
                    see our conferences
                </Button>
            </Link>
            
          </Stack>
        </VStack>
      </Flex>
    );
  }