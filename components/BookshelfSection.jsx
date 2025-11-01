'use client';

import React, { useState, useEffect } from 'react';
// Firebase imports have been completely removed.

// --- Static Data Source (Simulates the "backend" review storage) ---
// Note: You can manually edit the content in this object to update your book reviews.
const BOOK_NOTES = {
  'Catcher in the Rye': 'I hope this doesn\'t make me look like an adolecent male but this is easily one of my favorite books of all time. When I first read this, I was around the same age as Holden and I really resonated with his self-induced social isolation. I think because of the narrative nature of this book, when I read it, I felt like I was pulling the confusion right out of my brain onto a page. I reread parts of this book recently and Salinger\'s overall analysis of society is still applicable today. I\'m not a huge pessimist but I do think that a lot of the social constructs we have today are just as phony as they are in the book. \n\nIn short: Modern narrative of nihilism',
  'The Gems of Calculus': 'Fun read if calculus tickles your mind. \n\nAlso learned a lot about mathematicians/makers of patterns. This book was charmingly written but in an eccentric way. \n(Author is weirdly opinionated about some of these mathmeticians) \n\nThe first half looks at the philosophy and history of mathematics and examines them in a holistic perspective. The second half looks more into the elegance of selected calculus and other math topics, the \'gems\' of calculus and the results they yield. \n\nOverall, I throughly enjoyed it but it\'s definitely a niche book.',
  'On the Shortness of Life': 'I have the worst relationship with time because there\'s never enough of it. If you also have a really bad relationship with time, this isn\'t going to make it better. But I love how it questioned so many life choices we make in our lives that are in actuality sucking out our peace and energy. \n\nIt\'s a short read with highly rewarding insights. If I was tasked to reccommend a book, it would be this one.',
  'Metamorphosis': 'When I first read this, I thought it was absolutely distasteful. But I think minus the bugs and all of that slimy jazz, I really like how his fragmented narrative delivers character development, family politics, personal identity, and the human condition. \nHis writing style isn\'t exactly monotone but his more mundane style of writing still can translate into a disquieting effect. \n\nAfter reading more of Kafka\'s literature, I can now see the appeal in his sterile yet somehow aphoristic, dark humored prose. I also read some of his more \'romantic\' writing and I hate to admit it but as weird as it is, I\'m in love with his letters addressed to Milena. Maybe it\'s the brutalism, or perhaps it\'s the dehumanizing, existential aspect of his literature. I can\'t quite say but condensed truths and the intensity of simply cutting to the core rather than adding fluff words sum up how I communicate. There is no overt emotionalism just plain text. (CS reference)',
  'Algorithms to Live By': 'Pattern recognition. Optimization. Decision-making under uncertainty. Exploration of tradeoffs betwen competing objectives. \n\n"Real-world and practical caching applications"',
  'Mathematics of Poker': 'Game theory, math/probability, strategic decision-making in poker \n\nConcepts covered: expected value, bluffing, optimal betting strategies, and a mathematical approach to understanding poker gameplay. \n\nThis book goes into the application of mathematical principles to enhance poker strategy and decision-making. Mainly to help you appreciate the game and recognize the patterns. But if you want to get good, this book will most likely not give you your expected return. Best outputs come from memorizing the probabilities for each stage (that can be found online). Or make a game like meee that starts preflop with hand cards then moving through the next stages, guessing the probability of winning as more community cards get placed on the table. Now you\'re more familiar with the stakes!',
  'Emerson\'s Self Reliance Essay': 'Takeaway from Emerson\'s essay: conformity kills individuality. This read invokes a challenge to trust your inner voice over external pressures. Emerson is trying to communicate that greatness and authenticity of oneself comes from independence of thought and action, warning those who read his essay that conformity weakens individuality and integrity. Basically live by your intuition rather than imitation. \n\nI think a lot of Emerson\'s ideas still resonate today especially in a time where social and political identities demand allegiance to one side. The modern political landscape reflect the tension Emerson talked about in his essay: the pressure to conform to “righteous” ideals versus the courage to express personal truth. Authenticity isn\’t rebellion for its own sake but alleviating the limitation of the expression of authentic beliefs for nuanced dialogue and genuine exchange.',
  'Notes from Underground': 'I think I\'m just really into literatary loners that prefer alienation and introspection over life. I really like Dostoevsky in general so my next read after finishing my Retrieval-Augmented Generation reading/study project will most likely be The Brothers Karamazov.',
// 'Fahrenheit 451': '',
  //   '1984': 'A chilling warning about totalitarianism, surveillance, and the destruction of objective truth. The concept of doublethink and the Party\'s control over history remain terrifyingly relevant political commentaries. \n\nCore Fear: Not death, but the obliteration of identity and independent thought.',
//   'Sherlock Holmes': 'A brilliant blend of semiotics, medieval history, and detective fiction. The search for the forbidden book in the labyrinthine library serves as a metaphor for the pursuit of dangerous knowledge and the repression of laughter. \n\nLiterary Device: Umberto Eco uses the mystery genre to explore complex theories of language and culture.',
  'The Afghanistan Papers': '',
//   'Siddhartha': 'A philosophical journey of self-discovery, emphasizing that wisdom cannot be taught, but must be experienced. The river acts as a powerful symbol of the unity and flow of all existence. \n\nStructure: The narrative is structured around multiple stages of life, each necessary for achieving enlightenment.',
};

