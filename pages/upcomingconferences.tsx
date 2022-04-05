import { Heading, VStack, Image, Text, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr, Button, Stack, AspectRatio } from "@chakra-ui/react";
import Layout from "./layout";

export default function upcomingconferences() {
    return (
        <Layout>
            <VStack
            alignItems={'left'}
            py={10}
            px={10}
            spacing={6}>
                <Heading textAlign={'left'}>
                    upcoming conferences
                </Heading>
                <TableContainer>
                    <Table variant='striped' size = 'lg' colorScheme={'gray'}>

                        <Tbody>
                            <Tr>
                                <Td fontSize={'2xl'} fontWeight={'bold'}><Image maxW= '400px'src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Unity_Technologies_logo.svg/2560px-Unity_Technologies_logo.svg.png' objectFit={'cover'}/></Td>
                                <Td><strong>January 4th, 2022</strong>
                                <br/>
                                <strong>10:30 PM</strong></Td>
                                <Td>
                                    <Stack spacing={'2em'}>
                                        <Heading>Unity Fireside Chat</Heading>
                                        <Text>
                                        Join Unity for their first Fireside Chat for Community Colleges!<br/> 
                                        Learn more about opportunities at Unity<br/>
                                        interact with a panel of experienced Programmers<br/>
                                        </Text>
                                        <Button colorScheme={'red'} w={'10em'}>Sign Up</Button>
                                    </Stack>
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </TableContainer>
            </VStack>
        </Layout>
    )
}
