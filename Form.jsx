import {useState} from 'react';
function rm(){
    const [user,setUser]=useState('');
    function handleChangeUserName(e){
        console.log(e.target.value);
        setUser(e.target.value);
    }
    function handleChangePass(e){
        console.log(e.target.value)
    }
    return(
        <>
        <form> 
        USERNAME:
        <input type="text" name="username" onChange={handleChangeUserName}/>
        <br/>
        <br/>
        PASSWORD:
        <input type="text" name="username" onChange={handleChangePass}/>
        <br/>
        <button type="submit">Submit</button>
        </form>
        </>
    )
}
export default Form;