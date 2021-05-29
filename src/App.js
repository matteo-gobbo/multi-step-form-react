import React, { useState } from 'react';
import './App.css';

function App() {
    const [step, setStep] = useState(0);
    const [formData, setFormData] = useState({
        info: {},
        user: {}
    });

    function goNextStep() {
        setStep(previousStep => previousStep + 1);
    }

    function updateData(type, newData) {
        setFormData((data) => {
            return { ...data, [type]: newData };
        });
    }

    return (
        <div>
            {step === 0 && <FirstStep goNextStep={goNextStep} update={updateData}></FirstStep>}
            {step === 1 && <SecondStep goNextStep={goNextStep} update={updateData}></SecondStep>}
            {step === 2 && <ThirdStep data={formData} update={updateData}></ThirdStep>}
        </div>
    );
}

function FirstStep({ update, goNextStep }) {
    const [newData, setNewData] = useState({});

    function handleClick() {
        update("info", newData);
        goNextStep();
    }

    return <div>
        <label htmlFor="email">
            Email
            <input type="text" name="email" onChange={(e) => setNewData({...newData, email: e.target.value})}/>
        </label>
        <label htmlFor="password">
            Password
            <input type="text" name="password" onChange={(e) => setNewData({...newData, password: e.target.value})}/>
        </label>
        <button onClick={handleClick}>Send</button>
    </div>
}

function SecondStep({ update, goNextStep }) {
    const [newData, setNewData] = useState({});

    function handleClick() {
        update("user", newData);
        goNextStep();
    }

    return <div>
        <label htmlFor="firstname">
            First Name
            <input type="text" name="firstname" onChange={(e) => setNewData({...newData, firstname: e.target.value})}/>
        </label>
        <label htmlFor="lastname">
            Last Name
            <input type="text" name="lastname" onChange={(e) => setNewData({...newData, lastname: e.target.value})}/>
        </label>
        <label htmlFor="phonenumber">
            Phone Number
            <input type="text" name="phonenumber" onChange={(e) => setNewData({...newData, phonenumber: e.target.value})}/>
        </label>
        <button onClick={handleClick}>Send</button>
    </div>
}

function ThirdStep({ data }) {

    return <div>
        Email: {data?.info?.email}
        First name: {data?.user?.firstname}
        Last name: {data?.user?.lastname}
        Phone number: {data?.user?.phonenumber}
        <button type="submit">Submit</button>
    </div>
}

export default App;
