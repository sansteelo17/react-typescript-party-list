import { ChangeEvent, useState } from "react";
import { Input, Person } from "../interface/interface";

type Props = {
  onAddToPartyList: (value: Person) => void;
};

const AddToList = ({ onAddToPartyList }: Props) => {
  const [input, setInput] = useState<Input>({
    name: "",
    age: "",
    url: "",
    note: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const addToPartyList = (): void => {
    if (!input.name || !input.age || !input.url) {
      alert("Missing Fields!");
    }

    if (input.name && input.age && input.url) {
      onAddToPartyList({
        name: input.name,
        url: input.age,
        age: Number(input.age),
        note: input.note,
      });
    }

    setInput({
      name: "",
      age: "",
      url: "",
      note: "",
    });
  };

  return (
    <div className="AddToList">
      <input
        type="text"
        placeholder="Name"
        className="AddToList-input"
        name="name"
        value={input.name}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Age"
        className="AddToList-input"
        name="age"
        value={input.age}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Image URL"
        className="AddToList-input"
        name="url"
        value={input.url}
        onChange={handleChange}
      />
      <textarea
        placeholder="Notes"
        className="AddToList-input"
        name="note"
        value={input.note}
        onChange={handleChange}
      />
      <button className="AddToList-btn" onClick={addToPartyList}>
        Add to List
      </button>
    </div>
  );
};

export default AddToList;
