import React from 'react'
import PropTypes from 'prop-types'
import PreviewButton from './PreviewButton';

function PreviewCard(props) {
    let {title, image, bgColor, textColor, cn} = props;
    // let bgColor = "bg-" + color;
    return (
        <article className={"py-10 px-8 lg:max-w-[300px] flex flex-col gap-8 " + bgColor + " " + cn}>
            <img src={image} alt="" className="w-fit" />
            <h2 className="font-bold font-big-shoulders uppercase text-3xl text-fem-500">{title}</h2>
            <p className="text-sm lg:text-xs font-extralight px-1">
                {props.children}
            </p>
            <PreviewButton textColor={textColor}>Learn More</PreviewButton>
        </article>
    )
}

PreviewCard.propTypes = {
    title: PropTypes.string,
    color: PropTypes.string,
    cn: PropTypes.string,
}
PreviewCard.defaultProps = {
    cn: "",
}
export default PreviewCard
