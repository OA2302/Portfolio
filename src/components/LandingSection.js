import React from "react"; 
import { Avatar, Heading, VStack } from "@chakra-ui/react"; 
import FullScreenSection from "./FullScreenSection"; 
 
const greeting = "Hello, I am Adenekan Okikioluwa!"; 
const bio1 = "A Frontend Developer"; 
const bio2 = "specialized in React"; 
 
const LandingSection = () => ( 
 <FullScreenSection 
   justifyContent="center" 
   alignItems="center" 
   isDarkBackground 
   backgroundColor="#2A4365" 
 > 
   <VStack spacing={16}> 
     <VStack spacing={4} alignItems="center" width={200}> 
       <Avatar 
         src= "https://drive.google.com/file/d/1E8WxU5z4aF6AzX7_PRte7AgkaPbOw36Y/view?usp=drive_link"
         size="2x1"  
       /> 
       <Heading as="h4" size="ms" noOfLines={1}> 
         {greeting}
       </Heading>
     </VStack>
     <VStack spacing={6}> 
       <Heading as="h1" size="3xl" noOfLines={1}> 
         {bio1} 
       </Heading> 
       <Heading as="h1" size="3xl" noOfLines={1}> 
         {bio2} 
       </Heading> 
     </VStack> 
   </VStack> 
 </FullScreenSection> 
); 
 
export default LandingSection;