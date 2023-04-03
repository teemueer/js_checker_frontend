const Element = (props) => (
  <div
    className="element"
    ref={props.provided.innerRef}
    {...props.provided.draggableProps}
    {...props.provided.dragHandleProps}
  >
    <table>
      <tbody>
        <tr>
          <td>Element:</td>
          <td>
            <input
              value={props.element.name}
              onChange={(event) =>
                props.onChangeElementName(props.index, event.target.value)
              }
            />
          </td>
        </tr>
        <tr>
          <td>Action:</td>
          <td>
            <select
              value={props.element.action}
              onChange={(event) => {
                props.onChangeElementAction(props.index, event.target.value);
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
            <button onClick={() => props.onAddElementAttribute(props.index)}>
              +
            </button>
          </td>
        </tr>
        <tr>
          <td colSpan="2">
            {props.element.attrs.map((attr, index) => (
              <div key={index}>
                <input
                  value={attr.name}
                  onChange={(event) =>
                    props.onChangeElementAttributeName(
                      props.index,
                      index,
                      event.target.value
                    )
                  }
                />
                {attr.value !== null ? (
                  <input
                    value={attr.value}
                    onChange={(event) =>
                      props.onChangeElementAttributeValue(
                        props.index,
                        index,
                        event.target.value
                      )
                    }
                  />
                ) : (
                  <input value="NULL" disabled />
                )}
                <label>
                  null
                  <input
                    type="checkbox"
                    onClick={(event) =>
                      props.onNullifyElementAttributeValue(props.index, index)
                    }
                  />
                </label>

                <button
                  onClick={(event) =>
                    props.onRemoveElementAttribute(props.index, index)
                  }
                >
                  x
                </button>
              </div>
            ))}
          </td>
        </tr>
        <tr>
          <td>Texts:</td>
          <td>
            <button onClick={() => props.onAddElementText(props.index)}>
              +
            </button>
          </td>
        </tr>
        <tr>
          <td colSpan="2">
            {props.element.texts.map((text, index) => (
              <div key={index}>
                <input
                  value={text}
                  onChange={(event) =>
                    props.onChangeElementText(
                      props.index,
                      index,
                      event.target.value
                    )
                  }
                />
                <button
                  onClick={(event) =>
                    props.onRemoveElementText(props.index, index)
                  }
                >
                  x
                </button>
              </div>
            ))}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default Element;
