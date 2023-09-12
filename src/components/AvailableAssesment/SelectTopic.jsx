import React, { useState } from 'react';
import { StyledFormControl, StyledListItem, StyledMenuItem, StyledCheck, StyledUnCheck } from '../StyledComponents/StyledAvailableAssessment';
import { InputLabel, Select, OutlinedInput, Checkbox, Badge, InputAdornment, Tooltip } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { EnterNewTopic } from './EnterNewComponent';
import { departmentAndTopics } from '../../constants/constant';

const SelectTopic = () => {
  const [selectedTopics, setSelectedTopics] = useState([])

  const handleSelect = (event) => {
    const selectedValue = event.target.value;
    setSelectedTopics(prevSelectedTopics => {
      if (prevSelectedTopics.includes(selectedValue)) {
        return prevSelectedTopics.filter(topic => topic !== selectedValue);
      } else {
        return [...prevSelectedTopics, selectedValue];
      }
    });
  }

  return (
    <StyledFormControl>
      <InputLabel id="multiple-topic-label">Select Topic</InputLabel>
      <Select
        labelId="multiple-topic-label"
        id="topic"
        value={selectedTopics}
        multiple
        renderValue={(selected) => selected.join(', ')}
        input={<OutlinedInput label="Select Topic" />}
        IconComponent={KeyboardArrowDownIcon}
        endAdornment={
          <InputAdornment position="end">
            <Tooltip title={selectedTopics.toString()}>
            <Badge badgeContent={selectedTopics.length ?? 0} color={'info'}>
            </Badge>
            </Tooltip>
          </InputAdornment>
        }
      >
        <EnterNewTopic />
        {departmentAndTopics.flatMap(d => d.topics).map((topic, index) => (
          <StyledMenuItem key={index} value={topic}>
            <Checkbox
              value={topic}
              name={topic}
              icon={<StyledUnCheck />}
              checkedIcon={<StyledCheck />}
              onChange={handleSelect}
            />
            <StyledListItem primary={topic} />
          </StyledMenuItem>
        ))}
      </Select>
    </StyledFormControl>
  );
};

export default SelectTopic;
