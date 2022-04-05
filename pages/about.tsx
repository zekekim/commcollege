import { Heading, VStack, Text, Image} from "@chakra-ui/react";
import Layout from "./layout";

export default function about() {
    return (
        <Layout>
            <VStack
            alignItems={'left'}
            py={10}
            px={10}
            spacing={6}>
                <Heading textAlign={'left'}>
                    about cc for conferences
                </Heading>
                <Image 
                    src={'https://www.tvinsider.com/wp-content/uploads/2020/06/community-cast-full.jpg'} 
                    borderRadius = {10}
                />
                <Heading
                size={'lg'}
                >
                    who are we?
                </Heading>
                <Text>
                    We are a group of 4 community colleges
                    aiming to connect 
                    community colleges with the industry.
                </Text>
                <Heading size={'lg'}>
                    what companies have you worked with so far?
                </Heading>
                <Text>
                    unity lol
                </Text>
            </VStack>
        </Layout>
    )
}