const Reload = (props) => (
  <div
    className="reload"
    ref={props.provided.innerRef}
    {...props.provided.draggableProps}
    {...props.provided.dragHandleProps}
  >
    <table>
      <tbody>
        <tr>
          <td>Reload</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default Reload;
