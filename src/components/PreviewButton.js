import React from 'react'
import PropTypes from 'prop-types'

function PreviewButton(props) {
    return (
        <button className={"rounded-3xl mt-4 py-2 px-4 border-fem-500 border-2 bg-fem-500 hover:bg-transparent duration-500 hover:text-fem-500 max-w-fit text-sm " + props.textColor}>{props.children}</button>
    )
}

PreviewButton.propTypes = {
    textColor: PropTypes.string,
}

export default PreviewButton

// focus on technical competence 
// multidisciplinary