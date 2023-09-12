import React from 'react';
import { Card, CardHeader, Avatar, Typography, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {BestPerformerData} from '../../../constants/BestPerformerData';
import './BestPerformerList.css';

const theme = createTheme({
  typography: {
    fontFamily: 'Manrope, sans-serif',
  },
});

const BestPerformerList = () => {
  // Sort employeeData array by points in descending order
  const sortedEmployeeData = BestPerformerData.sort((a, b) => b.points - a.points);

  // Get the top 8 employees
  const topEmployees = sortedEmployeeData.slice(0, 8);

  return (
    <div className="best-Performer-container">
    
      <ThemeProvider theme={theme}>
      
      
      
      <Card className="card-list">
        <CardHeader
          title={
            <Typography variant="h6" className="card-title">
              <b>Best Performer</b>
            </Typography>
          }
        />
        <div className="row-line"></div>
        <List>
          {topEmployees.map((employee, index) => (
            <React.Fragment key={index}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar src={employee.avatar} alt="Avatar" className="card-listimg" />
                </ListItemAvatar>
                <ListItemText>
                  <Typography variant="subtitle1" className="list-name">
                    {employee.id} - <b>{employee.name}</b>
                  </Typography>
                  <Typography variant="body2" className="designation-name">
                    {employee.designation}
                  </Typography>
                  <Typography variant="body2" className="designation-points">
                    <b>Points: {employee.points}</b>
                  </Typography>
                </ListItemText>
              </ListItem>
              {index !== topEmployees.length - 1 && (
                <div className="row-line"></div>
              )}
            </React.Fragment>
          ))}
        </List>
      </Card>
    </ThemeProvider>
    </div>
  );
};

export default BestPerformerList;
