import './App.css';
import logo from './images/logo.svg';
import IdCard from './components/IdCard/IdCard';
import Greetings from './components/Greeting/Greetings';
import Random from './components/Random/Random';
import CreditCard from './components/CreditCard/CreditCard';
import BoxColor  from './components/BoxColor/BoxColor'


function App() {
  return (
    <>
      <h3>React Practice</h3>
      <img src={logo} className="App-logo" alt="logo" />

      <IdCard
        lastName="Delores "
        firstName="Obrien"
        gender="female"
        height={172}
        birth={new Date('1988-05-11')}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={new Date('1992-07-14')}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <Greetings lang="fi">Matti</Greetings>
      <Greetings lang="de">Ludwig</Greetings>

      <Random min={1} max={6} />
      <Random min={1} max={100} />

      <CreditCard
        type="Visa"
        number="0123456789018845"
        expirationMonth={3}
        expirationYear={2021}
        bank="BNP"
        owner="Maxence Bouret"
        bgColor="#11aa99"
        color="white"
      />
      <CreditCard
        type="Master Card"
        number="0123456789010995"
        expirationMonth={3}
        expirationYear={2021}
        bank="N26"
        owner="Maxence Bouret"
        bgColor="#eeeeee"
        color="#222222"
      />
      <CreditCard
        type="Visa"
        number="0123456789016984"
        expirationMonth={12}
        expirationYear={2019}
        bank="Nordea"
        owner="Firstname Lastname"
        bgColor="#ddbb55"
        color="white"
      />

      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
    </>
  );
}

export default App;
