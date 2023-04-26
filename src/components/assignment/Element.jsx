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
          <td colSpan="4">
            <input
              type="text"
              value={props.element.name}
              onChange={(event) =>
                props.onChangeElementName(props.index, event.target.value)
              }
            />
          </td>
        </tr>
        <tr>
          <td>Input:</td>
          <td colSpan="4">
            <input
              type="text"
              value={props.element.input || ""}
              onChange={(event) =>
                props.onChangeElementInput(props.index, event.target.value)
              }
            />
          </td>
        </tr>
        <tr>
          <td>Action:</td>
          <td colSpan="4">
            <select
              value={props.element.action}
              onChange={(event) => {
                props.onChangeElementAction(props.index, event.target.value);
              }}
            >
              <option value="">None</option>
              <option value="click">Click</option>
              <option value="enter">Enter</option>
              <option value="hover">Hover</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>Attributes:</td>
          <td colSpan="4">
            <button onClick={() => props.onAddElementAttribute(props.index)}>
              +
            </button>
          </td>
        </tr>
        {props.element.attrs.map((attr, index) => (
          <tr key={index} className="attr">
            <td></td>
            <td>
              <input
                type="text"
                value={attr.name}
                onChange={(event) =>
                  props.onChangeElementAttributeName(
                    props.index,
                    index,
                    event.target.value
                  )
                }
              />
            </td>
            <td>
              {attr.value !== null ? (
                <input
                  type="text"
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
                <input type="text" value="NULL" disabled />
              )}
            </td>
            <td>
              <label>
                <input
                  type="checkbox"
                  checked={attr.value === null}
                  onChange={(event) =>
                    props.onNullifyElementAttributeValue(props.index, index)
                  }
                />
                null
              </label>
            </td>
            <td>
              <button
                onClick={(event) =>
                  props.onRemoveElementAttribute(props.index, index)
                }
              >
                x
              </button>
            </td>
          </tr>
        ))}
        <tr>
          <td>Texts:</td>
          <td colSpan="4">
            <button onClick={() => props.onAddElementText(props.index)}>
              +
            </button>
          </td>
        </tr>
        {props.element.texts.map((text, index) => (
          <tr key={index}>
            <td></td>
            <td colSpan="2" className="text">
              <input
                type="text"
                value={text.value}
                onChange={(event) =>
                  props.onChangeElementTextValue(
                    props.index,
                    index,
                    event.target.value
                  )
                }
              />
            </td>
            <td>
              <label>
                <input
                  type="checkbox"
                  checked={text.regex}
                  onChange={(event) =>
                    props.onChangeElementTextRegex(props.index, index)
                  }
                />
                regex
              </label>
            </td>
            <td>
              <button
                onClick={(event) =>
                  props.onRemoveElementText(props.index, index)
                }
              >
                x
              </button>
            </td>
          </tr>
        ))}
        <tr>
          <td>Description:</td>
          <td colSpan="4">
            <input
              type="text"
              value={props.element.description || ""}
              onChange={(event) =>
                props.onChangeDescription(props.index, event.target.value)
              }
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default Element;