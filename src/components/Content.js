import {
    Heading,
    Avatar,
    Box,
    Center,
    Image,
    Flex,
    Text,
    Stack,
    Button,
    useColorModeValue,
  } from '@chakra-ui/react';
  
  export default function SocialProfileWithImage(props) {


    let a= props.regester
    if(props.regester === true ){
        a = "Available"
    }else{
        a = "Not Available"
    }


    return (
      <Center py={6}>
        <Box
          maxW={'270px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'md'}
          overflow={'hidden'}>
          <Image
            h={'120px'}
            w={'full'}
            src={"data:image/jpeg;base64,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"}
            objectFit={'cover'}
          />
          <Flex justify={'center'} mt={-12}>
            <Avatar
              size={'xl'}
              src={props.logo}
              alt={'Author'}
              css={{
                border: '2px solid white',
              }}
            />
          </Flex>
  
          <Box p={6}>
            <Stack spacing={0} align={'center'} mb={5}>
              <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                {props.CampType}
              </Heading>
              <Text color={'gray.500'}>{props.type}</Text>
            </Stack>
  
            <Stack direction={'row'} justify={'center'} spacing={6}>
              <Stack spacing={0} align={'center'}>
                <Text fontSize={'sm'} color={'gray.500'} noOfLines="4">
                 {props.disc}
                </Text>
              </Stack>
              
            </Stack>
  
            <Button
              w={'full'}
              mt={8}
              bg={useColorModeValue('#151f21', 'gray.900')}
              color={'white'}
              rounded={'md'}
              _hover={{
                transform: 'translateY(-2px)',
                boxShadow: 'lg',
                backgroundColor:"blue"
              }}>
              {a}
            </Button>
          </Box>
        </Box>
      </Center>
    );
  }