import * as React from 'react';
import { MouseEventHandler } from 'react';

interface PersonProps {
    name: string;
    age: number;
    click?: MouseEventHandler<any>;
}

export const Person: React.SFC<PersonProps> = (props) => {
    return (
        <div>
          <p onClick={props.click}>I'm a {props.name} and {props.age}</p>
          <p>{props.children}</p>
        </div>
      );
};
