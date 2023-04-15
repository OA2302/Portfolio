import React from "react"; 
import { Avatar, Heading, VStack } from "@chakra-ui/react"; 
import FullScreenSection from "./FullScreenSection"; 
 
const greeting = "Hello, I am Adenekan Okikiokluwa!"; 
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
         src="https://scontent.flos1-2.fna.fbcdn.net/v/t39.30808-6/273896303_102974488993166_8664525187229821439_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGwtGM0K09_X3AdlSZg6zQzKioSZQvgyJ4qKhJlC-DInroFjV1Kj03URNXBUc1oC7aqfag6wzNT1muvOR3hCR0s&_nc_ohc=QcHNshuoYycAX8aystc&_nc_zt=23&_nc_ht=scontent.flos1-2.fna&oh=00_AfDF-WEVo11A9rhmPCygTuhu6hZTxtu6FbPFgqfxmyYZVQ&oe=6440AF6A" 
         size="2x1" 
         name="Your Name" 
       /> 
       <Heading as="h4" size="md" noOfLines={1}> 
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