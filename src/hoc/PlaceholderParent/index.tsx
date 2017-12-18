import * as React from 'react';

export interface PlaceholderParentProps {
    children: React.ReactNode;
}

export const PlaceholderParent: React.SFC<PlaceholderParentProps> = (props) => {
    return (
      <div>
        {props.children}
      </div>
    );
};
