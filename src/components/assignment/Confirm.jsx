const Confirm = (props) => (
  <div
    className="confirm"
    ref={props.provided.innerRef}
    {...props.provided.draggableProps}
    {...props.provided.dragHandleProps}
  >
    <table>
      <tbody>
        <tr>
          <td>Confirm:</td>
          <td>
            <select
              value={props.confirm.value}
              onChange={(event) => {
                props.onChangeValue(props.index, event.target.value);
              }}
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default Confirm;
