const AssgJSON = ({ assg }) => (
  <div>
    <pre>{assg && JSON.stringify(assg, null, "  ")}</pre>
  </div>
);

export default AssgJSON;
