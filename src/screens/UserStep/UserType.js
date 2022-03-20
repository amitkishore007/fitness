import { Box, Center, HStack, Text, VStack,  AspectRatio, Image, Stack, Heading, Pressable, Button } from 'native-base'
import React from 'react'

export const UserTypeScreen = (props) => {
  const {navigate} = props.navigation;
  return (
    // <Box flex={1} justifyContent="center" alignItems="center" space={5}>
      <VStack flex={1} space={5} borderWidth={1} justifyContent="center" alignItems="center">
        <HStack flex={1/3} w="80%" justifyContent="center" alignItems="flex-end"  space={5} >
          <Pressable onPress={() => console.log('presssable') }>
            {
              ({ isHovered,  isFocused, isPressed }) => {
                return (
                  <Box bg="gray.600" size={150} rounded="lg" shadow={2} opacity={isPressed ? 0.7: isHovered ? 0.7: 1}>
                    <Center flex={1} >
                      <Text color="gray.100">Gym Owner</Text>
                    </Center>
                  </Box>
                )
              }
            }
          </Pressable>
          <Box bg="primary.600" size={150} shadow={2} overflow="hidden" rounded="lg">
            <Center flex={1}>
              <Text color="gray.100">Trainer/Athelete</Text>
            </Center>
          </Box>
        </HStack>
        <HStack flex={1/3} w="80%"  justifyContent="center" alignItems="flex-start"  space={5}>
          <Box bg="coolGray.400" size={150} shadow={2} overflow="hidden" rounded="lg">
            <Center flex={1}>
              <Text color="gray.100">Gym Freak</Text>
            </Center>
          </Box>
          <Box bg="secondary.600" size={150} shadow={2} overflow="hidden" rounded="lg">
            <Center flex={1}>
              <Text color="gray.100">Normal User</Text>
            </Center>
          </Box>
        </HStack>

        <Box w="60%"><Button onPress={() => navigate('HomeRoute')} shadow={2} size="lg" colorScheme="primary" _text={{fontSize: "sm", letterSpacing: 1}}>Continue</Button></Box>
      </VStack>
    // </Box>
    // <VStack>

    // <Box alignItems="center">
    //   <Box maxW="80" shadow={1} rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
    //   borderColor: "coolGray.600",
    //   backgroundColor: "gray.700"
    // }} _web={{
    //   shadow: 2,
    //   borderWidth: 0
    // }} _light={{
    //   backgroundColor: "gray.50"
    // }}>
    //     <Box>
    //       <AspectRatio w="100%" ratio={16 / 9}>
    //         <Image source={{
    //         uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"
    //       }} alt="image" />
    //       </AspectRatio>
    //       <Center bg="violet.500" _dark={{
    //       bg: "violet.400"
    //     }} _text={{
    //       color: "warmGray.50",
    //       fontWeight: "700",
    //       fontSize: "xs"
    //     }} position="absolute" bottom="0" px="3" py="1.5">
    //         PHOTOS
    //       </Center>
    //     </Box>
    //     <Stack p="4" space={3}>
    //       <Stack space={2}>
    //         <Heading size="md" ml="-1">
    //           The Garden City
    //         </Heading>
    //         <Text fontSize="xs" _light={{
    //         color: "violet.500"
    //       }} _dark={{
    //         color: "violet.400"
    //       }} fontWeight="500" ml="-0.5" mt="-1">
    //           The Silicon Valley of India.
    //         </Text>
    //       </Stack>
    //       <Text fontWeight="400">
    //         Bengaluru (also called Bangalore) is the center of India's high-tech
    //         industry. The city is also known for its parks and nightlife.
    //       </Text>
    //       <HStack alignItems="center" space={4} justifyContent="space-between">
    //         <HStack alignItems="center">
    //           <Text color="coolGray.600" _dark={{
    //           color: "warmGray.200"
    //         }} fontWeight="400">
    //             6 mins ago
    //           </Text>
    //         </HStack>
    //       </HStack>
    //     </Stack>
    //   </Box>
    // </Box>
    //   </VStack>
  )
}