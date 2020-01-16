import React from 'react';

const ViewOne = (props) => {

    // Now hook into data and set state down from here for this view - if its projects get all the project data with a fetch
    
    const [thisData, setThisData] = React.useState([]);

   

    return (
        <div>
            This is the main view - > Cards and Graphs - Map Data
        </div>
    )
}

export default ViewOne;