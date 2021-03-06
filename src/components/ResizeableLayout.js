import React from 'react';
import PropTypes from 'prop-types';
import Highlight from "react-highlight";
import { Responsive, WidthProvider } from "react-grid-layout";
import { Box, Divider, Tab, Tabs, Typography } from '@mui/material';

import '../App.css';
import "../../node_modules/react-grid-layout/css/styles.css";
import "../../node_modules/react-resizable/css/styles.css";
import "../tomorrow-night-blue.min.css";

const ResponsiveGridLayout = WidthProvider(Responsive);

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function capitalize(s) {
    return s[0].toUpperCase() + s.slice(1);
}

const ResizeableLayout = (props) => {
    const [showMessage, setShowMessage] = React.useState(false);
    const [value, setValue] = React.useState(0);
    const questions = props.questions;

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const onButtonClickHandler = () => {
        setShowMessage(!showMessage);
    };

    return questions.length > 0 && (
        <ResponsiveGridLayout
            className="layout"
            rowHeight={150}
            breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
            cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
            compactType={"vertical, horizontal"}
        >
            <div
                className="item"
                key="question"
                data-grid={{ x: 0, y: 0, w: 3, h: 5, minW: 2, minH: 3, maxW: 12, maxH: 4, static: true }}
            >
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Question 1" {...a11yProps(0)} />
                        <Tab label="Question 2" {...a11yProps(1)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    {questions[0].question} ({questions[0].company})
                    <Divider />
                    {capitalize(questions[0].difficulty)}
                    <Divider />
                    {questions[0].description}
                </TabPanel>
                <TabPanel value={value} index={1}>
                    {questions[1].question} ({questions[1].company})
                    <Divider />
                    {capitalize(questions[1].difficulty)}
                    <Divider />
                    {questions[1].description}
                </TabPanel>
            </div>

            <div
                className="item"
                key="code"
                data-grid={{ x: 3, y: 0, w: 4, h: 5, minW: 2, minH: 3, maxW: 12, maxH: 4, static: true }}
            >
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} aria-label="basic tabs example">
                        <Tab label="Code" {...a11yProps(0)} />
                        {/* <Tab label="Question 2" {...a11yProps(1)} /> */}
                    </Tabs>
                </Box>
                {/* <div className="MyDragHandleClassName">
                    <span className="text">Code</span>
                </div> */}
                <span className="text">
                    <Highlight language="python">
                        {`print("Twinkle, twinkle, little star, \n\tHow I wonder what you are! \n\t\tUp above the world so high, \n\t\tLike a diamond in the sky. \nTwinkle, twinkle, little star, \n\tHow I wonder what you are!")`}
                    </Highlight>


                    <button onClick={onButtonClickHandler}>Enter</button>
                </span>
            </div>

            <div
                className="item"
                key="outputConsole"
                data-grid={{ x: 7, y: 0, w: 3, h: 5, minW: 2, maxW: 12, maxH: 4, static: true }}
            >
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} aria-label="basic tabs example">
                        <Tab label="Output" {...a11yProps(0)} />
                        {/* <Tab label="Question 2" {...a11yProps(1)} /> */}
                    </Tabs>
                </Box>
                {/* <div className="MyDragHandleClassName">
                    <span className="text">Output</span>
                </div> */}
                <div className="code">
                    <span className="text">
                        {showMessage && <p>Twinkle, twinkle, little star, How I wonder what you are! Up
                            above the world so high, Like a diamond in the sky. Twinkle,
                            twinkle, little star, How I wonder what you are</p>}
                    </span>
                </div>
            </div>
        </ResponsiveGridLayout>
    );
};

ResizeableLayout.defaultProps = {
    rowHeight: 10,
    cols: 2, // to make grid item 50% or 100%
};

export default ResizeableLayout;