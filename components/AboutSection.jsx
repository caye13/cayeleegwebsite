"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="space-y-6">
        <li className="text-red-950 leading-relaxed text-lg font-300 list-disc">
          Programming Languages: C++, Python, Java, JavaScript, SQL, R, TypeScript
        </li>
        <li className="text-red-950 leading-relaxed text-lg font-300 list-disc">
          Full Stack Development: HTML, CSS, React, Node.js, Next.js, ExpressJS, Tailwind CSS, Flask, Git
        </li>
        <li className="text-red-950 leading-relaxed text-lg font-350 list-disc">
          Mobile Development: React Native, Swift
        </li>
        <li className="text-red-950 leading-relaxed text-lg font-350 list-disc">
          Database Management: MySQL, MongoDB, PostgreSQL, Prisma
        </li>
        <li className="text-red-950 leading-relaxed text-lg font-350 list-disc">
          AI/ML: Scikit-learn, TensorFlow, PyTorch, Jupyter Notebooks, Keras, NumPy, Pandas, Matplotlib, OpenCV, OpenNN, Kafka, OpenAI API, LangChain, NLTK, Hugging Face
        </li>
        <li className="text-red-950 leading-relaxed text-lg font-350 list-disc">
          Cloud Platforms: AWS (EC2, S3, Lambda), Google Cloud Platform, Heroku, Vercel
        </li>
        <li className="text-red-950 leading-relaxed text-lg font-350 list-disc">
          Operating Systems/DevOps: Linux, Docker, GitHub Actions
        </li>
        <li className="text-red-950 leading-relaxed text-lg font-350 list-disc">
           UI/UX: Figma, Tailwind CSS
        </li>
      </ul>
    ),
  },
  {
    title: "Coursework",
    id: "coursework",
    content: (
      <ul className="space-y-6">
        <li className="text-red-950 leading-relaxed text-lg font-350 list-disc">
          Multivariable Calculus, Differential Equations, Linear Algebra, Statistics and Probability, Discrete Mathematics, Mechanics and Thermodynamics
        </li>
        <li className="text-red-950 leading-relaxed text-lg font-350 list-disc">
          Data Structures and Object-Oriented Programming, Algorithms and Theory of Computing, Software Development and Engineering, Machine Learning
        </li>
        <li className="text-red-950 leading-relaxed text-lg font-350 list-disc">
          Business Economics, Financial and Managerial Accounting, Marketing, and Operations Management
        </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="space-y-6">
        <li className="text-red-950 leading-relaxed text-lg font-350 list-disc">
          Google Cybersecurity Certification
        </li>
        {/* <li>Google Professional Cloud Developer</li> */}
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="about text-red-950 py-24" id="about">
      <div className="mx-auto px-8 xl:px-16">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="flex flex-col h-full justify-center">
            <h1 style={{ fontWeight: 900 }}>Coding and Academics</h1>
          </div>
          <div className="space-y-16">
            <div className="space-y-12">
              <div className="flex gap-8">
                {TAB_DATA.map((tabData) => (
                  <TabButton
                    key={tabData.id}
                    selectTab={() => handleTabChange(tabData.id)}
                    active={tab === tabData.id}
                    className={`text-lg font-350 transition-all duration-300 ${
                      tab === tabData.id 
                        ? 'text-red-950 font-medium' 
                        : 'text-red-700 hover:text-red-900'
                    }`}
                  >
                    {tabData.title}
                  </TabButton>
                ))}
              </div>
              
              <div className="min-h-[300px] py-8">
                <div className={`transition-all duration-500 ${
                  isPending ? 'opacity-40 transform translate-y-2' : 'opacity-100 transform translate-y-0'
                }`}>
                  {TAB_DATA.find((t) => t.id === tab).content}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;