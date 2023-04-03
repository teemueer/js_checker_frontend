const AssgSelector = (props) => (
  <div>
    <select onChange={(event) => props.onSelectAssg(event.target.value)}>
      <option value="">-- New assignment --</option>
      {props.assgs.map((assg, index) => (
        <option key={index} value={assg.name}>
          {assg.name}
        </option>
      ))}
    </select>
  </div>
);

export default AssgSelector;
