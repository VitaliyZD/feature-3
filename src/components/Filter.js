import "./Filter.css";

const Filter = (props) => {
  const levelChangeHandler = (event) => {
    props.onChangeLevel(event.target.value);
  };

  return (
    <div className="filter">
      <div className="filter__control">
       
        <select value={props.level} onChange={levelChangeHandler}>
          <option value="40%">40%</option>
          <option value="30%">30%</option>
          <option value="20%">20%</option>
          <option value="10%">10%</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
