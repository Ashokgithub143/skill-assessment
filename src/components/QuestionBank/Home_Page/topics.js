import React from 'react';
import { Grid, Paper } from '@mui/material';
import topicstyle from './topics.module.css';
import java from '../../../assets/img/image 1.png';
import css from '../../../assets/img/download.png';
import python from '../../../assets/img/python_wiki.jpg';
import Chip from '@mui/material/Chip';
import jquery from '../../../assets/img/jquery.png';
import react from '../../../assets/img/react.png';
import figma from '../../../assets/img/figma.png';
import azure from '../../../assets/img/azure.png';
import html from '../../../assets/img/html.png';
import { RightCircleOutlined } from '@ant-design/icons';
import { EditOutlined } from '@ant-design/icons';
import { RightOutlined } from '@ant-design/icons';
import Button from '@mui/material/Button';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import QuestionDisplay from '../Topic_Questions/question_display';
import { Link } from "react-router-dom";


function Topics() {
 
  return (
   <div style={{width:'100%'}}>
    
    <Grid container spacing={2}>
      <Grid item xs={3} >
        <Paper className={topicstyle.paper_Style} >
            <img src={java} alt="java" className={topicstyle.image}></img>
            <p className={topicstyle.topic_Name}>Java</p>
            <div className={topicstyle.chip_Style}><p className={topicstyle.total_Questions}>250 Questions</p></div>
            <span className={topicstyle.circle_Design}> <RightOutlined className={topicstyle.arrow_Design} /></span>
        </Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper className={topicstyle.paper_Style}>
        <img src={css} alt="css" className={topicstyle.image}></img>
        <p className={topicstyle.topic_Name}>CSS</p>
        <div className={topicstyle.chip_Style}><p className={topicstyle.total_Questions}>250 Questions</p></div>
       
        <span className={topicstyle.circle_Design}> <RightOutlined className={topicstyle.arrow_Design} /></span>
       

     
        </Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper className={topicstyle.paper_Style}>
        <img src={python} alt="python" className={topicstyle.image}></img>
        <p className={topicstyle.topic_Name}>Python</p>
        <div className={topicstyle.chip_Style}><p className={topicstyle.total_Questions}>250 Questions</p></div>
        <span className={topicstyle.circle_Design}> <RightOutlined className={topicstyle.arrow_Design} /></span>
        </Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper className={topicstyle.paper_Style}>
        <img src={jquery} alt="jquery" className={topicstyle.image}></img>
        <p className={topicstyle.topic_Name}>Jquery</p>
        <div className={topicstyle.chip_Style}><p className={topicstyle.total_Questions}>250 Questions</p></div>
        <span className={topicstyle.circle_Design}> <RightOutlined className={topicstyle.arrow_Design} /></span>
        </Paper>
      </Grid>
     
    </Grid>
    <Grid container spacing={2}>
    <Grid item xs={3} >
      <Paper className={topicstyle.paper_Style} >
      <img src={react} alt="react" className={topicstyle.image}></img>
        <p className={topicstyle.topic_Name}>React</p>
        <div className={topicstyle.chip_Style}><p className={topicstyle.total_Questions}>250 Questions</p></div>
        <span className={topicstyle.circle_Design}> <RightOutlined className={topicstyle.arrow_Design} /></span>
      </Paper>
    </Grid>
    <Grid item xs={3}>
      <Paper className={topicstyle.paper_Style}>
      <img src={figma} alt="figma" className={topicstyle.image}></img>
        <p className={topicstyle.topic_Name}>Figma</p>
        <div className={topicstyle.chip_Style}><p className={topicstyle.total_Questions}>250 Questions</p></div>
        <span className={topicstyle.circle_Design}> <RightOutlined className={topicstyle.arrow_Design} /></span>
      </Paper>
    </Grid>
    <Grid item xs={3}>
      <Paper className={topicstyle.paper_Style}>
      <img src={azure} alt="azure" className={topicstyle.image}></img>
        <p className={topicstyle.topic_Name}>Azure</p>
        <div className={topicstyle.chip_Style}><p className={topicstyle.total_Questions}>250 Questions</p></div>
        <span className={topicstyle.circle_Design}> <RightOutlined className={topicstyle.arrow_Design} /></span>
      </Paper>
    </Grid>
    <Grid item xs={3}>
      <Link to="/questiondisplay" >
      <Paper className={topicstyle.paper_Style}>
      <img src={html} alt="html" className={topicstyle.image}></img>
        <p className={topicstyle.topic_Name}>HTML</p>
        <div className={topicstyle.chip_Style}><p className={topicstyle.total_Questions}>250 Questions</p></div>
        <span className={topicstyle.circle_Design}> <RightOutlined className={topicstyle.arrow_Design} /></span>
      </Paper>
      </Link>
    </Grid>
   
  </Grid>
  
  </div>
      
 
    
  
    
  );
}

export default Topics;