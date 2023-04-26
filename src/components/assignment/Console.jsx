const Console = (props) => (
  <div
    className="console"
    ref={props.provided.innerRef}
    {...props.provided.draggableProps}
    {...props.provided.dragHandleProps}
  >
    <table>
      <tbody>
        <tr>
          <td>Console:</td>
          <td>
            <input
              type="text"
              value={props.console.value}
              onChange={(event) =>
                props.onChangeValue(props.index, event.target.value)
              }
            />
          </td>
          <td>
            <label>
              <input
                type="checkbox"
                checked={props.console.regex === true}
                onChange={(event) => props.onChangeConsoleRegex(props.index)}
              />
              regex
            </label>
          </td>
        </tr>
        <tr>
          <td>Description:</td>
          <td colSpan="3">
            <input
              type="text"
              value={props.console.description || ""}
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

export default Console;
