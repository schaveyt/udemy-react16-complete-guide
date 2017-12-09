import * as React from 'react';

interface PersonProps {
    name: string;
    age: number;
}

export const Person: React.SFC<PersonProps> = (props) => {
    return (
        <div>
          <p>I'm a {props.name} and {props.age}</p>
          <p>{props.children}</p>
        </div>
      );
};
