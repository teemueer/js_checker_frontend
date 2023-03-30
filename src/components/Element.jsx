import { useState } from "react";
import Attributes from "./Attributes";

const Element = (props) => {
  return (
    <table
      className="element"
      ref={props.provided.innerRef}
      {...props.provided.draggableProps}
      {...props.provided.dragHandleProps}
    >
      <tbody>
        <tr>
          <td>Name:</td>
          <td>
            <input
              name="element-name"
              value={props.element.name}
              onChange={(event) =>
                props.onChangeName(props.element, event.target.value)
              }
            />
          </td>
        </tr>
        <tr className="element-additional">
          <td>Action:</td>
          <td>
            <select
              name="element-action"
              onChange={(event) => {
                props.onSelectAction(props.element, event.target.value);
              }}
            >
              <option value="">None</option>
              <option value="click">Click</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>Attributes:</td>
          <td>
            <button onClick={() => props.onAddAttribute(props.element)}>
              +
            </button>
          </td>
        </tr>
        {props.element.attrs && (
          <Attributes
            element={props.element}
            onChangeAttribute={props.onChangeAttribute}
            onRemoveAttribute={props.onRemoveAttribute}
          />
        )}
      </tbody>
    </table>
  );
};

export default Element;
