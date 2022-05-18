import { Heading, VStack, Text, Image} from "@chakra-ui/react";
import Head from "next/head";
import Layout from "./layout";

export default function about() {
    return (
        <Layout>
            <Head>
                <title>About Us</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <VStack
            alignItems={'center'}
            py={10}
            px={10}
            spacing={6}>
                <Heading textAlign={'left'}>
                    About CC Opportunities
                </Heading>
                <Image 
                    src={'https://www.tvinsider.com/wp-content/uploads/2020/06/community-cast-full.jpg'} 
                    borderRadius = {10}
                    maxW='1000px'
                />
                <Heading
                size={'lg'}
                >
                    Who Are We?
                </Heading>
                <Text>
                    We are a group of four community colleges
                    aiming to connect 
                    community colleges with the industry.
                </Text>
                <Heading size={'lg'}>
                    what organizations have you worked with so far?
                </Heading>
                <Text>
                    UC Berkeley and Unity. We are looking to contact more and more industries every day!
                </Text>
            </VStack>
        </Layout>
    )
}