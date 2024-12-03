import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';

// Custom styled Accordion to remove spacing between expanded sections
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
    border: '1px solid black', // Add black border
    borderRadius: '16px 0 16px 0', // Default for intermediate accordions
    '&:first-of-type': {
        borderRadius: '16px 0 16px 0', // Top-left rounded for the first accordion
    },
    '&:last-of-type': {
        borderRadius: '16px 0 16px 0', // Bottom-right rounded for the last accordion
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
