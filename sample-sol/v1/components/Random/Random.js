import './Random.css';

const Random = ({ min, max }) => { 
  const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  return (
    <div className="Random-container">
      <p>
      Random value between {min} and {max} => {getRandomInt(min, max)}
      </p>
    </div>
  );
};

export default Random;
