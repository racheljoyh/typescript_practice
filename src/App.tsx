import "./App.css";
import { Greeting } from "./components/Greeting";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";
import { Heading } from "./components/Heading";
import { Oscar } from "./components/Oscar";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { Container } from "./components/Container";
import { User } from "./components/state/User";

function App() {
  const personName = {
    first: "Bruce",
    last: "Wayne",
  };

  const nameList = [
    {
      first: "Bruce",
      last: "Wayne",
    },
    {
      first: "Clark",
      last: "Kent",
    },
    {
      first: "Princess",
      last: "Diana",
    },
  ];

  return (
    <div className="App">
      <Status status="success" />
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicaprio!</Heading>
      </Oscar>
      <Greeting name="Rachel" isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Button
        handleClick={(event, id) =>
          console.log("I have been clicked, ouch!", event, id)
        }
      />
      <Input
        value=""
        handleChange={(event) => console.log(event.target.value)}
      />
      <Container style={{ border: "1px solid black", padding: "1rem" }} />
      <User />
    </div>
  );
}

export default App;
