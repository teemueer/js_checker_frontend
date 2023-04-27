const Controls = (props) => (
  <div id="controls">
    <div>
      <span>
        <label htmlFor="assignment-name">Assignment name: </label>
        <input
          id="assignment-name"
          value={props.assg.name}
          onChange={(event) => props.onChangeAssgName(event.target.value)}
          className="px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
        />
        <label htmlFor="assignment-points">Points: </label>
        <input
          id="assignment-points"
          type="number"
          min="0"
          value={props.assg.points}
          onChange={(event) => props.onChangeAssgPoints(event.target.value)}
          className="px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
        />
      </span>
      <span id="api-buttons">
        <button
          onClick={props.onSave}
          className="mr-2 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-3 border border-gray-400 rounded shadow"
        >
          Save
        </button>
        <button
          onClick={props.onDelete}
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-3 border border-gray-400 rounded shadow"
        >
          Delete
        </button>
      </span>
    </div>

    <div className="m-3">
      <span id="new-buttons">
        <button
          onClick={props.onAddPrompt}
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold px-2 border border-gray-400 rounded shadow"
        >
          New prompt
        </button>
        <button
          onClick={props.onAddElement}
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold px-2 border border-gray-400 rounded shadow"
        >
          New element
        </button>
        <button
          onClick={props.onAddReload}
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold px-2 border border-gray-400 rounded shadow"
        >
          New reload
        </button>
        <button
          onClick={props.onAddConfirm}
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold px-2 border border-gray-400 rounded shadow"
        >
          New confirm
        </button>
        <button
          onClick={props.onAddConsole}
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold px-2 border border-gray-400 rounded shadow"
        >
          New console
        </button>
        <button
          onClick={props.onAddScriptCheck}
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold px-2 border border-gray-400 rounded shadow"
        >
          New script check
        </button>
      </span>
    </div>
  </div>
);

export default Controls;
