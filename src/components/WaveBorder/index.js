import React from "react";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core";

const styles = theme => ({
    waves: {
        position: "relative",
        width: "100%",
        height: "15vh",
        marginBottom: -7,
        minHeight: 100,
        maxHeight: 150,
        [theme.breakpoints.down("sm")]: {
            height: 40,
            minHeight: 40
        }
    },
    "@keyframes moveForever": {
        from: {transform: "translate3d(-90px, 0, 0)"},
        to: {transform: "translate3d(85px, 0, 0)"}
    },
    parallax: {
        "& > use": {
            animation: "$moveForever 5s cubic-bezier(0.62, 0.5, 0.38, 0.5) infinite",
            animationDelay: "-2s"
        }
    }
});

/**
 *  https://codepen.io/csspoints/pen/WNeOEqd
 */
function WaveBorder(props) {
    const id = String(Math.random());
    const {className, lowerColor, upperColor, offset, classes} = props;
    let realOffset = offset;
    if(!realOffset)
        realOffset = 0;
    return (
        <div className={className} style={{background: upperColor}}>
            <svg
                className={classes.waves}
                xmlns="http://www.w3.org/2000/svg"
                xlink="http://www.w3.org/1999/xlink"
                viewBox="0 24 150 28"
                preserveAspectRatio="none"
                shapeRendering="auto"
            >
                <defs>
                    <path
                        id={id}
                        d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                    />
                </defs>
                <g className={classes.parallax}>
                    <use href={`#${id}`} x={48 + (realOffset % 32)} y="0" fill={lowerColor}/>
                </g>
            </svg>
        </div>
    );
}

WaveBorder.propTypes = {
    lowerColor: PropTypes.string.isRequired,
    upperColor: PropTypes.string.isRequired,
    classes: PropTypes.object.isRequired,
    offset: PropTypes.number,
    className: PropTypes.string
};

export default withStyles(styles, {withTheme: true})(WaveBorder);