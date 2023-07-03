import React, { useState } from "react";
import axios from "axios";

export const FormTemplate = ({ index , name }) => {
    const [showForm, setShowForm] = useState(false);
    const [geolocationErrorMessage, setGeolocationErrorMessage] = useState("");
    const [emailErrorMessage, setEmailErrorMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [CurrentQuestion, setCurrentQuestion] = useState(0);
    const [bgimage , setbgimage] = useState('');
    const [response, setResponse] = useState({
        email: "",
        location: [],
        optionsArray: [],
    });

    const data = [
        {
            formName: "Water Pollution",
            formQuestions: [
                {
                    question:
                        "Is there any water body nearby your place ?",
                    options: [
                        "No , there is no known water body nearby me",
                        "Yes there are small ponds etc",
                        "Yes there are small water bodies like lake etc",
                        "Yes , there are large water bodies liken river or ocean",
                    ],
                },
                {
                    question:
                        "What color of the water you commonly observein your tap water or in any water body nearby you if it is ?",
                    options: [
                        "Clear Transparent",
                        "Blue/Green",
                        "Green water",
                        "Yellow or orange",
                    ],
                },
                {
                    question:
                        "What amount or level of unwanted substances like garbage etc you see in any water body nearby you?",
                    options: [
                        "No water body nearby",
                        "Very less",
                        "Intermediate Level",
                        "Very high level",
                    ],
                },
                {
                    question:
                        "Have you noticed any dead fish , or plant or body of acquatic animals in any of the nearby water body to you?",
                    options: [
                        "No water body nearby",
                        "No , I havent seen anything like this",
                        "Sometimes",
                        "yes , very frequently",
                    ],
                },
                {
                    question:
                        "Have you heard anyone of having any of following disease or related ?",
                    options: [
                        "None of any",
                        "Typhoid or Dysentry",
                        "Cholera",
                        "Gastroentritis or Hepatitis A",
                    ],
                },
                {
                    question:
                        "How will you overall rate the pollution level in water you see or use?",
                    options: [
                        "0-3",
                        "3-6",
                        "6-8",
                        "8-10",
                    ],
                },
                
            ],
        },
        {
            formName: "Air Pollution",
            formQuestions: [
                {
                    question:
                        "How concerned are you about air pollution",
                    options: [
                        "I am not concerned at all",
                        "I am very little concerned",
                        "I am concerned but not much",
                        "I am very much concerned",
                    ],
                },
                {
                    question:
                        "While going to your work or school , how far you are able to see the road clearly without any smog or fog or any air particles?",
                    options: [
                        "Almost 5km and above",
                        "almost between 2km and 5km",
                        "almost netween 1km and 2km",
                        "Less than 1km",
                    ],
                },
                
                {
                    question:
                        "While breathing in open air , do you smell any unsual odour or anything ",
                    options: [
                        "No there is no such smell",
                        "Yes , but not aware of what kind",
                        "Some irritating smell",
                        "Yes , burning plastic like , or choking odour , or some sweet kind of..",
                    ],
                },
                {
                    question:
                        "Do you fell irritating with your eyes in open air ?",
                    options: [
                        "No , I dont feel irritating",
                        "Sometimes",
                        "Yes i feel",
                        "Yes very much and daily",
                    ],
                },
                {
                    question:
                        "Did you diagonised any of the following disease in your surroundings ?",
                    options: [
                        "None of the above disease",
                        "Allergies or Immune system disorder",
                        "Chronic Respiratory",
                        "Chronic Cardiovascular",
                    ],
                },
                {
                    question:
                        "How will you overall rate the pollution level in air you see ?",
                    options: [
                        "0-3",
                        "3-6",
                        "6-8",
                        "8-10",
                    ],
                },
            ],
        },
        {
            formName: "Climate Patterns",
            formQuestions: [
                {
                    question:
                        "Have you observed any changes in weather patterns in your area over past few years ?",
                    options: [
                        "No possible change",
                        "Not sure",
                        "Yes , slight changes ",
                        "Yes , significant changes ",
                    ],
                },
                {
                    question:
                        "Have you experienced any extreme weather conditon like extreme heat or cold ?",
                    options: [
                        "No",
                        "Extreme rain",
                        "Extreme cold",
                        "Extreme heat",
                    ],
                },
                {
                    question:
                        "Do every shift in weather takes place on time or you feel its not on time as always ?",
                    options: [
                        "No change in time",
                        "Not aware ",
                        "Slight change",
                        "Very unsual shifting",
                    ],
                },
                {
                    question:
                        "At your nearby places , have you experienced loss due to weather consitions like extreme hot etc  ?",
                    options: [
                        "No",
                        "No aware",
                        "Slight loss",
                        "Very much loss",
                    ],
                },
                {
                    question:
                        "Have you experienced any natural disaster recently  ?",
                    options: [
                        "No such disasteer",
                        "not aware",
                        "Yes , but its wasnt very harmful",
                        "yes , it was very harmful ",
                    ],
                },
            ],
        },
        {
            formName: "Deforestation Rate",
            formQuestions: [
                {
                    question:
                        "How would you describe the current state of forests in this area?",
                    options: [
                        "I don't know",
                        "Unchanged over time",
                        "Declining and sparse",
                        "Thriving and dense",
                    ],
                },
                {
                    question:
                        "Which of the following factors do you think contribute to deforestation?",
                    options: [
                        "All of the above",
                        "Urbanization and infrastructure development",
                        "Logging and timber extraction",
                        "Agricultural expansion",
                    ],
                },
                {
                    question:
                        "Have you observed any signs of deforestation in this area?",
                        
                    options: [
                        " No, no signs of deforestation",
                        " I don't know",
                        " Yes, minor tree cutting",
                        "Yes, significant tree cutting",
                    ],
                },
                {
                    question:
                        "What percentage of forested area do you estimate has been lost in this region?",
                    options: [
                        "Less than 30%",
                        "10% to 30%",
                        "30% to 50%",                        
                        "More than 50%",
                    ],
                },
                {
                    question:
                        "Which of the following factors do you think contribute to deforestation?",
                    options: [
                        "All of the above",
                        "Urbanization and infrastructure development",
                        "Agricultural expansion",
                        "Logging and timber extraction",
                    ],
                },
                {
                    question:
                        "Do you believe that the deforestation rate in this area is increasing, decreasing, or stable?                        ",
                    options: [
                        "Decreasing",
                        "Not aware",
                        "Stable",
                        "Increasing",
                    ],
                },
            ],
        },
    ];

    const getFormQuestions = (name) => {
        const filteredArray = data.filter((value) => value.formName === name);
        return filteredArray[0].formQuestions;
    };

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function getUserLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition, (error) =>
                setGeolocationErrorMessage("You've denied Geolocation.")
            );
        } else {
            setGeolocationErrorMessage(
                "Your Browser doesn't support Geolocation."
            );
        }
    }

    function showPosition(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        setResponse({ ...response, location: [longitude, latitude] });
    }

    const getText = () => {
        if (CurrentQuestion === 0) {
            return "VERIFY";
        } else if (CurrentQuestion === getFormQuestions(name).length) {
            return "SUBMIT";
        } else {
            return "NEXT";
        }
    };

    const handleLeftButtonClick = () => {
        if (CurrentQuestion === 0) {
            clearStates();
        } else {
            setCurrentQuestion(CurrentQuestion - 1);
        }
    };

    const getUrl = (name) => {
        if (name === "Water Pollution") {
            return "https://ecotrack.onrender.com/forms/waterPollutionForm";
        } else if (name === "Air Pollution") {
            return "https://ecotrack.onrender.com/forms/airPollutionForm";
        } else if (name === "Climate Patterns") {
            return "https://ecotrack.onrender.com/forms/climatePatternsForm";
        } else if (name === "Deforestation Rate") {
            return "https://ecotrack.onrender.com/forms/deforestationRateForm";
        }
    };

    const handleRightButtonClick = async () => {
        if (CurrentQuestion === 0) {
            setIsLoading(true);
            try {
                const res = await axios.get(
                    getUrl(name) + "/" + response.email
                );
                if (res.data.message !== "Use another email please.") {
                    setEmailErrorMessage("");
                    setCurrentQuestion(CurrentQuestion + 1);
                } else {
                    setEmailErrorMessage(res.data.message);
                }
            } catch (error) {
                setEmailErrorMessage(error.message);
                console.error(error);
            }
            setIsLoading(false);
        } else if (CurrentQuestion === getFormQuestions(name).length) {
            setIsLoading(true);
            try {
                const res = await axios.post(getUrl(name), response);
                alert(res.data.message);
            } catch (error) {
                console.error(error);
            }
            clearStates();
        } else {
            setCurrentQuestion(CurrentQuestion + 1);
        }
    };

    const handleShowingForm = () => {
        setShowForm(true);
        getUserLocation();
    };

    const clearStates = () => {
        setCurrentQuestion(0);
        setResponse({
            email: "",
            location: [],
            optionsArray: [],
        });
        setEmailErrorMessage("");
        setGeolocationErrorMessage("");
        setIsLoading(false);
        setShowForm(false);
    };
    const handleKeyPress = (event) => {
        if (event.key === 'Enter' && !(!isValidEmail(response.email) ||
        geolocationErrorMessage !== "" ||
        emailErrorMessage !== "")) {
            handleRightButtonClick();
        }
    }
    function handleHover(){
        // document.body.getElementsByClassName('form-section').style.backgroundImage =`image${index}`;
    }
    
    
    return (
        <>
            <div className="form-heading" onMouseOver={handleHover}  onClick={handleShowingForm}>
                {name}
            </div>
            {showForm && (
                <div className="form-wrapper">
                    <div className={isLoading ? "form loading" : "form"}>
                        {CurrentQuestion === 0 ? (
                            <>
                                <h1 className="question">
                                    Enter your Email here
                                </h1>
                                <input
                                    className="email-input"
                                    type="email"
                                    placeholder="ex- geetanjali20204@gmail.com"
                                    value={response.email}
                                    onKeyDown={handleKeyPress}
                                    onChange={(event) => {
                                        setEmailErrorMessage("");
                                        setResponse({
                                            ...response,
                                            email: event.target.value,
                                        });
                                    }}
                                ></input>
                                {geolocationErrorMessage && (
                                    <h4 className="error-message">
                                        {geolocationErrorMessage}
                                    </h4>
                                )}
                                {emailErrorMessage && (
                                    <h4 className="error-message">
                                        {emailErrorMessage}
                                    </h4>
                                )}
                            </>
                        ) : (
                            <>
                                <h4 className="progress-text">
                                    {`${name} Question ${CurrentQuestion}/${
                                        getFormQuestions(name).length
                                    }`}
                                </h4>
                                <h1 className="question">
                                    {
                                        getFormQuestions(name)[
                                            CurrentQuestion - 1
                                        ].question
                                    }
                                </h1>

                                {getFormQuestions(name)[
                                    CurrentQuestion - 1
                                ].options.map((option, index) => {
                                    return (
                                        <h3
                                            key={index}
                                            className={
                                                response.optionsArray[
                                                    CurrentQuestion - 1
                                                ] === index
                                                    ? "option clicked"
                                                    : "option"
                                            }
                                            onClick={() =>
                                                setResponse({
                                                    ...response,
                                                    optionsArray: [
                                                        ...response.optionsArray.splice(
                                                            0,
                                                            CurrentQuestion - 1
                                                        ),
                                                        index,
                                                        ...response.optionsArray.splice(
                                                            CurrentQuestion
                                                        ),
                                                    ],
                                                })
                                            }
                                        >
                                            {option}
                                        </h3>
                                    );
                                })}
                            </>
                        )}
                        <button
                            type="button"
                            className="left-btn"
                            onClick={handleLeftButtonClick}
                        >
                            {CurrentQuestion === 0 ? "CANCEL" : "BACK"}
                        </button>
                        <button
                            type="button"
                            className="right-btn"
                            onClick={handleRightButtonClick}
                            disabled={
                                !isValidEmail(response.email) ||
                                geolocationErrorMessage !== "" ||
                                emailErrorMessage !== "" ||
                                (CurrentQuestion !== 0 && response.optionsArray[CurrentQuestion-1] === undefined)
                            }
                        >
                            {getText()}
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};
