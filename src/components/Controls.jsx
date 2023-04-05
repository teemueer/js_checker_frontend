const Controls = (props) => (
  <div>
    <input
      value={props.assg.name}
      onChange={(event) => props.onChangeAssgName(event.target.value)}
    />
    <button onClick={props.onAddPrompt}>New prompt</button>
    <button onClick={props.onAddElement}>New element</button>
    <button onClick={props.onAddReload}>New reload</button>
    <button onClick={props.onAddConfirm}>New confirm</button>
    <button onClick={props.onSave}>Save</button>
    <button onClick={props.onRemove}>Remove</button>
  </div>
);

export default Controls;
