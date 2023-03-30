import { useState } from "react";

const Attribute = (props) => {
  return (
    <tr>
      <td>
        <input
          value={props.attr.name}
          size="10"
          onChange={(event) => {
            props.onChangeAttribute(props.element, props.attr, {
              name: event.target.value,
              value: props.attr.value,
            });
          }}
        />
      </td>
      <td>
        <input
          value={props.attr.value}
          size="20"
          onChange={(event) => {
            props.onChangeAttribute(props.element, props.attr, {
              name: props.attr.name,
              value: event.target.value,
            });
          }}
        />
      </td>
      <td>
        <button
          onClick={() => props.onRemoveAttribute(props.element, props.attr)}
        >
          x
        </button>
      </td>
    </tr>
  );
};

const Attributes = (props) => {
  return (
    <tr className="element-attributes">
      <td colSpan="2">
        <table>
          <tbody>
            {props.element.attrs.map((attr, index) => (
              <Attribute
                key={index}
                element={props.element}
                attr={attr}
                onChangeAttribute={props.onChangeAttribute}
                onRemoveAttribute={props.onRemoveAttribute}
              />
            ))}
          </tbody>
        </table>
      </td>
    </tr>
  );
};

export default Attributes;
