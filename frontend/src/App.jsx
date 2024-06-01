import { useState } from 'react'
import React from 'react';
import './App.css'
import axios from 'axios';
import Darkmode from 'darkmode-js';
import { motion } from "framer-motion"
import { LampDemo } from "./components/lampComponent";
import { HeroParallaxDemo } from "./components/hero-component";

new Darkmode().showWidget();

const App = () => {


  const [text, setText] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post('https://spamdetective.onrender.com/predict', { message: text });
      setResponse(res.data.result);
    } catch (error) {
      console.log("Error is ", error);
    }
  };


  const handleDownload = () => {
    
    const content = `1. Free entry in 2 a wkly comp to win FA Cup final tkts 21st May 2005. Text FA to 87121 to receive entry question(std txt rate)T&C's apply 08452810075over18's.

2. SMS. ac Sptv: The New Jersey Devils and the Detroit Red Wings play Ice Hockey. Correct or Incorrect? End? Reply END SPTV.

3. 07732584351 - Rodger Burns - MSG = We tried to call you re your reply to our sms for a free nokia mobile + free camcorder.Please call now 08000930705 for delivery tomorrow.

4. Urgent UR awarded a complimentary trip to EuroDisinc Trav, Aco & Entry41 Or å£1000. To claim txt DIS to 87121 18 + 6 * å£1.50(moreFrmMob.ShrAcomOrSglSuplt)10, LS1 3AJ

5. Please call our customer service representative on 0800 169 6031 between 10am-9pm as you have WON a guaranteed å£1000 cash or £5000 prize!

6. Your free ringtone is waiting to be collected. Simply text the password \\MIX\\ to 85069 to verify. Get Usher and Britney. FM  PO Box 5249        MK17 92H. 450Ppw.

7. Customer service announcement. You have a New Year's delivery waiting for you. Please call 07046744435 now to arrange delivery.

8. URGENT! We are trying to contact you. Last weekend's draw shows that you have won a å£900 prize GUARANTEED. Call 09061701939. Claim code S89. Valid 12hrs only

9. Sunshine Quiz Wkly Q! Win a top Sony DVD player if u know which country the Algarve is in? Txt ansr to 82277. å£1.50 SP:Tyrone

10.Congratulations! You are eligible for FREE Unlimited 5G Data on your 5G Phone. To claim your FREE Unlimited 5G Data Recharge with ₹239 or more. Claim your UNLIMITED 5G Data from Airtel thanks Apps. Click - bit.ly/existing5g.
`;
    
    const blob = new Blob([content], { type: 'text/plain' });

    const link = document.createElement('a');

    link.download = 'example.txt';

    link.href = URL.createObjectURL(blob);

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
  };
  
  
  return (
    
    <div>
      <HeroParallaxDemo />
        <LampDemo />
       <head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
    </head>
    
    <div className="fixed top-0 left-0 z-50 w-full flex justify-start ">
    <div class="mx-left flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
    <div class="inline-flex items-left space-x-2">
    </div>
    <div class="hidden grow items-start lg:flex">
      <ul class="ml-12 inline-flex space-x-8">
        <li>
        <a
            href="https://github.com/Abhrajitdas02"
            class="text-sm font-semibold text--300 hover:text-gray-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-github fa-2x text-gray-300 hover:text-gray-400"></i>
          </a>
        </li>
        <li>
        <a
            href="https://github.com/Abhrajitdas02"
            class="text-sm font-semibold text--300 hover:text-gray-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-instagram fa-2x text-gray-300 hover:text-gray-400"></i>
          </a>
        </li>
        <li>
        <a
            href="https://www.linkedin.com/in/abhrajit-das-53a958231/"
            class="text-sm font-semibold text--300 hover:text-gray-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-linkedin fa-2x text-gray-300 hover:text-gray-400"></i>
          </a>
        </li>
      </ul>
    </div>
    <div class="lg:hidden">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="h-6 w-6 cursor-pointer"
      >
        <line x1="4" y1="12" x2="20" y2="12"></line>
        <line x1="4" y1="6" x2="20" y2="6"></line>
        <line x1="4" y1="18" x2="20" y2="18"></line>
      </svg>
    </div>
        </div>
        </div> 
      

        <div class="flex justify-center items-center w-full">
      <form onSubmit={handleSubmit}>
        <input
          class="bg-black text-black flex h-10 w-[600px] h-[100px] rounded-md border border-black/30 bg-transparent px-3 py-2 text-2xl placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter the text here"
        />
 
 
      <motion.button
      type="submit"
      className="mt-10 rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      whileHover={{ scale: 1.1, backgroundColor: "#000000" }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.2 }}
      >
      Predict
    </motion.button>
          </form>
      </div>
      
      {response && <motion.p
        animate={{ x: [0, 100, 0] }}
        className="text-7xl mt-10 mb-10 font-bold "
       
      > {response}</motion.p>}

      <div className="app-container">
        <motion.button
           onClick={handleDownload}
      type="submit"
      className="mt-10 mr-1 rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      whileHover={{ scale: 1.1, backgroundColor: "#000000" }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.2 }}
      >
        Download Sample
      </motion.button>
      </div>
      
      </div>
  )
}

export default App
