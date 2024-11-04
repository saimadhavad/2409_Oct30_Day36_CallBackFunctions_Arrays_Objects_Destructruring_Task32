import React, { useEffect, useRef } from 'react'

function CallBackArrayObject() {


    let paragraphResultRef = useRef();
    let objectParagraphResultRef = useRef();

    // CALLBACK FUNCTIONS

    // let result = () => {
    //         let calculateResult = (teluguMarks,hindiMarks,englishMarks,mathsMarks,scienceMarks,socialMarks) => {
    //         let passMarks = 35; 
    //         if (teluguMarks >= passMarks && hindiMarks >= passMarks &&
    //           englishMarks >= passMarks  && mathsMarks >= passMarks &&
    //           scienceMarks >= passMarks && socialMarks >= passMarks) 
    //         {
    //             console.log("Student is Passed in Tenth");
    //             // paragraphResultRef.current.innerHTML = `Student is Passed in Tenth`;
                
    //         }
    //         else {
    //             console.log("Student is Failed in Tenth");
    //             // paragraphResultRef.current.innerHTML = `Student is Failed in Tenth`;
                
    //         }
      
    //     };
    //     calculateResult(89,56,39,27,27,27);
        
    // }
    // result();  

    // let calculateResult = (teluguMarks,hindiMarks,englishMarks,mathsMarks,scienceMarks,socialMarks) => {
    //     let passMarks = 35; 
    //     if (teluguMarks >= passMarks && hindiMarks >= passMarks &&
    //       englishMarks >= passMarks  && mathsMarks >= passMarks &&
    //       scienceMarks >= passMarks && socialMarks >= passMarks) 
    //     {
    //         // console.log("Student is Passed in Tenth");
    //         paragraphResultRef.current.innerHTML = `Student is Passed in Tenth`;
            
    //     }
    //     else {
    //         // console.log("Student is Failed in Tenth");
    //         paragraphResultRef.current.innerHTML = `Student is Failed in Tenth`;
            
    //     }
  
    // };

    
    // CALLBACK FUNCTIONS
    let calculateResult  = (teluguMarks,hindiMarks,englishMarks,mathsMarks,scienceMarks,socialMarks, passFn,failFn) => {

        let passMarks = 35;
    
        if (teluguMarks >= passMarks && hindiMarks >= passMarks &&
          englishMarks >= passMarks && mathsMarks >= passMarks &&
          scienceMarks >= passMarks && socialMarks >= passMarks)
        {
          passFn();
          // console.log("Student Passed in tenth");
        }
        else  {
          failFn();
          // console.log("Student Failed in tenth");
        }
        
      };    
    useEffect(()=>{
        calculateResult(68,57,69,5,54,43, 
            ()=> {paragraphResultRef.current.innerHTML = `Student is Passed in Tenth`;}, 
            ()=>{paragraphResultRef.current.innerHTML = `Student is Failed in Tenth`;})
    }, [])
    // useEffect ( () => {
    //   movieDetails:{objectParagraphResultRef.current.innerHTML = movieDetails.movieDirector};
    //   movieDetails:{objectParagraphResultRef.current.innerHTML = movieDetails.movieProducer;}
    //   movieDetails:{objectParagraphResultRef.current.innerHTML = movieDetails.movieActor;}
    // }, [])

    // OBJECTS
    let movieDetails = {
        movieName: "Baahubali: The Beginning",
        movieStory: "Vijayendra Prasad",
        movieActor: "Prabhas",
        movieActress: "Anushka Shetty",
        movieVillain: "Rana Daggubati",
        movieMusicDirector: "M.M. Keeravani",
        movieDOP: "KK Senthil Kumar",
        movieProducer: "Shobu Yarlagadda",
        movieDirector: "S.S. Rajamouli",
    };
    let objectButtonClick = (resultRef) => {
      movieDetails:{
        resultRef.current.innerHTML = movieDetails.movieDirector;
        resultRef.current.innerHTML = movieDetails.movieProducer;
        resultRef.current.innerHTML = movieDetails.movieActor;
      }
    };

    console.log(movieDetails.movieDirector);
    console.log(movieDetails.movieProducer);
    console.log(movieDetails.movieActor);

    // OBJECT DESTRUCTURING
    let {movieName,movieStory,movieMusicDirector} = movieDetails;
    console.log(movieName);
    console.log(movieStory);
    console.log(movieMusicDirector);

    let {movieActor:mActor,movieActress:mActress,movieVillain:mVillain} = movieDetails;
    console.log(mActor);
    console.log(mActress);
    console.log(mVillain);

    //HOW TO COPY OBJECTS - SPREAD OPERATOR
    let movieDetails2 ={ ...movieDetails };
    movieDetails2.movieName = "Eega";
    movieDetails2.movieActor = "Nani";
    movieDetails2.movieActress = "Samantha Ruth Prabhu";
    movieDetails2.movieVillain = "Sudeep ";
    movieDetails2.movieProducer = "D. Suresh Babu";

    console.log(movieDetails);
    console.log(movieDetails2);


// ARRAYS
let dhoniDetails = [
    "Mahendra Singh","Dhoni",43,"International Cricketer","Wicket-keeper, Batter",
    "msdhoni@gmail.com","Ranchi, Bihar",95,96,97,90,85,86];
    console.log(dhoniDetails);
    console.log(dhoniDetails[0]);
    console.log(dhoniDetails[1]);
    console.log(dhoniDetails[2]);
    console.log(dhoniDetails[6]);
    
    // let firstName = dhoniDetails[0];
    // let lastName = dhoniDetails[1];
    // let [firstName,lastName,age,profession,player,email,city,
    //     teluguMarks,hindiMarks,englishMarks,mathsMarks,scienceMarks,socialMarks] = dhoniDetails;
    // console.log(firstName,lastName,age,profession);
    let [,lastName,,,,,,teluguMarks,hindiMarks,englishMarks,mathsMarks,scienceMarks,socialMarks] = dhoniDetails;
    console.log(lastName,teluguMarks,hindiMarks,englishMarks,mathsMarks,scienceMarks,socialMarks);

    //HOW TO COPY ARRAYS - SPREAD OPERATOR
    let viratKohliDetails =[ ...dhoniDetails ];
        viratKohliDetails[0] = "Virat";
        viratKohliDetails[1] = "Kohli";
        viratKohliDetails[2] = "35";
        viratKohliDetails[3] = "International Cricketer";
        viratKohliDetails[4] = "Right-handed Batter";
        viratKohliDetails[5] = "viratkohli@gmail.com";
        viratKohliDetails[6] = "Delhi";

    console.log(dhoniDetails);
    console.log(viratKohliDetails);

  return (
    <div>
        <div>
            <h3>Callback Function Result :</h3>
            <p ref={paragraphResultRef}></p>
        </div>
        <div>
            <h3>Object Result :</h3>
            <p ref={objectParagraphResultRef}>
              <button type='button'
                onClick={() =>{objectButtonClick(objectParagraphResultRef);}                }
              >Click here to get the Object Result</button>
            </p>
        </div>
        
        {/* <button type='button'
            onClick={ () => {
                let calculateResult = (teluguMarks,hindiMarks,englishMarks,mathsMarks,scienceMarks,socialMarks) => {
             // let passMarks = 35;  
             if (teluguMarks >= 35 && hindiMarks >= 35 &&
                      englishMarks >= 35  && mathsMarks >= 27 &&
                      scienceMarks >= 27 && socialMarks >= 27) 
                    {
                        paragraphResultRef.current.innerHTML = `Student is Passed in Tenth`;
                    }
                    else {
                        paragraphResultRef.current.innerHTML = `Student is Failed in Tenth`;
                    }
                };
                calculateResult(89,56,39,27,27,27); 
            }}
        >Click ME!</button> */}
    </div>
  )
}

export default CallBackArrayObject
