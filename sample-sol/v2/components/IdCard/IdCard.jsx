import './IdCard.css';

const IdCard = (props) => {
  return (
    <div className="Card-container">
      <img src={props.picture} alt="IdCard"></img>
      <ul>
        <li>First name: {props.firstName}</li>
        <li>Last name: {props.lastName}</li>
        <li>Gender: {props.gender}</li>
        <li>Height: {props.height}</li>
        <li>Birth: {props.birth.toDateString()}</li>
      </ul>
    </div>
  );
};

export default IdCard;



