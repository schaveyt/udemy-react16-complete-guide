import * as React from 'react';
import './index.css';
import { PlaceholderParent as Aux } from '../../hoc/PlaceholderParent';

interface LayoutProps {
}

export const Layout: React.SFC<LayoutProps> = (props) => {
  return (
        <Aux>
            <div>
                Toolbar, Sidebar, Backdrop
            </div>
            <main className="layout_content">
                {props.children}
            </main>
        </Aux>
  );
};