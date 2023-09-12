import { Container, Grid } from "@mui/material";
import Cardcomponent from "./Cardcomponent";

import {exploreCardData} from "../../../constants/constants";
import { CreateAssessment } from "../AssessmentForms/CreateAssessment";
import { EmployeeAssess } from "../AssessmentForms/EmployeeAssess";
import { JobSeeker } from "../AssessmentForms/JobSeeker";

import { Girl, Margin } from "@mui/icons-material";

function Explorecard() {
  return (
    <div>
      <Container maxWidth="100%" >
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={6}>
            <JobSeeker />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <EmployeeAssess />
          </Grid>
        </Grid>

        <Grid>
          <p style={{ marginTop: "4rem" ,marginBottom:"4rem" ,fontFamily:"Manrope",fontWeight:"bold",fontSize:"20px"}}>
            EXPLORE
          </p>
        </Grid>

        <Grid container spacing={8} sx={{marginBottom:"10rem"}}>
          {exploreCardData.map((i) => (
            <Grid item xs={12} sm={2} md={4} key={i.title}>
              <Cardcomponent
                content1={i.title}
                content2={i.data}
                imgcontent={i.images}
                routelink={i.routelink}
              ></Cardcomponent>
            </Grid>
          ))}
        </Grid>
        
      </Container>
    </div>
  );
}

export default Explorecard;
