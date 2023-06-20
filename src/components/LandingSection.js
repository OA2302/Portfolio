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
  <Avatar
  src="https://web.facebook.com/photo/?fbid=246628754627738&set=a.102974505659831"
  name="Adenekan Okikioluwa"
  />
     <VStack spacing={4} alignItems="center" width={200}> 
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