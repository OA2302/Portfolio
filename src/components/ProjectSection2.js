import React from 'react'
import FullScreenSection from "./FullScreenSection"; 
import { Box, Heading } from "@chakra-ui/react"; 
import Card from "./Card"; 

const Project = [
    { 
      title: "Photo Gallery", 
      description: 
        "A One-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income", 
      getImageSrc: () => require("../images/photo3.jpg"), 
    }, 
    { 
      title: "Event planner", 
      description: 
        "A mobile application for leisure seekers to discover unique events and activities in their city with a few taps", 
      getImageSrc: () => require("../images/photo4.jpg"), 
    }, 
   ];   
const ProjectSection2 = () => {
  return (
    <FullScreenSection 
    backgroundColor="#14532d" 
    isDarkBackground 
    p={8} 
    alignItems="flex-start" 
    spacing={8} 
  > 
    <Heading as="h2" id="projects-section2"> 
      Featured Projects 
    </Heading> 
    <Box 
      display="grid" 
      gridTemplateColumns="repeat(2,minmax(0,1fr))" 
      gridGap={8} 
    > 
      {Project.map((project) => ( 
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
  )
}

export default ProjectSection2