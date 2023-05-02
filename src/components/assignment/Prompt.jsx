import { useTranslation } from "react-i18next";

const Prompt = (props) => {
  const [t, i18n] = useTranslation("common");

  return (
    <div
      className="prompt"
      ref={props.provided.innerRef}
      {...props.provided.draggableProps}
      {...props.provided.dragHandleProps}
    >
      <table>
        <tbody>
          <tr>
            <td>{t("assignment.prompt.prompt")}</td>
            <td>
              <input
                type="text"
                value={props.prompt.value}
                onChange={(event) =>
                  props.onChangeValue(props.index, event.target.value)
                }
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Prompt;
