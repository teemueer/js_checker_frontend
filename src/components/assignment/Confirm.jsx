import { useTranslation } from "react-i18next";

const Confirm = (props) => {
  const [t, i18n] = useTranslation("common");

  return (
    <div
      className="confirm"
      ref={props.provided.innerRef}
      {...props.provided.draggableProps}
      {...props.provided.dragHandleProps}
    >
      <table>
        <tbody>
          <tr>
            <td>{t("assignment.confirm.confirm")}</td>
            <td>
              <select
                value={props.confirm.value}
                onChange={(event) => {
                  props.onChangeValue(props.index, event.target.value);
                }}
              >
                <option value="yes">{t("assignment.confirm.yes")}</option>
                <option value="no">{t("assignment.confirm.no")}</option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Confirm;
