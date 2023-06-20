import React from "react"; 
import FullScreenSection from "./FullScreenSection"; 
import { Box, Heading } from "@chakra-ui/react"; 
import Card from "./Card"; 
import ProjectSection2 from "./ProjectSection2";
 
const projects = [ 
 { 
  title: "Comment Section", 
  description: 
    "A simple comment text area section. Skills used:REACT.JS, HTML/CSS. https://comment-section-six-theta.vercel.app/", 
  getImageSrc: () => require("../images/comment.jpg"),
},
{
  title: "Calculator",
  description: 
  "My react.js calculator . Skills Used: React.js, HTML/CSS. https://2nd-calculator.vercel.app/",
  getImageSrc: () => require("../images/cal.jpg"),
},
{ 
  title: "QR-Code Component", 
  description: 
    "A simple comment text area section. Skills used:HTML/CSS. https://qr-code-component-main-cyan-eight.vercel.app/", 
  getImageSrc: () => require("../images/Qr.jpg"),
},
 {
  title: "Review Section",
  description: "My demo  Review Section Skills. Used: HTML/CSS and JS. https://comment-section-six-theta.vercel.app/",
  getImageSrc: () => require ("../images/review.jpg"),
 
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
           target="blank"
           description={project.description}
           imageSrc={project.getImageSrc()} 
         /> 

       ))} 
     </Box> 
   </FullScreenSection>
 ); 
}; 
 
 

export default ProjectsSection;