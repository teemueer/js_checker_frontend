const Prompt = (props) => (
  <div
    className="prompt"
    ref={props.provided.innerRef}
    {...props.provided.draggableProps}
    {...props.provided.dragHandleProps}
  >
    <table>
      <tbody>
        <tr>
          <td>Prompt:</td>
          <td>
            <input
              value={props.prompt.value}
              onChange={(event) =>
                props.onChangePrompt(props.index, event.target.value)
              }
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default Prompt;