// --- Thought Journal Panel Component (Read-Only) ---
const ThoughtPanel = ({ activeBook, onClose }) => {
  const [thoughts, setThoughts] = useState('Fetching notes...');
  const [isLoading, setIsLoading] = useState(true);

  // Fetch data on book change (static lookup)
  useEffect(() => {
    if (!activeBook) return;

    setIsLoading(true);
    // Simulate a brief loading time for effect, though the lookup is immediate
    const timer = setTimeout(() => {
        const bookTitle = activeBook.title;
        const storedThoughts = BOOK_NOTES[bookTitle] || `Notes for "${bookTitle}" not found in the static BOOK_NOTES object. Please add your analysis to the source code.`;
        
        setThoughts(storedThoughts);
        setIsLoading(false);
    }, 100); // Small delay for effect

    return () => clearTimeout(timer);
  }, [activeBook]);

  if (!activeBook) return null;

  return (
    <div className={`thought-panel ${activeBook ? 'open' : ''}`}>
      <div className="thought-panel-header">
        <h3 className="font-merriweather">{activeBook.title}</h3>
        <button className="close-button" onClick={onClose}>
            &times;
        </button>
      </div>
      <p className="thought-panel-subtitle font-inter">{activeBook.author}</p>
      <div className="thought-journal-area">
        {isLoading ? (
            <div className="loading-message font-inter">Thoughts?</div>
        ) : (
            <pre className="thought-display font-inter">
                {thoughts}
            </pre>
        )}
      </div>
    </div>
  );
};


