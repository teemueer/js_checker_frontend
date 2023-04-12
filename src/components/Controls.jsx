const Controls = (props) => (
  <div id="controls">
    <label htmlFor="test-name">Test name: </label>
    <input
      id="text-name"
      value={props.assg.name}
      onChange={(event) => props.onChangeAssgName(event.target.value)}
    />
    <span className="new-buttons">
      <button onClick={props.onAddPrompt}>New prompt</button>
      <button onClick={props.onAddElement}>New element</button>
      <button onClick={props.onAddReload}>New reload</button>
      <button onClick={props.onAddConfirm}>New confirm</button>
      <button onClick={props.onAddConsole}>New console</button>
      <button onClick={props.onAddScriptCheck}>New script check</button>
    </span>
    <span className="api-buttons">
      <button onClick={props.onSave}>Save</button>
      <button onClick={props.onRemove}>Remove</button>
    </span>
  </div>
);

export default Controls;
