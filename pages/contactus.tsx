import { VStack, Heading, Image, Text, Link, Grid, GridItem, HStack, Button } from "@chakra-ui/react";
import Head from "next/head";
import Layout from "./layout";

export default function contactus() {
    return (
        <Layout>
            <VStack
            alignItems={'center'}
            py={10}
            px={10}
            spacing={20}>
                <HStack>
                        <Image src= 'https://d3sq5bmi4w5uj1.cloudfront.net/images/brochure/og_image_poundie.png?1588160432' w='3em'/>
                        <Heading textAlign={'left'}>
                            contact us
                        </Heading>
                    </HStack> 
                <Text>
                    We communicate primarily through GroupMe.<br/>
                    Click your campus below to connect through Campus Connect:
                </Text>
                <Link href='#'>
                    <HStack>
                        <Image src= 'https://applywave.com/wp-content/uploads/2020/01/DeAnza.png' w='3em'/>
                        <Heading size={'lg'}>De Anza College</Heading>
                    </HStack> 
                </Link>
                <Link href='#'>
                    <HStack>
                        <Image src= 'https://pbs.twimg.com/profile_images/1195477694663626752/cXQKoeN6_400x400.jpg' w='3em'/>
                        <Heading size={'lg'}>Irvine Valley College</Heading>
                    </HStack> 
                </Link>
                <Link href='#'>
                    <HStack>
                        <Image src= 'https://pbs.twimg.com/profile_images/1243630920877432834/eHU4fLbr_400x400.jpg' w='3em'/>
                        <Heading size={'lg'}>College of the Canyons</Heading>
                    </HStack> 
                </Link>
                <Link href='#'>
                    <HStack>
                        <Image src= 'https://huevos-uploads-production.s3-us-west-1.amazonaws.com/uploads/file-c58b5e59-d03b-4e49-9666-fbcfe94136f6-FoothillCollege.jpg' w='3em'/>
                        <Heading size={'lg'}>Foothill College</Heading>
                    </HStack> 
                </Link>
                
            </VStack>
        </Layout>
    )
}