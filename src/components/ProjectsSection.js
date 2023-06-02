import React from "react"; 
import FullScreenSection from "./FullScreenSection"; 
import { Box, Heading } from "@chakra-ui/react"; 
import Card from "./Card"; 
import ProjectSection2 from "./ProjectSection2";
 
const projects = [ 
 { 
   title: "React Calculator", 
   description: 
     "A simple but Funtional React Calcutor App. Skills used:REACT.JS, HTML/CSS", 
   getImageSrc: () => require("../images/calculator.png"), 
 }, 
 { 
   title: "Signup", 
   description: 
     "A well designed and functional signup function 🔥️. Skills used: HTML/CSS only", 
   getImageSrc: () => require("../images/kk.png"), 
 } 
];

 
const ProjectsSection = () => { 
 return ( 
   <FullScreenSection 
     backgroundColor="#14532d" 
     isDarkBackground 
     p={8} 
     alignItems="flex-start" 
     spacing={8} 
   > 
    <ProjectSection2 />
     <Heading as="h1" id="projects-section"> 
       Personal Projects
     </Heading> 
     <Box 
       display="grid" 
       gridTemplateColumns="repeat(2,minmax(0,1fr))" 
       gridGap={8} 
     > 
       {projects.map((project) => ( 
         <Card 
           key={project.title} 
           title={project.title} 
           description={project.description} 
           url="https://github.com/rgommezz/react-native-offline" 
           imageSrc={project.getImageSrc()} 
         /> 

       ))} 
     </Box> 
   </FullScreenSection>
 ); 
}; 
 
 

export default ProjectsSection;