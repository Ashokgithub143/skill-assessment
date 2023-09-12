import React from 'react';
import { Card, CardHeader, Avatar, Typography, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './BestPerformerList.css';
import { ProfileCardData } from '../../../constants/ProfileCardData';

const theme = createTheme({
  typography: {
    fontFamily: 'Manrope, sans-serif',
  },
});

const ManagerCard = ({ selectedDepartment }) => {
  const managerProfiles = ProfileCardData.filter(
    (employee) => employee.designation === 'Manager' && (!selectedDepartment || employee.domain === selectedDepartment)
  );

  return (
    <div className="best-Performer-container">
      <ThemeProvider theme={theme}>
      {selectedDepartment && managerProfiles.length > 0 ? (
        <Card className="card-list">
          <CardHeader
            title={
              <Typography variant="h6" className="card-title">
                <b>Reporting Manager</b>
              </Typography>
            }
          />
          <div className="row-line"></div>
          <List>
            {managerProfiles.map((employee, index) => (
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
                    {employee.domain}
                  </Typography>
                  </ListItemText>
                </ListItem>
              </React.Fragment>
            ))}
          </List>
        </Card>
        ) : (
          <Typography></Typography>
        )}
      </ThemeProvider>
    </div>
  );
};

export default ManagerCard;
