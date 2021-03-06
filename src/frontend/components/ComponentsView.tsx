import * as React from "react";
import {IComponent} from "../../common/models/component";
// import {ComponentsList} from "./ComponentsList";
// import { ComponentDetails } from "./ComponentDetails";
import { ComponentsTable } from "./ComponentsTable";

interface IProps {
  title: string;
  components: IComponent[];
  selectedComponent: IComponent | undefined;
  onComponentClick: (comp: IComponent) => void;
}

// tslint:disable-next-line:variable-name
export const ComponentsView = (props: IProps) => {

  return (
    <div>
      <ComponentsTable components={props.components} />
      {/* <ComponentsList title={props.title}
                      components={props.components}
                      selectedComponent={props.selectedComponent}
                      onComponentClick={props.onComponentClick} />
      <ComponentDetails component={props.selectedComponent} /> */}
    </div>
  );

};
