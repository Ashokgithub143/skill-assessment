import * as React from 'react';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Avatar, Stack } from '@mui/material';
import { ImageList } from '@mui/material';
import Button from '@mui/material/Button';
import EastIcon from '@mui/icons-material/East';
import { styled } from '@mui/material/styles';

const StyledEastIcon = styled(EastIcon)(() => ({
    width:'15px',
    height:'15px', 
    position:'relative', 
    top:'2px'
}))


export const CardComponent = (props) => {
    return (
        <React.Fragment>
            <CardContent>
                <div className='card-flex'>
                    <Typography className='assessment-id' variant='p'>
                        {props.props.assesmentId}
                    </Typography>
                    <Typography variant='p' className='assessment-subject'> 
                    {props.props.assesmentSubject}
                    </Typography>
                    <Stack direction={'row'}>
                        {props.props.relatedTopics.map((topic) => (
                            <Typography  className='related-topics' variant='p'>{topic}</Typography>
                        ))}
                    </Stack>
                    <Typography className='assessment-description' variant='p' >
                        UCD Process,IA, UX Deliverables, Competition analysis, marketing research, marketing, planning
                    </Typography>
                    <div className='card-footer'>
                        <ImageList className='assessment-takers-image' cols={4} >
                            <img src= {props.props.img1} alt="" className='images prof1'/>
                            <img src= {props.props.img2} alt="" className='images prof2'/>
                            <img src= {props.props.img3} alt="" className='images prof3'/>
                            <img src= {props.props.img4} alt="" className='images prof4'/>
                        </ImageList>
                        <CardActions>
                            <Button variant={'outlined'} class='assign-to'>
                                <Stack direction={'row'} justifyContent={'space-evenly'}>
                                    <Typography variant='p'>Assign to</Typography>
                                    <StyledEastIcon/>
                                </Stack>
                            </Button>
                        </CardActions>
                    </div>
                </div>
            </CardContent>
    
        </React.Fragment>
    )
}

