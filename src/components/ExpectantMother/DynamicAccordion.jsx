import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';

// Custom styled Accordion to remove spacing between expanded sections
const CustomAccordion = styled(Accordion)(({ theme }) => ({
    '&:not(:last-child)': {
        marginBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
    '&.Mui-expanded': {
        margin: 0,
    },
}));

const DynamicAccordion = ({ sections }) => {
    return (
        <div>
            {sections.map((section, index) => (
                <CustomAccordion key={index}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={`panel${index}-content`}
                        id={`panel${index}-header`}
                    >
                        <Typography>{section.title}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            {section.content}
                        </Typography>
                    </AccordionDetails>
                </CustomAccordion>
            ))}
        </div>
    );
};

export default DynamicAccordion;
