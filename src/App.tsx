import { FC, useState } from "react";
import { Person } from "./interface/interface";
import PersonItem from "./components/PersonItem";
import AddToList from "./components/AddToList";

const DUMMY_PEOPLE: Person[] = [
  {
    name: "Lebron James",
    url: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
    age: 36,
    note: "Allergic to staying on the same team",
  },
  {
    name: "Kobe Bryant",
    url: "https://images.unsplash.com/photo-1526086754506-a57f69b4700a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
    age: 42,
    note: "Mamba mentality",
  },
];

const App: FC = () => {
  const [people, setPeople] = useState<Person[]>(DUMMY_PEOPLE);

  const addPersonHandler = (person: Person): void => {
    setPeople((prevState) => [
      ...prevState,
      {
        ...person,
      },
    ]);
  };

  return (
    <div className="App">
      <h1>People Invited to my Party</h1>
      {people.map((person: Person, index: number) => (
        <PersonItem key={`${person}-${index}`} person={person} />
      ))}
      <AddToList onAddToPartyList={addPersonHandler} />
    </div>
  );
};

export default App;
