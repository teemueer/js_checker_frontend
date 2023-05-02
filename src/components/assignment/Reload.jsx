import { useTranslation } from "react-i18next";

const Reload = (props) => {
  const [t, i18n] = useTranslation("common");

  return (
    <div
      className="reload"
      ref={props.provided.innerRef}
      {...props.provided.draggableProps}
      {...props.provided.dragHandleProps}
    >
      <table>
        <tbody>
          <tr>
            <td>{t("assignment.reload.reload")}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Reload;
