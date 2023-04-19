const Script = (props) => (
  <div
    className="script"
    ref={props.provided.innerRef}
    {...props.provided.draggableProps}
    {...props.provided.dragHandleProps}
  >
    <table>
      <tbody>
        <tr>
          <td>Script check:</td>
          <td>
            <input
              type="text"
              value={props.script.value}
              onChange={(event) =>
                props.onChangeScriptValue(props.index, event.target.value)
              }
            />
          </td>
        </tr>
        <tr>
          <td>Description:</td>
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

export default Script;
