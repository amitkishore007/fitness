import { StyleSheet } from 'react-native'
import React from 'react'
import { Box, Button, Center, AspectRatio,Stack, Heading, Text, HStack, Image, FlatList } from 'native-base';
import { FA5ICon } from '../../components';

export const HomeScreen = (props) => {
  const { navigate } = props.navigation;

  const data = [{
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    fullName: "Aafreen Khan",
    title: "The Golden City",
    timeStamp: "12:47 PM",
    recentText: "Good Day!",
    avatarUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    postImage: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
    liked: true
  }, {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    fullName: "Sujitha Mathur",
    title: "The Golden City",
    timeStamp: "6 mins ago",
    recentText: "Cheer up, there!",
    avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU",
    postImage: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
    liked: false
  }, {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    fullName: "Anci Barroco",
    title: "The Golden City",
    timeStamp: "6:22 PM",
    recentText: "Good Day!",
    avatarUrl: "https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg",
    postImage: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
    liked: true
  }, {
    id: "68694a0f-3da1-431f-bd56-142371e29d72",
    fullName: "Aniket Kumar",
    title: "The Golden City",
    timeStamp: "8:56 PM",
    recentText: "All the best",
    avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU",
    postImage: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
    liked: false
  }, {
    id: "28694a0f-3da1-471f-bd96-142456e29d72",
    fullName: "Kiara",
    title: "The Golden City",
    timeStamp: "6 mins ago",
    recentText: "I will call today.",
    avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU",
    postImage: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
    liked: false
  }];

  const postItem = ({item}) => {
    return (
      <Box alignItems="center">
      <Box maxW="95%" mt={2} rounded="lg" overflow="hidden" borderColor="coolGray.200" shadow={1} borderWidth="1" 
      _dark={{ 
        borderColor: "coolGray.600", 
        backgroundColor: "gray.700"
      }} _web={{
      shadow: 2,
      borderWidth: 0
      }} _light={{
      backgroundColor: "gray.50"
      }}>
        <Box>
        <Image source={{
            uri: item.postImage
          }} alt="ProfileImage" />
          <AspectRatio w="100%" ratio={16 / 9}>
            <Image source={{
            uri: item.postImage
          }} alt="image" />
          </AspectRatio>
          <Center bg="gray.800" opacity={0.8} _dark={{
          bg: "gray.500"
        }} _text={{
          color: "warmGray.50",
          fontWeight: "700",
          fontSize: "xs"
        }} position="absolute" bottom="0" left={0} px="3" py="1.5">
           {item.liked ? <FA5ICon name="heartbeat" size={25} color="red"/> : <FA5ICon name="heart" size={25} color="#fff"/>} 
          </Center>
        </Box>
        <Stack p="4" space={3}>
          <Stack space={2}>
            <Heading size="md" ml="-1">
              {item.title}
            </Heading>
            <Text fontSize="xs" _light={{
            color: "violet.500"
          }} _dark={{
            color: "violet.400"
          }} fontWeight="500" ml="-0.5" mt="-1">
              {item.fullName}
            </Text>
          </Stack>
          <Text fontWeight="400">
           {item.recentText}
          </Text>
          <HStack alignItems="center" space={4} justifyContent="space-between">
            <HStack alignItems="center">
              <Text color="coolGray.600" _dark={{
              color: "warmGray.200"
            }} fontWeight="400">
                {item.timeStamp}
              </Text>
            </HStack>
          </HStack>
        </Stack>
      </Box>
    </Box>
    );
  }

  return (
    <FlatList ListFooterComponent={<Box h={90} justifyContent="center" alignItems="center" marginBottom={230} ><Text>You have reached the end!!</Text></Box>} data={data} keyExtractor={ (item) => item.id} renderItem={postItem}/>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    paddingTop: 50
  }
})