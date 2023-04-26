const Controls = (props) => (
  <div id="controls">
    <div>
      <span>
        <label htmlFor="assignment-name">Assignment name: </label>
        <input
          id="assignment-name"
          value={props.assg.name}
          onChange={(event) => props.onChangeAssgName(event.target.value)}
        />
        <label htmlFor="assignment-points">Points: </label>
        <input
          id="assignment-points"
          type="number"
          min="0"
          value={props.assg.points}
          onChange={(event) => props.onChangeAssgPoints(event.target.value)}
        />
      </span>
      <span id="api-buttons">
        <button onClick={props.onSave}>Save</button>
        <button onClick={props.onDelete}>Remove</button>
      </span>
    </div>
    <hr />
    <span id="new-buttons">
      <button onClick={props.onAddPrompt}>New prompt</button>
      <button onClick={props.onAddElement}>New element</button>
      <button onClick={props.onAddReload}>New reload</button>
      <button onClick={props.onAddConfirm}>New confirm</button>
      <button onClick={props.onAddConsole}>New console</button>
      <button onClick={props.onAddScriptCheck}>New script check</button>
    </span>
  </div>
);

export default Controls;
