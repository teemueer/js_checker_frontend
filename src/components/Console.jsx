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
                props.onChangeConsoleValue(props.index, event.target.value)
              }
            />
          </td>
          <td>
            <label>
              <input
                type="checkbox"
                defaultChecked={props.console.regex === true}
                onClick={(event) => props.onChangeConsoleRegex(props.index)}
              />
              regex
            </label>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default Console;
