import React, { useState, useEffect } from 'react';

export default function Movie(props) {
  const [grading, setGrading] = useState(props.grading);

  useEffect(() => {
    setGrading(props.grading);
  }, [props.grading]);

  const addGrade = (num) => {
    props.movie[props.index].grades.push(num);
    let avg = 0;
    for (let i = 0; i < props.movie[props.index].grades.length; i++) {
      avg += props.movie[props.index].grades[i];
    }
    props.movie[props.index].grading = avg / props.movie[props.index].grades.length;
    setGrading(props.movie[props.index].grading);
  };

  const showRating = () => {
    return <h1>{`${props.movie[props.index].grading.toFixed(2)}`}</h1>;
  };

  const gradeButtons = [];
  for (let i = 1; i <= 10; i++) {
    gradeButtons.push(
      <button key={i} onClick={() => addGrade(i)} className='gradeBTN'>{i}</button>
    );
  }

  return (
    <div className='movieDiv' style={{ backgroundImage: `url(${props.movie[props.index].image})` }}>
      <h1>{`Movie Name: ${props.movie[props.index].name}`}</h1>
      <h1>{`Movie Description: ${props.movie[props.index].description}`}</h1>
      {showRating()}
      <div style={{ display: 'flex', alignItems: 'unset' }}>
        {gradeButtons}
      </div>
    </div>
  );
}
