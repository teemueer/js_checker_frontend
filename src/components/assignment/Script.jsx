import { useTranslation } from "react-i18next";

const Script = (props) => {
  const [t, i18n] = useTranslation("common");

  return (
    <div
      className="script"
      ref={props.provided.innerRef}
      {...props.provided.draggableProps}
      {...props.provided.dragHandleProps}
    >
      <table>
        <tbody>
          <tr>
            <td>{t("assignment.script.script")}</td>
            <td>
              <input
                type="text"
                value={props.script.value}
                onChange={(event) =>
                  props.onChangeValue(props.index, event.target.value)
                }
              />
            </td>
          </tr>
          <tr>
            <td>{t("assignment.script.description")}</td>
            <td colSpan="2">
              <input
                type="text"
                value={props.script.description || ""}
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

export default Script;
