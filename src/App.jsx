import "./App.css";
import { useState } from "react";
import Controls from "./components/Controls";
import DragDrop from "./components/DragDrop";
import useResource from "./hooks/useResource";
import AssgJSON from "./components/AssgJSON";
import AssgSelector from "./components/AssgSelector";

const App = () => {
  const [assgs, assgService] = useResource("/api/assignment");
  const [assg, setAssg] = useState({
    name: "",
    items: [],
  });

  // AssgSelector
  const onSelectAssg = (name) => {
    if (name) {
      const newAssg = assgs.find((assg) => assg.name === name);
      setAssg(newAssg);
    } else {
      setAssg(emptyAssg);
    }
  };

  // Controls
  const onChangeAssgName = (name) => {
    console.log("onChangeAssgName");
    const newAssg = { ...assg, name };
    setAssg(newAssg);
  };

  const onSave = () => {
    console.log("onSave");
    assg._id ? assgService.patch(assg) : assgService.post(assg);
  };

  const onRemove = () => {
    console.log("onRemove");
    assgService.remove(assg);
  };

  // Prompt
  const onAddPrompt = () => {
    console.log("onAddPrompt");
    const newAssg = { ...assg };
    newAssg.items.push({ type: "prompt", value: "" });
    setAssg(newAssg);
  };

  const onChangePrompt = (index, value) => {
    console.log("onChangePrompt");
    const newAssg = { ...assg };
    newAssg.items[index].value = value;
    setAssg(newAssg);
  };

  // Element
  const onAddElement = () => {
    console.log("onAddElement");
    const newAssg = { ...assg };
    newAssg.items.push({ type: "element", name: "", attrs: [], texts: [] });
    setAssg(newAssg);
  };

  const onChangeElementName = (index, name) => {
    console.log("onChangeElementName");
    const newAssg = { ...assg };
    newAssg.items[index].name = name;
    setAssg(newAssg);
  };

  const onChangeElementAction = (index, action) => {
    console.log("onChangeElementAction");
    const newAssg = { ...assg };
    newAssg.items[index].action = action;
    setAssg(newAssg);
  };

  const onAddElementAttribute = (index) => {
    console.log("onAddElementAttribute");
    const newAssg = { ...assg };
    newAssg.items[index].attrs.push({ name: "", value: "" });
    setAssg(newAssg);
  };

  const onRemoveElementAttribute = (index, attrIndex) => {
    console.log("onRemoveElementAttribute");
    const newAssg = { ...assg };
    newAssg.items[index].attrs.splice(attrIndex, 1);
    setAssg(newAssg);
  };

  const onChangeElementAttributeName = (index, attrIndex, name) => {
    console.log("onChangeElementAttributeName");
    const newAssg = { ...assg };
    newAssg.items[index].attrs[attrIndex].name = name;
    setAssg(newAssg);
  };

  const onChangeElementAttributeValue = (index, attrIndex, value) => {
    console.log("onChangeElementAttributeValue");
    const newAssg = { ...assg };
    newAssg.items[index].attrs[attrIndex].value = value;
    setAssg(newAssg);
  };

  const onAddElementText = (index) => {
    console.log("onAddElementText");
    const newAssg = { ...assg };
    newAssg.items[index].texts.push("");
    setAssg(newAssg);
  };

  const onRemoveElementText = (index, textIndex) => {
    console.log("onRemoveElementText");
    const newAssg = { ...assg };
    newAssg.items[index].texts.splice(textIndex, 1);
    setAssg(newAssg);
  };

  const onChangeElementText = (index, textIndex, text) => {
    console.log("onChangeElementText");
    const newAssg = { ...assg };
    newAssg.items[index].texts[textIndex] = text;
    setAssg(newAssg);
  };

  // Drag and Drop
  const onDragEnd = (result) => {
    const newAssg = { ...assg };
    const src = result.source.index;
    if (result.destination) {
      const dst = result.destination.index;
      [newAssg.items[src], newAssg.items[dst]] = [
        newAssg.items[dst],
        newAssg.items[src],
      ];
    } else {
      newAssg.items.splice(src, 1);
    }
    setAssg(newAssg);
  };

  return (
    <>
      <AssgSelector assgs={assgs} onSelectAssg={onSelectAssg} />

      <Controls
        assg={assg}
        onChangeAssgName={onChangeAssgName}
        onAddPrompt={onAddPrompt}
        onAddElement={onAddElement}
        onSave={onSave}
        onRemove={onRemove}
      />

      <DragDrop
        items={assg.items}
        onChangePrompt={onChangePrompt}
        onChangeElementName={onChangeElementName}
        onChangeElementAction={onChangeElementAction}
        onAddElementAttribute={onAddElementAttribute}
        onRemoveElementAttribute={onRemoveElementAttribute}
        onChangeElementAttributeName={onChangeElementAttributeName}
        onChangeElementAttributeValue={onChangeElementAttributeValue}
        onAddElementText={onAddElementText}
        onRemoveElementText={onRemoveElementText}
        onChangeElementText={onChangeElementText}
        onDragEnd={onDragEnd}
      />

      <hr />

      <AssgJSON assg={assg} />
    </>
  );
};

export default App;
