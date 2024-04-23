'use client';
import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';

const LoginSignup = () => {

    const [loginemail, setloginemail] = useState('');
    const [loginpassword, setloginpassword] = useState('');

    const [signupname, setsignupname] = useState('');
    const [signupemail, setsignupemail] = useState('');
    const [signuppassword, setsignuppassword] = useState('');

    const notificationRef = useRef(null);
    const component = useRef(null);

    const [signupdata, setSignupData] = useState([]);
    const [logindata, setLoginData] = useState([]);

    const [colour, setcolour] = useState('');
    const [icon, setIcon] = useState('');
    const [textgot, settextgot] = useState('');
    const [show, setShow] = useState(false);
    const [opa0, setOpa0] = useState(true);
    const [opa1, setOpa1] = useState(false);

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
        }, 1); //1ms For fixing opacity on new element
        setTimeout(() => {
            // component.current.classList.remove("opacity-1");
            setOpa1(false);
            // component.current.classList.add("opacity-0");
            setOpa0(true);
            //component.classList.add("-translate-y-80"); //it's a little bit buggy when send multiple alerts

            if (component.current) {
                component.current.style.margin = 0;
                component.current.style.padding = 0;
                // component.current.style.setProperty("height", "0", "important");
            }

        }, 5000);
        setTimeout(() => {
            // component.current.style.setProperty("height", "0", "important");
            if (component.current) {
                component.current.style.setProperty("height", "0", "important");
            }
        }, 5100);
        setTimeout(() => {
            setShow(false)
        }, 5700);
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


    const handleloginemail = (e) => {
        let value = e.target.value;
        setloginemail(value);
    }

    const handleloginpassword = (e) => {
        let value = e.target.value;
        setloginpassword(value);
    }

    const handlesignupname = (e) => {
        let value = e.target.value;
        setsignupname(value);
    }

    const handlesignupemail = (e) => {
        let value = e.target.value;
        setsignupemail(value);
    }

    const handlesignuppassword = (e) => {
        let value = e.target.value;
        setsignuppassword(value);
    }

    const HandleSignup = () => {
        axios.post('http://localhost/php%20learnings/Projects/Studypdf/signup.php', { name: signupname, email: signupemail, password: signuppassword })
            .then((res) => { setSignupData(res.data); HandleSignupData(); })
            .catch(err => console.log((err)))
    }

    const HandleLogin = () => {
        axios.post('http://localhost/php%20learnings/Projects/Studypdf/login.php', { email: loginemail, password: loginpassword })
            .then((res) => { setLoginData(res.data); HandleLogindata(); })
            .catch(err => console.log((err)));
    }

    // useEffect(() => {
    //     if (JSON.stringify(signupdata) != '[]') {
    //         if (signupdata == "Signed up SuccessFully") {
    //             sendNotification('success', "Signed up SuccessFully!");
    //         }
    //         if (signupdata == "User Already Exist Login Plz") {
    //             sendNotification('warning', "User Already Exist Login Plz!");
    //         }
    //         if (signupdata == "Failed") {
    //             sendNotification('error', "Some Server issues Plz try agin after a minute!");
    //         }
    //     }
    // }, [signupdata]);

    const HandleSignupData = () => {
        if (JSON.stringify(signupdata) != '[]') {
            if (signupdata == "Signed up SuccessFully") {
                sendNotification('success', "Signed up SuccessFully!");
            }
            if (signupdata == "User Already Exist Login Plz") {
                sendNotification('warning', "User Already Exist Login Plz!");
            }
            if (signupdata == "Failed") {
                sendNotification('error', "Some Server issues Plz try agin after a minute!");
            }
        }
    }

    // useEffect(() => {
    //     if (JSON.stringify(logindata) != '[]') {
    //         if (loginpassword == logindata[0].password) {
    //             sendNotification('success', 'Login Successfull!');
    //         } else {
    //             sendNotification('error', 'Wrong password enter Again!');
    //         }
    //     }
    // }, [logindata]);

    const HandleLogindata = () => {
        if (JSON.stringify(logindata) != '[]') {
            if (loginpassword == logindata[0].password) {
                sendNotification('success', 'Login Successfull!');
            } else {
                sendNotification('error', 'Wrong password enter Again!');
            }
        }
    }

    useEffect(() => { sendNotification('info', 'Hello user!'); }, [])

    return (
        <>
            <div ref={notificationRef} className="notification-box flex flex-col items-center justify-center fixed w-full z-50 p-3">
                {
                    show && <Ele />
                }
            </div>

            <div className="login-div">
                <div className="cont1">
                    <input type="checkbox" id="flip" />
                    <div className="cover">
                        <div className="front">
                            <img src="/logo.png" alt="" />
                            <div className="text">
                                <span className="text-1">A service to all<br /></span>
                                <span className="text-2">join now</span>
                            </div>
                        </div>
                        <div className="back">
                            <div className="text">
                                <span className="text-1">Complete miles of journey <br /> with one step</span>
                                <span className="text-2">Let's get started</span>
                            </div>
                        </div>
                    </div>
                    <div className="forms">



                        <div className="form-content">
                            <div className="login-form">





                                <div className="title">Login</div>
                                <div className="input-boxes">
                                    <div className="input-box">
                                        <i className="fas fa-envelope" />
                                        <input onChange={handleloginemail} value={loginemail} id="loginemail" type="text" placeholder="Enter your email" required />
                                    </div>
                                    <div className="input-box">
                                        <i className="fas fa-lock" />
                                        <input onChange={handleloginpassword} value={loginpassword} id="loginpassword" type="password" placeholder="Enter your password" required />

                                    </div>
                                    {/* <div class="text"><a href="#">Forgot password?</a></div> */}
                                    <div className="button input-box">
                                        <input onClick={HandleLogin} type="button" value="Sumbit" />
                                    </div>
                                    <div className="text sign-up-text">Don't have an account? <label htmlFor="flip">Sigup now</label></div>
                                </div>
                            </div>




                            <div className="signup-form">
                                <div className="title">Signup</div>
                                {/* <form onsubmit="signupjs()"> */}
                                <div className="input-boxes">
                                    <div className="input-box">
                                        <i className="fas fa-user" />
                                        <input onChange={handlesignupname} value={signupname} type="text" id="signupname" placeholder="Enter your name" name="name" required />
                                    </div>
                                    <div className="input-box">
                                        <i className="fas fa-envelope" />
                                        <input onChange={handlesignupemail} value={signupemail} type="text" name="email" id="signupemail" placeholder="Enter your email" required />
                                    </div>
                                    <div className="input-box">
                                        <i className="fas fa-lock" />
                                        <input onChange={handlesignuppassword} value={signuppassword} type="password" id="signuppassword" name="password" placeholder="Enter your password" required />
                                    </div>
                                    <div className="button input-box">
                                        <input type="button" onClick={HandleSignup} value="Submit" />
                                    </div>
                                    <div className="text login-text">Already have an account? <label htmlFor="flip">Login now</label></div>
                                </div>
                                {/* </form> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LoginSignup;