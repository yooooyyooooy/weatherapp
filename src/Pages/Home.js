import React from "react";

//Components
import { Box, Input, makeStyles } from "@material-ui/core";
import StyledPaper from "../Themes/StyledPaper";
import SearchIcon from '@material-ui/icons/Search';
//styles
const useStyles = makeStyles((theme) => ({
  rearBackground: {
    background: "linear-gradient(0deg, #FE6B8B 30%, #FF8E53 90%)",
    minWidth: "100vw",
    minHeight: "100vh",
    // position: "absolute",
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center"
  },
  componentsBox: {
    padding: "20px",
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center"
    
  },
  searchBoxCover: {
    width: "100%" ,
    // display: "flex",
    // justifyItems: "center",

  },
  searchBox: {
    padding: "1%",
    backgroundColor: "rgba(255,255,255,0.5)",
    borderRadius: "16px",
    width: "100%" 
    // boxShadow: "0 2px"

  },
  locationBox: {

  },
  location: {

  },
  date: {

  },
  time: {
    
  },
  tempBox: {

  },
  temp: {

  },

}));

export default function Home() {
  const classes = useStyles();
  const date = new Date().toLocaleDateString();
  const time = new Date().toLocaleTimeString();
  return (
    <>
      <Box className={classes.rearBackground}>
        <Box className = {classes.componentsBox}>
          <Box className={classes.searchBoxCover}>
            <Input type="text" placeholder="Search..." disableUnderline="true" className={classes.searchBox}/>
          </Box>
          <Box className= {classes.locationBox}>
            <Box className= {classes.location}>
              Bangkok, Thailand
            </Box>
            <Box className= {classes.date}>
              {date}<br/>{time}
            </Box>
          </Box>
          <Box className= {classes.tempBox}>
            25 C<br/>Windy
          </Box>

        </Box>
      </Box>
    </>
  );
}
