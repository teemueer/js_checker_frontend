import { useTranslation } from "react-i18next";

const Element = (props) => {
  const [t, i18n] = useTranslation("common");

  return (
    <div
      className="element"
      ref={props.provided.innerRef}
      {...props.provided.draggableProps}
      {...props.provided.dragHandleProps}
    >
      <table>
        <tbody>
          <tr>
            <td>{t("assignment.element.name")}</td>
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
            <td>{t("assignment.element.input")}</td>
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
            <td>{t("assignment.element.action")}</td>
            <td colSpan="4">
              <select
                value={props.element.action}
                onChange={(event) => {
                  props.onChangeElementAction(props.index, event.target.value);
                }}
              >
                <option value="">-</option>
                <option value="click">
                  {t("assignment.element.actions.click")}
                </option>
                <option value="enter">
                  {t("assignment.element.actions.enter")}
                </option>
                <option value="hover">
                  {t("assignment.element.actions.hover")}
                </option>
              </select>
            </td>
          </tr>
          <tr>
            <td>{t("assignment.element.attributes")}</td>
            <td colSpan="4">
              <button
                onClick={() => props.onAddElementAttribute(props.index)}
                className="bg-gray-200 rounded-md p-1 inline-flex items-center justify-center hover:bg-gray-300 w-6 h-6"
              >
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
                  NULL
                </label>
              </td>
              <td>
                <button
                  onClick={(event) =>
                    props.onRemoveElementAttribute(props.index, index)
                  }
                  className="bg-gray-200 rounded-md p-1 inline-flex items-center justify-center hover:bg-gray-300 w-6 h-6"
                >
                  x
                </button>
              </td>
            </tr>
          ))}
          <tr>
            <td>{t("assignment.element.texts")}</td>
            <td colSpan="4">
              <button
                onClick={() => props.onAddElementText(props.index)}
                className="bg-gray-200 rounded-md p-1 inline-flex items-center justify-center hover:bg-gray-300 w-6 h-6"
              >
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
                  RegEx
                </label>
              </td>
              <td>
                <button
                  onClick={(event) =>
                    props.onRemoveElementText(props.index, index)
                  }
                  className="bg-gray-200 rounded-md p-1 inline-flex items-center justify-center hover:bg-gray-300 w-6 h-6"
                >
                  x
                </button>
              </td>
            </tr>
          ))}
          <tr>
            <td>{t("assignment.element.description")}</td>
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
};

export default Element;
