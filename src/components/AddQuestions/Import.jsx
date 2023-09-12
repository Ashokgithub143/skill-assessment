import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { Container } from "@mui/system";
import ImportForm from "./ImportForm";

export function AssessmentCard(props) {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    ></Box>
  );

  return (
    <>
    <Container>
       <React.Fragment key="right">
        <Drawer
          anchor="right"
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
          PaperProps={{
            sx: { width: "37%", padding: "2rem"},
          }}
        >

       <ImportForm closeDrawer={() => setState({ ...state, right: false })}/>
          {props.form}
        </Drawer>
      </React.Fragment>
    </Container>
    <Button 
              onClick={toggleDrawer("right", true)}
              className="import"
              variant="outlined"
              sx={{
                color: "black",
                fontWeight: 300,
                height:50,
                width:203,
                gap:2,
                position:"relative"
              }}
              size="small"
            >
              <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="download">
              <path d="M1 11V17C1 17.5304 1.25015 18.0391 1.69541 18.4142C2.14067 18.7893 2.74457 19 3.37427 19H17.6199C18.2496 19 18.8535 18.7893 19.2987 18.4142C19.744 18.0391 19.9942 17.5304 19.9942 17V11M10.4971 1V13M10.4971 13L6.34211 9.5M10.4971 13L14.652 9.5" stroke="#373F47" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              Import Questions
      </Button>
    </>
  );
}
