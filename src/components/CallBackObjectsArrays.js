import React, { useEffect, useRef } from 'react'

function CallBackObjectsArrays() {

    // let resultRef = useRef();
    let callBackFunctionParagraphResultRef = useRef();
    let objectsParagraphResultRef = useRef();
    let objectsDestructuringParagraphResultRef = useRef();
    let arraysParagraphResultRef = useRef();
    let arraysDestructuringParagraphResultRef = useRef();
    let objectsSpreadOperatorResultRef = useRef();
    let arraysSpreadOperatorResultRef = useRef();
    

    // CALLBACK FUNCTIONS
    let calculateResult = (teluguMarks,hindiMarks,englishMarks,mathsMarks,scienceMarks,socialMarks,passFn,failFn) => {
        let passMarks = 35;

        if(teluguMarks>=passMarks && hindiMarks>=passMarks &&
            englishMarks>=passMarks && mathsMarks>=passMarks &&
            scienceMarks>=passMarks && socialMarks)
            {
                passFn();
            }
            else{
             failFn();   
            }
    };

    // useEffect( () => {
    //     calculateResult(89,78,45,26,82,90,
    //         () => {
    //             callBackFunctionParagraphResultRef.current.innerHTML = `Student Passed in the Tenth`;
    //             console.log(`Student Passed in the Tenth`);
    //         },
    //         () => {
    //             callBackFunctionParagraphResultRef.current.innerHTML =`Student Failed in the Tenth`;
    //             console.log('Student Failed in the Tenth');
    //         }

    //     );},[])

    
    // OBJECTS
    // CREATING AN OBJECT
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
            resultRef.current.innerHTML = `<strong>Movie Details :</strong> <br/> 
            <strong>Name : ${movieDetails.movieName}<br/></strong>  
            <strong>Story :${movieDetails.movieStory}<br/></strong>
            <strong>Actor : ${movieDetails.movieActor}<br/></strong>
            <strong>Actress : ${movieDetails.movieActress}<br/></strong> 
            <strong>Villain : ${movieDetails.movieVillain}<br/></strong >
            <strong>Music : ${movieDetails.movieMusicDirector}<br/></strong> 
            <strong>DOP : ${movieDetails.movieDOP}<br/></strong> 
            <strong>Producer : ${movieDetails.movieProducer}<br/></strong> 
            <strong>Director :${movieDetails.movieDirector}<br/></strong>`;
            console.log(movieDetails);
        };

        // DESTRUCTURING AN OBJECT
        let objectButtonDesctruringClick = (resultRef) => {
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
            let {movieDirector,movieProducer,movieStory} = movieDetails;
            resultRef.current.innerHTML =` <strong>Object Destructuring :</strong> <br/>${movieDirector} ${movieProducer} ${movieStory}`;
            console.log("Object Destructuring :");
            console.log(movieDirector);
            console.log(movieProducer);
            console.log(movieStory);

            // 2nd Way - DESTRUCTURING AN OBJECT
            let {movieActor:mActor,movieActress:mActress,movieVillain:mVillain} = movieDetails;
            resultRef.current.innerHTML =` <strong>Object Destructuring 2:</strong> <br/>${mActor} 
            ${mActress} ${mVillain}`;
            console.log("Object Destructuring2 :");
            console.log(mActor);
            console.log(mActress);
            console.log(mVillain);

    
        };
        
        //HOW TO COPY OBJECTS USING SPREAD OPERATOR
        let objectSpreadOperator = (resultRef) =>{

            //SPREAD OPERATOR
            let movieDetails2 ={ ...movieDetails };
            
            movieDetails2.movieName = "Eega";
            movieDetails2.movieActor = "Nani";
            movieDetails2.movieActress = "Samantha Ruth Prabhu";
            movieDetails2.movieVillain = "Sudeep ";
            movieDetails2.movieProducer = "D. Suresh Babu";

            console.log(movieDetails2);
            resultRef.current.innerHTML = `<strong>Movie Details using Spread Operator :</strong> <br/> 
            <strong>Name : ${movieDetails2.movieName}<br/></strong>  
            <strong>Story :${movieDetails2.movieStory}<br/></strong>
            <strong>Actor : ${movieDetails2.movieActor}<br/></strong>
            <strong>Actress : ${movieDetails2.movieActress}<br/></strong> 
            <strong>Villain : ${movieDetails2.movieVillain}<br/></strong >
            <strong>Music : ${movieDetails2.movieMusicDirector}<br/></strong> 
            <strong>DOP : ${movieDetails2.movieDOP}<br/></strong> 
            <strong>Producer : ${movieDetails2.movieProducer}<br/></strong> 
            <strong>Director :${movieDetails2.movieDirector}<br/></strong>`;
        }
    
    // ARRAYS 
    // CREATING AN ARRAY
        let dhoniDetails =["Mahendra Singh","Dhoni",43,"International Cricketer","Wicket-keeper, Batter",
        "msdhoni@gmail.com","Ranchi, Bihar",95,96,97,90,85,86];
        let arrayButtonClick = (resultRef) => {

            let dhoniDetails =["Mahendra Singh","Dhoni",43,"International Cricketer","Wicket-keeper, Batter",
                "msdhoni@gmail.com","Ranchi, Bihar",95,96,97,90,85,86];

            console.log(dhoniDetails);
            resultRef.current.innerHTML = `Dhoni Details : <br/>${dhoniDetails}`;        
        }
        // DESTRUCTURING AN ARRAY
        let arrayButtonDestructuringClick = (resultRef) => {
            let dhoniDetails =["Mahendra Singh","Dhoni",43,"International Cricketer","Wicket-keeper, Batter",
            "msdhoni@gmail.com","Ranchi, Bihar",95,96,97,90,85,86];

            //let lastName = dhoniDetails[1];
            //let Age = dhoniDetails[2];

            //  let [,lastName,Age] = dhoniDetails;
            // console.log(lastname,Age);
            // resultRef.current.innerHTML = `${lastName}, ${Age}`;

            let [,lastName,,,,,,teluguMarks,hindiMarks,englishMarks,mathsMarks,scienceMarks,socialMarks] = dhoniDetails;
            console.log(lastName,teluguMarks,hindiMarks,englishMarks,mathsMarks,scienceMarks,socialMarks);
            resultRef.current.innerHTML = `${lastName}, Marks : <br/>${teluguMarks},${hindiMarks},${englishMarks},
                                            ${mathsMarks},${scienceMarks},${socialMarks}`;

            

        }
        //HOW TO COPY ARRAY USING SPREAD OPERATOR
        let arraysSpreadOperator = (resultRef) =>{

            //SPREAD OPERATOR
            let viratKohliDetails = [ ...dhoniDetails ];

            viratKohliDetails[0] = "Virat";
            viratKohliDetails[1] = "Kohli";
            viratKohliDetails[2] = "35";
            viratKohliDetails[3] = "International Cricketer";
            viratKohliDetails[4] = "Right-handed Batter";
            viratKohliDetails[5] = "viratkohli@gmail.com";
            viratKohliDetails[6] = "Delhi";
        console.log(viratKohliDetails);
        resultRef.current.innerHTML = `Virat Kohli Details using Spread Operator : <br/> ${viratKohliDetails}`;
     
   }

  return (
    <div>
      <h1> Callback Functions, Objects, Arrays & Destructuring</h1>

      <div className='callBackFunctionDiv'>
        <h2>CALLBACK FUNCTIONS</h2>
        <button type='button'
            onClick={ () => {
                calculateResult(89,78,45,26,82,90,
                    () => {
                        callBackFunctionParagraphResultRef.current.innerHTML = `Student Passed in the Tenth`;
                        console.log(`Student Passed in the Tenth`);
                    },
                    () => {
                        callBackFunctionParagraphResultRef.current.innerHTML =`Student Failed in the Tenth`;
                        console.log('Student Failed in the Tenth');
                    }
        
                );
            }}        
        >Click here to get the Callback function Result</button>
        <p ref={callBackFunctionParagraphResultRef}></p>
      </div>

      <div className='objectsDiv'>
        <h2>OBJECTS</h2>

        <button type='button' 
            onClick={ () => {
                objectButtonClick(objectsParagraphResultRef);
            }}
        >Click here to get Object Result</button>

        <button type='button'
        onClick={ () => {
            objectButtonDesctruringClick(objectsDestructuringParagraphResultRef);
        }}
        >Click here to get Object Destructuring Result  
        </button>
        <button type='button'
            onClick={ () => {
                objectSpreadOperator(objectsSpreadOperatorResultRef);
            }}
        >Click here to get Object SpreadOperator Result</button>

        <p ref={objectsParagraphResultRef}></p>
        <p ref={objectsDestructuringParagraphResultRef}></p>
        <p ref={objectsSpreadOperatorResultRef}></p>
      </div>

      <div className='arrayDiv'>
        <h2>ARRAYS</h2>
        <button type='button'
            onClick={ () => {
                arrayButtonClick(arraysParagraphResultRef);
            }}
        >Click here to get Array Result</button>
        <button type='button'
            onClick={ () => {
                arrayButtonDestructuringClick(arraysDestructuringParagraphResultRef);
            }}
        >Click here to get Array Destructuring Result</button>

        <button type='button'
            onClick={ () => {
                arraysSpreadOperator(arraysSpreadOperatorResultRef);
            }}
        >Click here to get Array Spread Operator Result</button>
        <p ref={arraysParagraphResultRef}></p>
        <p ref={arraysDestructuringParagraphResultRef}></p>
        <p ref={arraysSpreadOperatorResultRef}></p>
      </div>
    </div>
  )
}

export default CallBackObjectsArrays
