import Item from "./Item";
import './Competencies.css';
import Card from './Card';
import Filter from './Filter';
import React, { useState } from "react";

function Competencies({competencies}) {
  const [isShow, setIsShow] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState('10%');

  const handlerClickShow = () => {
    setIsShow((val) => !val);
  };

  const levelChangeHandler = (level) => {
    setSelectedLevel(level);
  };
const filteredCompetencies = competencies.filter(item => {
  return item.level === selectedLevel
})
    return(
      <div>
         <button onClick={handlerClickShow}>{isShow?'Скрыть компетенции':'Показать компетенции'}</button>
        <Card className="competencies" isShow={isShow}>
        <>
        <Filter level={selectedLevel}
          onChangeLevel={levelChangeHandler} />
          {filteredCompetencies.map((item, i)=> {
                return (
                  <Item 
                  name={item.name} 
                  description={item.description}
                  level={item.level}
                  key={i}
              ></Item>
                );
          })}
        </>
        </Card>
      </div>
)
};

export default Competencies;