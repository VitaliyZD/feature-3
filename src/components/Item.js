import './Item.css';

function Item(props) {

    return (
    <div className='item'>
            <h2>{props.name}</h2>
            <p className='text'>{props.description}</p>
            <div className='level'>{props.level}</div>
    </div>
    );
};
export default Item