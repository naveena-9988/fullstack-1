import './Greetings.css';

const Greeting = (props) => {
  
  const getGreeting = (lang) => {
    switch (lang) {
      case 'fi':
        return 'Moi';
      case 'de':
        return 'Hallo';
      case 'en':
        return 'Hello';
      case 'es':
        return 'Hola';
      case 'fr':
        return 'Bonjour';
      default:
        return 'Hello';
    }
  };

  return (
    <div className="Greeting-container">
      <p>
        {getGreeting(props.lang)} {props.children}
      </p>
    </div>
  );
};

export default Greeting;
