import { useTranslation } from "react-i18next";

const Controls = (props) => {
  const [t, i18n] = useTranslation("common");

  return (
    <div id="controls">
      <div>
        <span>
          <label htmlFor="assignment-name">
            {t("assignment.controls.name")}
          </label>
          <input
            id="assignment-name"
            value={props.assg.name}
            onChange={(event) => props.onChangeAssgName(event.target.value)}
            className="px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
          />
          <label htmlFor="assignment-points">
            {t("assignment.controls.points")}
          </label>
          <input
            id="assignment-points"
            type="number"
            min="0"
            value={props.assg.points || 0}
            onChange={(event) => props.onChangeAssgPoints(event.target.value)}
            className="px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
          />
        </span>
        <span className="ml-3">
          <button
            onClick={props.onSave}
            className="mr-2 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-3 border border-gray-400 rounded shadow"
          >
            {t("assignment.controls.save")}
          </button>
          <button
            onClick={props.onCopy}
            className="mr-2 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-3 border border-gray-400 rounded shadow"
          >
            {t("assignment.controls.copy")}
          </button>
          <button
            onClick={props.onDelete}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-3 border border-gray-400 rounded shadow"
          >
            {t("assignment.controls.delete")}
          </button>
        </span>
      </div>

      <div className="mt-3 p-3 bottom-0 fixed bg-white w-full">
        <span id="new-buttons">
          <button
            onClick={props.onAddElement}
            className="bg-white hover:bg-gray-300 text-gray-800 font-semibold px-2 border border-gray-400 rounded shadow"
          >
            {t("assignment.controls.new_element")}
          </button>
          <button
            onClick={props.onAddPrompt}
            className="bg-white hover:bg-gray-300 text-gray-800 font-semibold px-2 border border-gray-400 rounded shadow"
          >
            {t("assignment.controls.new_prompt")}
          </button>
          <button
            onClick={props.onAddReload}
            className="bg-white hover:bg-gray-300 text-gray-800 font-semibold px-2 border border-gray-400 rounded shadow"
          >
            {t("assignment.controls.new_reload")}
          </button>
          <button
            onClick={props.onAddConfirm}
            className="bg-white hover:bg-gray-300 text-gray-800 font-semibold px-2 border border-gray-400 rounded shadow"
          >
            {t("assignment.controls.new_confirm")}
          </button>
          <button
            onClick={props.onAddConsole}
            className="bg-white hover:bg-gray-300 text-gray-800 font-semibold px-2 border border-gray-400 rounded shadow"
          >
            {t("assignment.controls.new_console")}
          </button>
          <button
            onClick={props.onAddScriptCheck}
            className="bg-white hover:bg-gray-300 text-gray-800 font-semibold px-2 border border-gray-400 rounded shadow"
          >
            {t("assignment.controls.new_script")}
          </button>
        </span>
      </div>
    </div>
  );
};

export default Controls;
