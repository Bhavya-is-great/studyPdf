'use client';
import React, { useState, useRef } from 'react';
import Drop from '../../components/Drop';
import axios from 'axios';

const Form = ({ getdata }) => {

    const standardlist = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const [standard, setStandard] = useState('Standard');

    const typelist = ['Term 1', 'Term 2', 'Final term', 'Textbook', 'Reference'];
    const [type, setType] = useState('Type');

    const Subjecths = ['All', 'Accounts', 'Oc', 'Eco', 'Hindi', 'Stats', 'English', 'spcc', 'elega', 'computer', 'pt']
    const subjectss = ['All', 'English', 'Hindi', 'Science', 'Maths', 'sst', 'Gujarati', 'computer', 'pt'];

    const Givelist = () => {
        if (standard == 11 || standard == 12) {
            return Subjecths;
        } else {
            return subjectss;
        }
    }

    const [subject, setSubject] = useState('Subject');

    const submitdata = () => {

        if (standard == 'Standard' || type == 'Type' || subject == 'Subject') {
            return sendNotification('warning', 'Plz select all the Details');
        }

        const data = new FormData();

        data.append('standard', standard);
        data.append('subject', subject);
        data.append('type', type);

        getdata(data);
    }

    const [colour, setcolour] = useState('');
    const [icon, setIcon] = useState('');
    const [textgot, settextgot] = useState('');
    const [show, setShow] = useState(false);
    const [opa0, setOpa0] = useState(true);
    const [opa1, setOpa1] = useState(false);
    const notificationRef = useRef(null);
    const component = useRef(null);
    const [ind, setInd] = useState(-999);

    const sub11 = ['Accounts', 'Oc', 'Eco', 'Stats', 'Hindi', 'English', 'Elega', 'pt', 'spcc', 'Science', 'Maths', 'Gujarati', 'sst', 'computer'];
    // const sub10 = ['Science', 'Maths', 'Hindi', 'English', 'Gujarati', 'sst', 'computer', 'pt'];

    const sendNotification = (type, text) => {
        let notificationBox = notificationRef.current;
        const alerts = {
            info: {
                icon: `<svg class="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>`,
                color: "bg-blue-500"
            },
            error: {
                icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>`,
                color: "bg-red-500"
            },
            warning: {
                icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>`,
                color: "bg-yellow-500"
            },
            success: {
                icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>`,
                color: "bg-green-500"
            }
        };
        // let component = document.createElement("div");
        // component.className = `relative flex items-center bg-${alerts[type].color} text-white text-sm font-bold px-4 py-3 rounded-md opacity-0 transform transition-all duration-500 mb-1`;
        setcolour(`${alerts[type].color}`);
        settextgot(text);
        setIcon(type)
        // component.innerHTML = `${alerts[type].icon}<p>${text}</p>`;
        // notificationRef.current.appendChild(component);
        setShow(true);
        setTimeout(() => {
            // component.current.classList.remove("opacity-0");
            setOpa0(false);
            // component.current.classList.add("opacity-1");
            setOpa1(true);
            setInd(999)
        }, 1); //1ms For fixing opacity on new element
        setTimeout(() => {
            // component.current.classList.remove("opacity-1");
            setOpa1(false);
            setInd(-999)
            // component.current.classList.add("opacity-0");
            setOpa0(true);
            //component.classList.add("-translate-y-80"); //it's a little bit buggy when send multiple alerts

            if (component.current) {
                component.current.style.margin = 0;
                component.current.style.padding = 0;
                // component.current.style.setProperty("height", "0", "important");
            }

        }, 2000);
        setTimeout(() => {
            // component.current.style.setProperty("height", "0", "important");
            if (component.current) {
                component.current.style.setProperty("height", "0", "important");
            }
        }, 2000);
        setTimeout(() => {
            setShow(false);
            setInd(-999);
        }, 2000);
        //If you can do something more elegant than timeouts, please do, but i can't
    }

    const IcoInfo = () => {
        return (
            <svg
                className="w-6 h-6 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
            </svg>

        )
    };

    const IcoError = () => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
            </svg>

        )
    };

    const IcoWarning = () => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
            </svg>

        )
    };

    const IcoSuccess = () => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
            </svg>

        )
    };

    const setIco = () => {
        if (icon == 'info') {
            return <IcoInfo />
        }
        if (icon == 'error') {
            return <IcoError />
        }
        if (icon == 'success') {
            return <IcoSuccess />
        }
        if (icon == 'warning') {
            return <IcoWarning />
        }
    };

    const Ele = () => {
        return (
            <>
                <div ref={component} className={`relative flex items-center ${colour} text-white text-sm font-bold px-4 py-3 rounded-md ${opa0 && 'opacity-0'} ${opa1 && 'opacity-100'} transform transition-all duration-500 mb-1`}>
                    {setIco()}<p>{textgot}</p>
                </div>
            </>
        )
    }

    return (
        <div className='fixed top-24 m-0 p-0 mb-[50px] overflow-y-auto right-0 left-0 bottom-0 flex items-center flex-col'>

            <div style={{ zIndex: ind }} ref={notificationRef} className="notification-box flex flex-col items-center justify-center fixed w-full p-3">
                {
                    show && <Ele />
                }
            </div>

            <div className='inline-block'>
                <h2 className='text-2xl max-md:px-4 max-sm:text-xl'>Standard:</h2>
                <Drop list={standardlist} Name={standard} update={setStandard}></Drop>
            </div>

            <div>
                <h2 className='text-2xl max-md:px-4 max-sm:text-xl'>Type:</h2>
                <Drop list={typelist} Name={type} update={setType}></Drop>
            </div>

            <div>
                <h2 className='text-2xl max-md:px-4 max-sm:text-xl'>Subject:</h2>
                <Drop list={Givelist()} Name={subject} update={setSubject}></Drop>
            </div>

            <div>
                <button onClick={submitdata} className='upload'>Submit</button>
            </div>

            {/* <div>
                {
                    subjectss.map((item, i) => { return (<h1 key={i}>{item}</h1>) })
                }
            </div> */}

        </div>
    )
}

export default Form
