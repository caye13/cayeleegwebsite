"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import { title } from "process";
import { image } from "framer-motion/client";
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
    image: "https://raw.githubusercontent.com/caye13/my-website-photos/main/aitherapist.png",
    tag: ["All", "AI/ML", "☆"],
    gitUrl: "https://github.com/caye13/ai_therapist",
    previewUrl: "https://github.com/caye13/ai_therapist",
  },
  // {
  //   id: 3,
  //   title: "Stock Price Predictor",
  //   description: "Predicting stock prices using historical data and machine learning algorithms.",
  //   image: "/projects/3.png",
  //   tag: ["All", "AI/ML", "☆"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
  // {
  //   id: 4,
  //   title: "NLP Summarizer of Privacy Policies",
  //   description: "Summarizes the data taken by apps outlined in their intrusive privacy policies which are constructed to be unintelligible to non-legalese fluent users (the general audience)",
  //   image: "/projects/3.png",
  //   tag: ["All", "AI/ML", "☆"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
  {
    id: 5,
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
    id: 6,
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
    id: 7,
    title: "Kaidate",
    description: "Record a quick voice note to capture a problem, an update, or an idea. It transcribes speech, performs sentiment analysis, and feeds insights into a llm that creates tasks, ranks urgency, and routes responsibilities to the right departments. Based off of Star Trek and inspired by Kaizen Japanese philosophy of continuous, incremental improvement across every layer of an organization. Every log contributes to the system’s self-correction: identifying friction, surfacing inefficiencies, and suggesting optimizations.",
    image: "https://raw.githubusercontent.com/caye13/my-website-photos/main/kaidate.gif",
    tag: ["All", "AI/ML", "Fun", "☆"],
    gitUrl: "https://github.com/caye13/stardate",
    previewUrl:"",
  },
  {
    id: 8,
    title: "Automated Phishing Email Identification and Analysis",
    description: "Using Chronicle's UDM-normalized telemetry, suspicious domains, classified by observed behavior and reputation feeds, are targeted to multi-dimensional analysis. That includes instant threat intelligence correlation via VT Context, historical prevalence charting, and passive DNS resolution mapping to identify co-located malicious infrastructure. Chronological event correlation revealed critical HTTP POST requests to /login.php across affected assets, signifying successful credential exfiltration attempts. Iterative pivoting on resolved IP addresses and sibling domains, a test broad-scale attack surface was delineated, allowing proactive remediation and incident response containment strategies.",
    image: "https://raw.githubusercontent.com/caye13/my-website-photos/main/cybProj.png",
    tag: ["All", "CybSec",],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 9,
    title: "Personal Website",
    description: "This site! Using Next.js and Tailwind CSS.",
    image: "https://raw.githubusercontent.com/caye13/my-website-photos/main/website.gif",
    tag: ["All", "Web", "Fun"],
    gitUrl: "https://github.com/caye13/cayeleegwebsite",
    previewUrl: "/",
  },
  {
    id: 10,
    title: "Scene Image Classification",
    description: "Using PyTorch framework for a pre-trained ResNet18 architecture, initialized with IMAGENET1K_V1 weights, and modified its final classification layer (model.fc) to align with the specific NUM_CLASSES. The dataset goes through preprocessing transformations: transforms.Resize((224, 224)), transforms.RandomHorizontalFlip(p=0.5), conversion to tensor, and transforms.Normalize() with predefined mean and standard deviation values. Data management is an 80/20 stratified train/validation split using sklearn.model_selection.train_test_split for equal class distribution, then batch loading with DataLoader. To make this reproducible, a RANDOM_SEED is applied to torch, numpy, and random operations. The training process uses nn.CrossEntropyLoss as the criterion and optim.Adam for optimization.",
    image: "https://raw.githubusercontent.com/caye13/my-website-photos/main/sceneclassification.png",
    tag: ["All", "AI/ML"],
    gitUrl: "https://github.com/caye13/scene-classification-practice",
    previewUrl: "https://github.com/caye13/scene-classification-practice",
  },
  {
    id: 11,
    title: "Breast Cancer Biopsy Classification",
    description: "Used a logistic regression model for binary classification of breast cancer biopsies (malignant or benign) based on Wisconsin Diagnostic Breast Cancer (WDBC) dataset. The model uses ten features describing cell nucleus characteristics with the mean values of: radius of cancer cell, texture (variance of grayscale intensities), perimeter (total contour length), area (nuclear size), smoothness (variation in radial lengths), compactness, concavity (severity of concave portions of the contour), concave points, fractal dimension, and symmetry (axial symmetry). Then evaluates the model's performance using metrics: precision, recall, and accuracy for validation to prevent overfitting.",
    image: "https://raw.githubusercontent.com/caye13/my-website-photos/main/bcwd.png",
    tag: ["All", "AI/ML"],
    gitUrl: "https://github.com/caye13/breast_cancer_biopsy_classification_logistic_regression",
    previewUrl: "https://github.com/caye13/breast_cancer_biopsy_classification_logistic_regression",
  },
  {
    id: 12,
    title: "Generative Adversarial Networks (GANs) for Image Generation",
    description: "In this project, I worked with the foundational architecture and training of Generative Adversarial Networks (GANs) for image generation. I focused on involving two neural networks: a generator that learns to map random noise from a latent space to synthetic images, and a discriminator that acts as a binary classifier, distinguishing between real images from the dataset and fake images produced by the generator. The model also addresses the complexities in training GANs like issues with convergence, mode collapse (where the generator produces limited variety of outputs), and the difficulty in fine-tuning hyperparameters to achieve stable and high-quality image synthesis.",
    image: "",
    tag: ["All", "AI/ML"],
    gitUrl: "https://github.com/caye13/generative_adversarial_networks",
    previewUrl: "https://github.com/caye13/generative_adversarial_networks",
  },
  {
    id: 13,
    title: "Convolutional Neural Network for Self-driving Vehicle Dog Identification",
    description: "Computer vision for autonomous vehicles to identify dogs on the road. I trained a classification model on image data using CNN architecture for dog detection and implemented model interpretability through  generation of saliency maps which visually highlight the specific pixel regions within a 32x32x3 input image that are most influential in the model's prediction. This provides insight into its decision making process.",
    image: "https://raw.githubusercontent.com/caye13/my-website-photos/main/cnn.png",
    tag: ["All", "AI/ML"],
    gitUrl: "https://github.com/caye13/convolutional_neural_net_self_driving_cars",
    previewUrl: "https://github.com/caye13/convolutional_neural_net_self_driving_cars",
  },
  {
    id: 14,
    title: "Yelp Review Sentiment Analysis",
    description: "This is a sentiment analysis classifier for Yelp reviews to determine whether a review is positive or negative. This project implements an NLP pipeline. Technical aspects: extensive text preprocessing, such as tokenization, lemmatization (reducing words to their base forms), and removal of stop words using libraries like NLTK and SpaCy. Then text data is transformed into numerical features using vectorization, specifically CountVectorizer, to create a bag-of-words representation. A LogisticRegression model from sklearn.linear_model is trained for binary sentiment classification (positive/negative). I also experimented with word embeddings and vector analogies for understanding semantic relationships between words.",
    image: "https://raw.githubusercontent.com/caye13/my-website-photos/main/yelp.png",
    tag: ["All", "AI/ML"],
    gitUrl: "https://github.com/caye13/yelp_review_classification",
    previewUrl: "https://github.com/caye13/yelp_review_classification",
  },
  // {
  //   id: 13,
  //   title: "Yelp Review Sentiment Analysis",
  //   description: "This is a sentiment analysis classifier for Yelp reviews to determine whether a review is positive or negative. Technical aspects: data preprocessing with tokenization to clean text and remove stopwords, vectorization using a CountVectorizer to create a bag-of-words model, training a logistic regression model on the vectorized data to classify the reviews, and I experimented with word embeddings and calculating word similarity and analogies to progress my model to a more advance NLP model.",
  //   image: "",
  //   tag: ["All", "AI/ML"],
  //   gitUrl: "",
  //   previewUrl: "https://github.com/caye13/yelp_review_classification",
  // },
  {
    id: 15,
    title: "Linear Regression for Car Price Prediction",
    description: "Application of multivariate linear regression for predicting used car selling prices. The model is trained to find a linear relationship between a dependent variable, Selling_Price, and other independent features of the car (e.g., Present_Price, Kms_Driven, Fuel_Type, Seller_Type, Transmission, Owner). This project involves data analysis, model training, and visualizing the correlation between predicted and actual prices. It also uses the model's predictions to identify potential market anomalies, like 'best deals' (underpriced cars) and 'most overpriced' vehicles by comparing the predicted value against the actual selling price.",
    image: "https://raw.githubusercontent.com/caye13/my-website-photos/main/linreg.png",
    tag: ["All", "AI/ML"],
    gitUrl: "https://github.com/caye13/car_price_linear_regression",
    previewUrl: "https://github.com/caye13/car_price_linear_regression",
  },
  {
    id: 16,
    title: "Convolutional Neural Networks (CNNs) for Image Classification:",
    description: "Application of CNNs, particularly in the context of a cat and dog image classification task. Aimed to address overfitting when training on small datasets (e.g., 2000 images). The solution is to emphasize data augmentation techniques: generating synthetic training data through image transformations like rotations, flips, zooms. This enhances the model's generalization capabilities and reduce overfitting, improving performance on unseen data.",
    image: "https://raw.githubusercontent.com/caye13/my-website-photos/main/dogid.png",
    tag: ["All", "AI/ML"],
    gitUrl: "https://github.com/caye13/cat_vs_dog_classification",
    previewUrl: "https://github.com/caye13/cat_vs_dog_classification",
  },
  {
    id: 17,
    title: "Streamlit Emotion Prediction App",
    description: "Deployment of a deep learning model for real-time emotion prediction from images using Streamlit. It involves image preprocessing pipeline where input images are first decoded from byte arrays, resized to (48, 48) pixels using cv2.resize with cv2.INTER_LANCZOS4 interpolation for high-quality downsampling, converted to grayscale, and then normalized to a [0, 1] range. Then the preprocessed images are fed into a pre-trained convolutional neural network (CNN) model for inference, with predicted emotion scores visualized via Pandas DataFrames.",
    image: "https://raw.githubusercontent.com/caye13/my-website-photos/main/streamlit.png",
    tag: ["All", "AI/ML"],
    gitUrl: "https://github.com/caye13/streamlit_practice",
    previewUrl: "https://github.com/caye13/streamlit_practice",
  },
  {
    id: 18,
    title: "Band Sanitizer Website",
    description: "I made a website for my band, Band Sanitizer est 2019",
    image: "https://raw.githubusercontent.com/caye13/my-website-photos/main/bscover.jpg",
    tag: ["All", "Fun"],
    gitUrl: "https://github.com/caye13/bandsanitizerofficial",
    previewUrl: "",
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
      
      <ul ref={ref} className="grid sm:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-8 p-4">
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