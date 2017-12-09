import * as React from 'react';
import './Person.css';
import { Person as PersonModel } from '../../Types/Person';

interface PersonProps {
    person: PersonModel;
    deleteClicked?: (id: number) => void;
    namedChanged?: (name: string, id: number) => void;
}

function onDelete(props: PersonProps): void {
    if (props.deleteClicked) {
        props.deleteClicked(props.person.id);
    }
}

function onNameChanged(e: React.ChangeEvent<HTMLInputElement>, props: PersonProps): void {
    if (props.namedChanged) {
        props.namedChanged(e.currentTarget.value, props.person.id);
    }
}

export const Person: React.SFC<PersonProps> = (props) => {
    return (
        <div className="Person">
          <p>I'm a {props.person.name} and {props.person.age}</p>
          <p>{props.children}</p>
          <input type="text" onChange={(e) => onNameChanged(e, props)} value={props.person.name} />
          <button onClick={() => onDelete(props)}>Delete</button>
        </div>
      );
};
