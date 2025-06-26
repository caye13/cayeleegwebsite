"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
const cappiInfo = (
  <>
    <br></br>
    <a href="https://cappillen.com" target="_blank" rel="noopener noreferrer" className="text-red-950 underline">
    Cappillen Lee
    </a>
  </>
);
const projectsData = [
  // {
  //   id: 1,
  //   title: "Computer Vision Satellite Image Analysis",
  //   description: "Analysis of cargo movement in high forestation areas using computer vision depth estimation, object tracking, segmentation, and foreground detection/classification. Intended purpose is to combat human trafficking",
  //   image: "/projects/1.png",
  //   tag: ["All", "AI"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
  {
    id: 2,
    title: "AI Therapist",
    description: "Using natural language processing to make therapy more accessible, affordable, and convenient. Technical aspects: made a Seq2Seq model for therapist-patient interactions, tokenization for keyword identification (greetings, emotions), data cleaning and sentence-level pairing of questions (x) and answers (y), padding/trimming for uniform input length, using two LSTM networks within the Seq2Seq architecture, incorporating a transformer model with Multi-Headed Attention to grasp full conversational context and address ambiguity, and mapping words by similarity for enhanced understanding.",
    image: "https://raw.githubusercontent.com/caye13/my-website-photos/main/nlp.gif",
    tag: ["All", "AI"],
    gitUrl: "",
    previewUrl: "",
  },
  // {
  //   id: 3,
  //   title: "Stock Price Predictor",
  //   description: "Predicting stock prices using historical data and machine learning algorithms.",
  //   image: "/projects/3.png",
  //   tag: ["All", "AI"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
  // {
  //   id: 3,
  //   title: "NLP Summarizer of Privacy Policies",
  //   description: "Summarizes the data taken by apps outlined in their intrusive privacy policies which are constructed to be unintelligible to non-legalese fluent users (the general audience)",
  //   image: "/projects/3.png",
  //   tag: ["All", "AI"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
  {
    id: 4,
    title: "Monte Carlo Poker Estimation",
    description:(
      <>
        Using Monte Carlo simulations to estimate the probabilities of different boards in poker. Player has options to randomize their hand or enter a given hand at each stage of the game as well as enter the number of players still at the table. Project collaboration with my brother, 
        {cappiInfo}
      </>
    ),
    image: "/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "",
    previewUrl: "",
  },
  // {
  //   id: 5,
  //   title: "Spotify Playlist Merger",
  //   description: "Given two Spotify Users, combines all common songs on both users' playlists into one.",
  //   image: "/projects/5.png",
  //   tag: ["All", "Web"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
  {
    id: 6,
    title: "Personal Website",
    description: "This site!",
    image: "https://raw.githubusercontent.com/caye13/my-website-photos/main/website.gif",
    tag: ["All", "Web"],
    gitUrl: "",
    previewUrl: "",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-4xl font-bold text-red-950 mt-4 mb-8 md:mb-12">
        Projects
      </h2>      
      {/* <div className="text-red-950 flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Computer Vision"
          isSelected={tag === "Computer Vision"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div> */}
      <ul ref={ref} className="grid sm:grid-cols-1 lg:grid-cols-3 gap-8 p-4">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;