import {FormEvent, useState} from "react";

export default function RegistrationForm(){

    const [firstname, setFirstname] = useState<string>("")
    const [lastname, setLastname] = useState<string>("")
    const [gender, setGender] = useState<string>("")

    function handleSubmit(event:FormEvent<HTMLFormElement>){
        event.preventDefault() //Ganz wichtig um Fehler zu vermeiden da Seite sonst neu lädt!
        alert("A User was submitted: " + firstname + lastname + gender)
        console.log("Name = " + firstname)
        setFirstname("")
        setLastname("")
    }

    return(
        <>
          <form onSubmit={handleSubmit}>
            <label>
                Firstname:
                <input type={"text"}  placeholder={"Please enter your Firstname"}
                       value={firstname} onChange={(e)=>setFirstname(e.target.value)}/>
            </label>
              <label>
                  Lastame:
                  <input type={"text"}  placeholder={"Please enter your Lastname"}
                         value={lastname} onChange={(e)=>setLastname(e.target.value)}/>
              </label>
              <label>
                  Gender:
                  <select value={gender} onChange={(e) => setGender(e.target.value)}>
                      <option value={""}>No Info</option>
                      <option value={"male"}>Male</option>
                      <option value={"female"}>Female</option>
                      <option value={"other"}>Other</option>
                  </select>
              </label>
              <button>Weiter</button>
          </form>
        </>
    )
}