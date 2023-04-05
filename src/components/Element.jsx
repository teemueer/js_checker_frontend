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
          <td colspan="3">
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
          <td colspan="3">
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
          <td colspan="3">
            <button onClick={() => props.onAddElementAttribute(props.index)}>
              +
            </button>
          </td>
        </tr>
        {props.element.attrs.map((attr, index) => (
          <tr key={index} className="attr">
            <td>
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
            </td>
            <td>
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
            </td>
            <td>
              <label>
                <input
                  type="checkbox"
                  defaultChecked={attr.value === null}
                  onClick={(event) =>
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
          <td colspan="3">
            <button onClick={() => props.onAddElementText(props.index)}>
              +
            </button>
          </td>
        </tr>
        {props.element.texts.map((text, index) => (
          <tr key={index}>
            <td colspan="3" className="text">
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
      </tbody>
    </table>
  </div>
);

export default Element;
