"use client";

import "./about.css";
import Image from "next/image";
import { useState, useEffect } from "react";

import Navigate from "../components/navigation/navigation";
import Footer from "../components/footer/footer";
import PageLoader from "../components/loader/pageLoader";
const About = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating an asynchronous action
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {isLoading ? (
        <PageLoader />
      ) : (
        <div>
          <div className="navigate">
            <Navigate></Navigate>
          </div>
          <h1 className="about lg:ml-[43%]">About Us</h1>
          <div
            className="NameContainer
      lg:w-[100%] lg:h-[100%] lg:mt-[100px]
      flex gap-12 flex-col justify-center "
          >


                  <img src={"/images/logo_white.png"}
                  className="inline-block h-[50vh] lg:h-[70vh]  lg:ml-10 lg:pl-10 pl-10 lg:-mt-10  "
                  alt=""
                />
                </div>
             <h1 className="lg:ml-[43%]">Founder</h1>
            <div
              className="NameContent  scale-50 opacity-30 animate-onScrollFade
        lg:mr-[150px]
        ml-10 mr-10 mt-5
         lg:ml-[150px] lg:flex
        flex-row lg:flex-col gap-8  pb-5 text-zinc-400"
            >
             
             {/* [img][/img]
[img]https://i.ibb.co/zbdMZCF/Whats-App-Image-2023-09-25-at-15-15-00-5545a17a.jpg[/img] */}
              <img src="https://i.ibb.co/zbdMZCF/Whats-App-Image-2023-09-25-at-15-15-00-5545a17a.jpg"
                  className="inline-block h-[35vh]   ml-10   rounded-xl mb-10
                  lg:h-[60vh] lg:w-[30vw] lg:ml-[23vw] lg:mt-5
                  "
                  alt=""
                />
                <p className="font-semibold lg:ml-[26vw] text-white lg:text-3xl 
                text-2xl ml-10 
                ">
                Mahabaleshwar R Bhat 
                


                </p>
                <p className="font-semibold ml-[35vw] lg:-mt-7 text-white lg:text-lg
                mb-10
                ">Founder</p>

                 <img src="https://i.ibb.co/p1tZ59q/IMG20230915093553.jpg"
                  className="inline-block h-[35vh] w  ml-10  rounded-xl
                  lg:h-[60vh] lg:w-[30vw] lg:ml-[23vw] lg:mt-5
                  "
                  alt=""
                />
                  <p className=" font-semibold lg:ml-[30vw] text-white lg:text-3xl
                   text-2xl ml-[66px]
                  ">
                  Raghupati G Bhat                


                </p>
                <p className=" lg:-mt-7 ml-[36vw] text-white lg:text-lg
                
                ">Founder</p>
              
               

            </div>
            <h1 className="ml-[20vw] lg:ml-[40vw]">Supported By</h1>
            <div
              className="NameContent scale-50 opacity-30 animate-onScrollFade 
       
         ml-12 mt-5 mr-10
        flex-col
          gap-8  pb-5 text-zinc-400 mb-10
          lg:grid lg:grid-cols-5 lg:gap-5 lg:ml-[20vw] lg:mr-[20vw] lg:mt-16
          "
            >
              <img src={"/supported/1.png"}
                  className="inline-block w-[15vh] h-16 ml-5  lg:h-44 lg:-mt-10 rounded-xl mb-10"
                  alt=""
                />
                 <img src={"/supported/2.png"}
                  className="inline-block w-[15vh] h-16 ml-5 lg:h-44 lg:-mt-10 rounded-xl mb-5"
                  alt=""
                />
                 <img src={"/supported/3.png"}
                  className="inline-block w-[15vh] h-16 ml-5 lg:h-44 lg:-mt-10 rounded-xl mb-5"
                  alt=""
                />
                 <img src={"/supported/4.png"}
                  className="inline-block w-[15vh] h-16 ml-5 lg:h-44 lg:-mt-10 rounded-xl mb-5"
                  alt=""
                />
                 <img src={"/supported/5.png"}
                  className="inline-block w-[15vh] h-16 ml-5 lg:h-44 lg:-mt-10 rounded-xl mb-5"
                  alt=""
                />
                 <img src={"/supported/6.png"}
                  className="inline-block w-[15vh] h-16 ml-5 lg:h-44 lg:-mt-10 rounded-xl mb-5"
                  alt=""
                />
                 <img src={"/supported/7.png"}
                  className="inline-block w-[15vh] h-16 ml-5 lg:h-44 lg:-mt-10 rounded-xl mb-5"
                  alt=""
                />
                 <img src={"/supported/8.png"}
                  className="inline-block w-[15vh] h-16 ml-5 lg:h-44 lg:-mt-10 rounded-xl mb-5"
                  alt=""
                />
                 <img src={"/supported/9.png"}
                  className="inline-block w-[15vh] h-16 ml-5 lg:h-44 lg:-mt-10 rounded-xl mb-5"
                  alt=""
                />
                 <img src={"/supported/10.png"}
                  className="inline-block w-[15vh] h-16 ml-5 lg:h-44 lg:-mt-10 rounded-xl mb-5"
                  alt=""
                />
             
              
            </div>
          
          <div className="footer">
            <Footer></Footer>
          </div>
        </div>
      )}
    </>
  );
};

export default About;