// --- Main Component ---
const BookshelfSection = () => {
  const [activeBook, setActiveBook] = useState(null);
  const [isShelfVisible, setIsShelfVisible] = useState(true); // State for mobile collapse

  // Array of books with new, muted dark academia colors
  const books = [
    { title: 'Catcher in the Rye', color: '#4A0E1A', author: 'J.D. Salinger' },        // Deep Burgundy
    { title: 'The Gems of Calculus', color: '#2D3A42', author: 'William Dunham' },         // Dark Slate Blue
    { title: 'On the Shortness of Life', color: '#594040', author: 'Seneca' },// Muted Rosewood
    { title: 'Metamorphosis', color: '#3E4E3F', author: 'Franz Kafka' },              // Deep Olive Green
    { title: 'Algorithms to Live By', color: '#404040', author: 'Brian Christian' },                 // Dark Slate Gray
    { title: 'Mathematics of Poker', color: '#50354A', author: 'Michael E. Schell' },                   // Dark plum
    { title: 'Emerson\'s Self Reliance Essay', color: '#1B1B1B', author: 'Ralph Waldo Emerson' },          // Near Black
    { title: 'Notes from Underground', color: '#708090', author: 'Fyodor Dostoevsky' },      // Slate Gray
    // { title: '1984', color: '#50354A' },                      // Dark Plum Sepia Brown
    // { title: 'The Name of the Rose', color: '#603C1B' },      // Sepia Brown
    // { title: 'Siddhartha', color: '#004D40' },                // Dark Hunter Green
    // { title: 'Siddhartha', color: '#262626', author: 'Hermann Hesse' },        // Dark Gray
    { title: 'The Afghanistan Papers', color: '#3B2F2F', author: 'Craig Whitlock' }, // Dark Brownish Gray
  ];

  const handleBookClick = (book) => {
    if (activeBook && activeBook.title === book.title) {
      setActiveBook(null); // Close if already active
    } else {
      setActiveBook(book); // Open for new book
    }
  };

  const closePanel = () => setActiveBook(null);

  // Function to toggle shelf visibility for mobile
  const toggleShelfVisibility = () => {
    setIsShelfVisible(!isShelfVisible);
    // If we hide the shelf, close the active book panel too
    if (isShelfVisible) {
      setActiveBook(null);
    }
  };

  const shouldShiftLeft = !!activeBook;
  const rowClassName = `bookshelf-row ${shouldShiftLeft ? 'shift-left' : ''}`;

  return (
    <div className="bookshelf-section-container">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&family=Inter:wght@300;400;600&display=swap');

          :root {
            --primary-bg: #1F2D23; /* Dark Pine Green */
            --text-light: #F5E8C7;
            --text-accent: #D4AF37;
            --shelf-wood: #4F2D24; /* Dark Mahogany */
            --shadow-dark: rgba(0, 0, 0, 0.6);
          }

          .font-merriweather { font-family: 'Merriweather', serif; }
          .font-inter { font-family: 'Inter', sans-serif; }

          .bookshelf-section-container {
            background-color: var(--primary-bg);
            padding: 4rem 1.5rem;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            /* Aligns header and rows to the left of the container */
            align-items: flex-start; 
            overflow-x: hidden;
            position: relative; /* CRITICAL: Establishes context for absolute panel */
          }

          .section-header-bookshelf {
            /* Center the header content within its max-width */
            margin: 0 auto 4rem auto; 
            max-width: 900px;
            padding: 0 1rem;
            z-index: 1;
            width: 100%;
            text-align: center;
          }

          .section-title-bookshelf {
            font-size: 2.5rem;
            font-weight: 700;
            color: var(--text-accent);
            margin-bottom: 0.5rem;
            letter-spacing: 0.05em;
            text-shadow: 1px 1px 3px rgba(0,0,0,0.5);
            font-family: 'Merriweather', serif;
          }

          .section-description-bookshelf {
            font-size: 1.1rem;
            line-height: 1.7;
            color: var(--text-light);
            font-family: 'Inter', sans-serif;
            max-width: 700px;
            margin: 0 auto;
          }
          
        //   /* Mobile Toggle Button (Collapse) */
        //   .mobile-toggle {
        //     display: none; /* Hidden by default */
        //     background-color: var(--text-accent);
        //     color: var(--primary-bg);
        //     padding: 0.5rem 1rem;
        //     border: none;
        //     border-radius: 4px;
        //     cursor: pointer;
        //     font-weight: 600;
        //     margin-top: 1.5rem;
        //     transition: background-color 0.2s;
        //     box-shadow: 0 2px 5px rgba(0,0,0,0.4);
        //   }
          
        //   .mobile-toggle:hover {
        //       background-color: #C0A130;
        //   }


          .bookshelf-row {
            width: 100%;
            max-width: 700px;
            margin: 3rem auto 0 auto; /* Default: Center the row */
            position: relative;
            padding-bottom: 25px;
            transition: all 0.3s ease; /* For shift-left transition */
          }

          .bookshelf-row::before {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 18px;
            background-color: var(--shelf-wood);
            border-radius: 2px;
            box-shadow: 0 4px 10px var(--shadow-dark);
            z-index: 0;
          }

          .bookshelf-grid {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
            width: 100%;
            padding: 0 1rem;
            justify-content: center; /* Default: Center */
            align-items: flex-end;
            margin-bottom: 0;
            position: relative;
            z-index: 1;
          }

          .book-item {
            position: relative;
            width: 91px;
            height: 160px;
            border-radius: 3px 3px 0 0;
            box-shadow: 3px 3px 10px var(--shadow-dark);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            background-color: var(--book-color);
            border: 1px solid rgba(255,255,255,0.1);
            margin-bottom: -5px;
          }

          .book-item:hover {
            transform: translateY(-8px);
            box-shadow: 6px 6px 15px rgba(0, 0, 0, 0.7);
          }

          .book-title {
            font-family: 'Merriweather', serif;
            font-size: 0.9rem;
            font-weight: 200;
            color: var(--text-light);
            text-align: center;
            text-shadow: 1px 1px 2px rgba(0,0,0,0.4);
            word-wrap: break-word;
            white-space: normal;
            transform: rotate(90deg);
            transform-origin: center;
            width: 150px;
            max-height: 90px;
            overflow: hidden;
            text-overflow: ellipsis;
            line-height: 1.2;
            padding: 0 0.005rem;
          }

          /* --- Responsive and Desktop Layout Overrides --- */
          
        //   @media (max-width: 1023px) {
        //     /* Show collapse button on mobile */
        //     .mobile-toggle {
        //       display: block;
        //     }
            
            /* Book size refinement for mobile screens */
            .book-item {
              width: 80px;
              height: 140px;
            }
            
            /* CRITICAL FIX: Stops books from "floating" */
            .bookshelf-grid {
              /* Changed from space-around to flex-start: Books now align left and stack tightly */
              justify-content: flex-start; 
              gap: 1rem;
              padding: 0.5rem;
            }
          }

          @media (min-width: 1250px) {
            /* Desktop Layout */
            
            /* Shift bookshelf content left when panel is open */
            .bookshelf-row.shift-left {
              /* 30rem panel width + 2rem padding on container = approx 32rem of space needed */
              margin-right: calc(30rem + 1.5rem); 
              max-width: calc(100% - 50rem - 3rem); /* Max width adjusted for shift */
              margin-left: 1.5rem; /* Align shelf content to the left */
            }
            
            /* On desktop, align books to the start of the row container */
            .bookshelf-grid {
              justify-content: flex-start;
            }
          }


          /* --- Thought Journal Panel Styles --- */
          /* Changed to absolute positioning and adjusted to stick to the right edge of the *container* */
          .thought-panel {
            position: absolute; 
            top: 0;
            right: 0;
            width: 100%;
            height: 100%;
            background-color: #26382F; /* Lighter Dark Green */
            box-shadow: -5px 0 15px rgba(0, 0, 0, 0.6);
            transform: translateX(100%);
            transition: transform 0.3s ease-in-out;
            z-index: 10;
            padding: 2rem;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            color: var(--text-light);
          }

          .thought-panel.open {
            transform: translateX(0);
          }
          
          /* Desktop panel size */
          @media (min-width: 1250px) {
            .thought-panel {
              width: 50rem;
              height: 80%; /* Take full height of the section */
              bottom: 0;
              top: auto;
            }
          }
          
          /* Mobile panel size (smaller, centered pop-up) */
          @media (max-width: 1250px) {
            .thought-panel {
              top: 50%;
              right: 50%;
              transform: translate(50%, -50%) translateX(120%); /* Initial off-screen state */
              width: 90%;
              max-width: 400px;
              height: auto;
              max-height: 80vh;
              border-radius: 8px;
            }
            .thought-panel.open {
              transform: translate(50%, -50%) translateX(0); /* On-screen state */
            }
          }
          /* ... rest of the Thought Panel styles ... */

          .thought-panel-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 0.5rem;
          }

          .thought-panel-header h3 {
            font-size: 1.8rem;
            color: var(--text-accent);
            flex-grow: 1;
          }

          .thought-panel-subtitle {
              font-size: 0.9rem;
              color: #A0A0A0;
              margin-bottom: 1.5rem;
          }

          .close-button {
            background: none;
            border: none;
            color: var(--text-light);
            font-size: 2.5rem;
            cursor: pointer;
            padding: 0;
            line-height: 1;
            transition: color 0.2s;
          }

          .close-button:hover {
            color: var(--text-accent);
          }

          .thought-journal-area {
            flex-grow: 1;
            position: relative;
            padding: 1rem;
            background-color: #314439; /* Paper background */
            border: 1px solid #4F2D24;
            border-radius: 4px;
            box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.5);
            overflow-y: auto;
          }

          .thought-display {
            white-space: pre-wrap; /* Preserve line breaks but wrap long lines */
            word-wrap: break-word;
            margin: 0;
            color: var(--text-light);
            font-size: 1rem;
            line-height: 1.6;
          }
          
          .loading-message {
              text-align: center;
              padding: 2rem;
              color: #A0A0A0;
          }
        `}
      </style>

      <header className="section-header-bookshelf">
        <h2 className="section-title-bookshelf font-merriweather">Under the Record Player</h2>
        <p className="section-description-bookshelf font-inter">
          Curated Pages/Personal Stack/Absolute Favorites/. Click on a spine.
        </p>
        {/* <button className="mobile-toggle font-inter" onClick={toggleShelfVisibility}>
          {isShelfVisible ? 'Hide Library' : 'Show Library'}
        </button> */}
      </header>

      {/* Conditionally render the bookshelf rows based on visibility state */}
      {isShelfVisible && (
        <>
          {/* Simulate shelves by grouping books into rows */}
          <div className={rowClassName}>
            <div className="bookshelf-grid">
              {books.slice(0, 3).map((book, index) => (
                <div
                  key={index}
                  className="book-item"
                  style={{ '--book-color': book.color }}
                  onClick={() => handleBookClick(book)}
                >
                  <span className="book-title">{book.title}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={rowClassName}>
            <div className="bookshelf-grid">
              {books.slice(3, 6).map((book, index) => (
                <div
                  key={index}
                  className="book-item"
                  style={{ '--book-color': book.color }}
                  onClick={() => handleBookClick(book)}
                >
                  <span className="book-title">{book.title}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={rowClassName}>
            <div className="bookshelf-grid">
              {books.slice(6, 13).map((book, index) => (
                <div
                  key={index}
                  className="book-item"
                  style={{ '--book-color': book.color }}
                  onClick={() => handleBookClick(book)}
                >
                  <span className="book-title">{book.title}</span>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {/* Thought Journal Panel (Now absolutely positioned within this section) */}
      <ThoughtPanel
        activeBook={activeBook}
        onClose={closePanel}
      />
    </div>
  );
};

export default BookshelfSection;

