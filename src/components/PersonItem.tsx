import { Person } from "../interface/interface";

type Props = {
  person: Person;
};

const PersonItem = ({ person }: Props) => {
  return (
    <ul>
      <li className="List">
        <div className="List-header">
          <img className="List-img" alt={person.name} src={person.url} />
          <h2>{person.name}</h2>
        </div>
        <p>{person.age} years old</p>
        <p className="List-note">{person.note}</p>
      </li>
    </ul>
  );
};

export default PersonItem;
