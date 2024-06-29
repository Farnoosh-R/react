import React from "react";

const Form = (e) => {
    console.log(e);

    const handlechange = (e) => {
        let selectedOption = [...e.target.selectedOptions].map(option => option.value);
        console.log(selectedOption);
    }

    const handleChangeCheckbox = (e) => {
        console.log(e.target.value, e.target.checked);

    }

    let checkItems = [];
    const handleChangeCheckboxArray = (e) => {
        
        let item = checkItems.find(item => item === e.target.value);

        if (item){
            checkItems = checkItems.filter(item => item !== e.target.value);
        }else{
            checkItems.push(e.target.value);
        }

        console.log(checkItems);
    }
const checkRadio = (e) => {
    console.log(e.target.value);
}

    return(
        <div>
         <input type="text" onChange={(e) => Form(e.target.value)}></input>
         <textarea onChange={(e) => Form(e.target.value)}></textarea>

        <select onChange={(e) => Form(e.target.value)}>
            <option value='HTML'>HTML</option>
            <option value='CSS'>CSS</option>
            <option value='PHP'>PHP</option>
        </select>

        <select multiple onChange={(e) => handlechange(e)}>
        <option value='red'>red</option>
        <option value='green'>green</option>
        <option value='blue'>blue</option>
    </select>

    <input type="checkbox" onChange={(e) => handleChangeCheckbox(e)}/>check
    <br />    
    <input type="checkbox" value="check1" onChange={(e) => handleChangeCheckboxArray(e)}/>check1
    <br />
    <input type="checkbox" value="check2" onChange={(e) => handleChangeCheckboxArray(e)}/>check2
    <br />
    <input type="checkbox" value="check3" onChange={(e) => handleChangeCheckboxArray(e)}/>check3
    <br />
    <input type="radio" name="gender" value="male" onChange={(e) => checkRadio(e)}/>male
    <input type="radio" name="gender" value="female" onChange={(e) => checkRadio(e)}/>female

        </div>
    );
}


export default Form;