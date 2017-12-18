import * as React from 'react';

export interface PlaceholderParentProps {
    children: React.ReactNode;
}

export function PlaceholderParent (props: PlaceholderParentProps) {
    return (
      <div>
        {props.children}
      </div>
    );
}
