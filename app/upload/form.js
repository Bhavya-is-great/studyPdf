'use client';
import React, { useRef, useState } from 'react';
import axios from 'axios';

const Form = () => {
    const fileInputRef = useRef(null);
    const [filechoose, setFileChoose] = useState('');
    const [type, setType] = useState('--None--');
    const text1 = useRef(null);
    const text2 = useRef(null);
    const text3 = useRef(null);
    const text4 = useRef(null);

    const select = useRef(null);
    const caret = useRef(null);
    const menu = useRef(null);
    const selected = useRef(null);

    const opt1 = useRef(null);
    const opt2 = useRef(null);
    const opt3 = useRef(null);
    const opt4 = useRef(null);
    const opt5 = useRef(null);
    const opt6 = useRef(null);
    const [standard, setStandard] = useState(1);

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


    const HandleClick = (e) => {
        let st = e.target.innerHTML;
        st = st.replace('<button>', '');
        st = st.replace('</button>', '');

        setType(st);

        opt2.current.classList.remove('active');
        opt3.current.classList.remove('active');
        opt4.current.classList.remove('active');
        opt5.current.classList.remove('active');
        opt6.current.classList.remove('active');

        e.target.classList.add('active');

        select.current.classList.remove('select-clicked');
        caret.current.classList.remove('caret-rotate');
        menu.current.classList.remove('menu-open');

        select.current.classList.add('select');
        caret.current.classList.add('caret');
        menu.current.classList.add('menu');

    }

    const handleclick = (e) => {
        // const options = menuRef.current.querySelectorAll('li');
        select.current.classList.toggle('select-clicked');
        caret.current.classList.toggle('caret-rotate');
        menu.current.classList.toggle('menu-open');
    }

    const HandleChange = (e) => {

        if (e.target.files.length != 0) {
            const filename = e.target.files[0].name;

            setFileChoose(filename);
        } else {
            setFileChoose('');
        }
    }

    const setFile = () => {
        if (filechoose == '') {
            return 'No file Choosen';
        } else {
            return filechoose;
        }
    }

    const handleStandard = (incdec) => {
        if (incdec == 'inc') {
            if (standard != 12) {
                setStandard(standard + 1);
            }
        } else if (incdec == 'dec') {
            if (standard != 1) {
                setStandard(standard - 1)
            }
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (filechoose == '' || type == '--None--' || text1.current.value == '' || text2.current.value == '' || text3.current.value == '') {
            return sendNotification('warning', 'Plz fill all the details');
        }


        const formData = new FormData();
        formData.append('pdf_File', fileInputRef.current.files[0]);
        formData.append('standard', standard);
        formData.append('subject', text1.current.value);
        formData.append('title', text2.current.value);
        formData.append('institute', text3.current.value);
        formData.append('year', text4.current.value);
        formData.append('type', type);


        axios.post(`http://study-pdf.infinityfreeapp.com/fileupload.php`, formData)
            .then((response) => {
                if (response.data == 'SuccessFully Uploaded the file') {
                    sendNotification('success', 'SuccessFully Uploaded the file');
                    text1.current.value = '';
                    text2.current.value = '';
                    text3.current.value = '';
                    text4.current.value = '';
                    setStandard(1);
                    setType('--None--');
                    setFileChoose('');
                } else {
                    sendNotification('warning', response.data);
                    text1.current.value = '';
                    text2.current.value = '';
                    text3.current.value = '';
                    text4.current.value = '';
                    setStandard(1);
                    setType('--None--');
                    setFileChoose('');
                }
            })
            .catch((error) => console.error(error));
    };

    return (
        <div className='fixed overflow-y-auto left-0 top-0 right-0 bottom-0 flex justify-center items-center'>
            <div style={{ zIndex: ind }} ref={notificationRef} className="notification-box flex flex-col items-center justify-center fixed w-full p-3">
                {
                    show && <Ele />
                }
            </div>
            <form onSubmit={handleSubmit} className='upload-form mt-[20rem] mb-24'>

                <div className=' divv'>

                    <div className="title p-5 flex justify-center items-center text-2xl font-bold">
                        Uplaod a File
                    </div>

                    <div>
                        <input onChange={HandleChange} type="file" name="pdf_file" className='hidden' id="pdf_file" ref={fileInputRef} />
                        <label htmlFor="pdf_file" className="upload my-6"><span className=''><ion-icon name="cloud-upload-outline"></ion-icon></span> Upload file</label>
                    </div>

                    <div className='my-6 py-2'>
                        Choosen File: <span className='bg-slate-300 p-3 name '>{setFile()}</span>
                    </div>

                    <div title='Standard' className="input-data my-6 flex justify-center text-2xl items-center">
                        <span className='p-4 bg-black text-white standard-txt'>
                            <ion-icon onClick={() => handleStandard('dec')} className='cursor-pointer' name="remove-outline"></ion-icon>&nbsp;&nbsp;
                            {standard}&nbsp;&nbsp;
                            <ion-icon onClick={() => handleStandard('inc')} className='cursor-pointer' name="add-outline"></ion-icon>
                        </span>
                    </div>

                    <div>
                        <div className="input-data my-6">
                            <input ref={text1} list='subjects' type="text" id='subject' placeholder=' ' />
                            <div className="underline"></div>
                            <datalist id='subjects'>
                                {
                                    sub11.map((sub, i) => {
                                        return (
                                            <option key={i} value={`${sub}`}></option>
                                        );
                                    })
                                }
                            </datalist>
                            <label htmlFor="subject">Subject</label>
                        </div>
                    </div>

                    <div>
                        <div className="input-data my-6">
                            <input ref={text2} type="text" id='file_name' placeholder=' ' />
                            <div className="underline"></div>
                            <label htmlFor="file_name">Title</label>
                        </div>
                    </div>

                    <div>
                        <div className="input-data my-6">
                            <input ref={text3} type="text" id='institute' placeholder=' ' />
                            <div className="underline"></div>
                            <label htmlFor="institute">Institute</label>
                        </div>
                    </div>

                    <div>
                        <div className="input-data my-6">
                            <input ref={text4} type="number" id='year' placeholder=' ' />
                            <div className="underline"></div>
                            <label htmlFor="year">Year</label>
                        </div>
                    </div>

                    <div className="dropdown">
                        <div ref={select} className="select" onClick={handleclick}>
                            <span ref={selected} className="selected"><button>{type}</button></span>
                            <div ref={caret} className="caret"></div>
                        </div>

                        <ul ref={menu} className="menu">
                            <li ref={opt1} className='active hidden'>--None--</li>
                            <li ref={opt2} onClick={HandleClick}><button>Term 1</button></li>
                            <li ref={opt3} onClick={HandleClick}><button>Term 2</button></li>
                            <li ref={opt4} onClick={HandleClick}><button>Final term</button></li>
                            <li ref={opt5} onClick={HandleClick}><button>Textbook</button></li>
                            <li ref={opt6} onClick={HandleClick}><button>Reference</button></li>
                        </ul>
                    </div>

                    <div>
                        <button type="submit" className='upload my-8'>Submit</button>
                    </div>

                </div>
            </form>
        </div>
    );
};

export default Form;