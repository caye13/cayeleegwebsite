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
  {
    id: 1,
    title: "Computer Vision Satellite Image Analysis",
    description: "Analysis of cargo movement in high forestation areas using computer vision. General aspects: depth estimation, multi-temporal object tracking, precise semantic and instance segmentation of ground features, and foreground change detection and multi-class object classification, specifically designed to identify diverse cargo types, vehicles, and associated activities within densely vegetated or complex terrain. Intended purpose is to provide actionable geospatial insights that can identify and monitor human trafficking operations in high-risk areas.",
    image: "https://raw.githubusercontent.com/caye13/my-website-photos/main/cvimg.png",
    tag: ["All", "AI/ML", "☆"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 2,
    title: "AI Therapist",
    description: "Using natural language processing to make therapy more accessible, affordable, and convenient. Technical aspects: made a Seq2Seq model for therapist-patient interactions, tokenization for keyword identification (greetings, emotions), data cleaning and sentence-level pairing of questions (x) and answers (y), padding/trimming for uniform input length, using two LSTM networks within the Seq2Seq architecture, incorporating a transformer model with Multi-Headed Attention to grasp full conversational context and address ambiguity, and mapping words by similarity for enhanced understanding.",
    image: "https://raw.githubusercontent.com/caye13/my-website-photos/main/nlp.gif",
    tag: ["All", "AI/ML", "☆"],
    gitUrl: "https://github.com/caye13/ai_therapist",
    previewUrl: "https://github.com/caye13/ai_therapist",
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
    image: "https://raw.githubusercontent.com/caye13/my-website-photos/main/poker.gif",
    tag: ["All", "Fun", "☆"],
    gitUrl: "https://github.com/calee14/monte-carlo-parley",
    previewUrl: "https://github.com/calee14/monte-carlo-parley",
  },
  {
    id: 5,
    title: "Spotify Blender",
    description: (
      <>
        Given two users, this app uses the Spotify API to list all songs from users' profile playlists then has an algorithm find similar tracks and same artists to create one playlist. Ccass algorithm is used to calculate musical compatibility between two users based on genre, shared artists and tracks. Project collaboration with my brother,
        {cappiInfo}
      </>
    ),
    image: "https://raw.githubusercontent.com/caye13/my-website-photos/main/spotifyblender.gif",
    tag: ["All", "Fun", "☆"],
    gitUrl: "https://github.com/calee14/spotify-blender",
    previewUrl: "https://www.blendify.app/",
  },
  {
    id: 6,
    title: "Automated Phishing Email Identification and Analysis",
    description: "Using Chronicle's UDM-normalized telemetry, suspicious domains, classified by observed behavior and reputation feeds, are targeted to multi-dimensional analysis. That includes instant threat intelligence correlation via VT Context, historical prevalence charting, and passive DNS resolution mapping to identify co-located malicious infrastructure. Chronological event correlation revealed critical HTTP POST requests to /login.php across affected assets, signifying successful credential exfiltration attempts. Iterative pivoting on resolved IP addresses and sibling domains, a test broad-scale attack surface was delineated, allowing proactive remediation and incident response containment strategies.",
    image: "https://raw.githubusercontent.com/caye13/my-website-photos/main/cybProj.png",
    tag: ["All", "CybSec", "☆"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 7,
    title: "Personal Website",
    description: "This site!",
    image: "https://raw.githubusercontent.com/caye13/my-website-photos/main/website.gif",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/caye13/cayeleegwebsite",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("☆");
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
      <div className="buttonContainer">
        <div className="text-red-950 flex flex-row justify-center items-center gap-2 py-6">
          <ProjectTag
            onClick={handleTagChange}
            name="☆"
            isSelected={tag === "☆"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="All"
            isSelected={tag === "All"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="AI/ML"
            isSelected={tag === "AI/ML"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="CybSec"
            isSelected={tag === "CybSec"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Fun"
            isSelected={tag === "Fun"}
          />
        </div>
      </div>   
      
      <ul ref={ref} className="grid sm:grid-cols-1 lg:grid-cols-3 gap-8 p-4">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.15 }}
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