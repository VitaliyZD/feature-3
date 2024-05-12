import './Card.css';

function Card(props) {
    if (!props.isShow) {
        return null;
    }
    const classes = 'card ' + props.className
    return(
        <div className={classes}>{props.children}</div>
    )
}

export default Card