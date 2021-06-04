import React, {useEffect, useState} from "react"
import EventTable from "./EventTable"
import HomeCardTable from "./HomeCardTable"
import ProjectNotesTable from "./ProjectNotesTable"
import TutorialTable from "./TutorialTable"
import WorkshopTable from "./WorkshopTable"
import Layout from "../main/layout"
import { chosenTheme } from "../../../theme"
import { ThemeProvider } from "styled-components"
import ImageUploader from "./ImageUploader"
import Login from "./Login"

const Protected = () => {

  const [user, setUser] = useState(() => {
    const loggedIn = localStorage.getItem("AdminAuth");
    return JSON.parse(loggedIn) ?? false;
  });

  const[ID, setID]= useState('');
  const[IDError, setIDError]= useState('');

  const clearErrors = () =>{
      setIDError('');
  }

  useEffect(() => {
      localStorage.setItem("AdminAuth", JSON.stringify(user));
    }, [user]);


  const handleLogin=()=>{
      clearErrors();
      if(ID==="adminlogin123"){
          setUser(true);
      }else if(ID===""){
          setIDError("This field can't be empty. Access denied!");
      }else{
          setIDError("The ID entered is wrong");
      }
  };

  useEffect(()=>{
      const authListener=()=>{
          if(user){
              setUser(user);
          }else{
              setUser(false);
          }
        
      };

      authListener();
  }, [user]);
  return (
    <>
    {user?(
      <Layout>
        <ThemeProvider theme={chosenTheme}>
          <TutorialTable />
          <br />
          <br />
          <ProjectNotesTable />
          <br />
          <HomeCardTable />
          <br />
          <EventTable />
          <br />
          <WorkshopTable />
          <br />
          <br />
          <ImageUploader/>
        </ThemeProvider>
      </Layout>
    ):(
    <>
      <Login
          ID={ID}
          setID={setID}
          handleLogin={handleLogin}
          IDError={IDError}
          setIDError={setIDError}
      />
    </>
  )}
  </>
)
}

export default Protected
