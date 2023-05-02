import { useState, useEffect } from "react";
import { useMatch, useNavigate } from "react-router-dom";
import assignmentService from "../services/assignments";

import Controls from "./assignment/Controls";
import DragDrop from "./assignment/DragDrop";
import AssgJSON from "./assignment/AssgJSON";

import "../Assignment.css";
import { toast } from "react-toastify";

const Assignment = () => {
  const navigate = useNavigate();

  const match = useMatch("/assignments/:id");
  const assgId = match.params.id;

  const [assg, setAssg] = useState(null);

  useEffect(() => {
    assignmentService.getById(assgId).then((assg) => {
      setAssg(assg);
    });
  }, [assgId]);

  if (!assg) return;

  // Controls
  const onChangeAssgName = (name) => {
    console.log("onChangeAssgName");
    const newAssg = { ...assg, name };
    setAssg(newAssg);
  };

  const onChangeAssgPoints = (points) => {
    console.log("onChangeAssgPoints");
    const newAssg = { ...assg, points };
    setAssg(newAssg);
  };

  const onSaveAssg = async () => {
    console.log("onSaveAssg");
    try {
      if (assg._id) {
        await assignmentService.patch(assg);
      } else {
        const savedAssg = await assignmentService.post(assg);
        const newAssg = { ...assg };
        newAssg._id = savedAssg._id;
        setAssg(newAssg);
      }
      toast.success("Assignment saved");
    } catch (exception) {
      toast.error("Assignment saving failed");
      console.error(exception);
    }
  };

  const onCopyAssg = () => {
    console.log("onCopyAssg", window.location);
    const host = window.location.host;
    const studentUrl = `${host}/student/${assgId}`;
    navigator.clipboard.writeText(studentUrl);
    toast.info("URL copied");
  };

  const onDeleteAssg = async () => {
    console.log("onDeleteAssg");
    if (confirm(`Delete assignment '${assg.name}'?`) === true) {
      await assignmentService.remove(assg);
      navigate("/");
      toast.success("Assignment deleted");
    }
  };

  // Common
  const onChangeValue = (index, value) => {
    console.log("onChangeValue");
    const newAssg = { ...assg };
    newAssg.items[index].value = value;
    setAssg(newAssg);
  };

  const onRemoveItem = (index) => {
    console.log("onRemoveItem");
    const newAssg = { ...assg };
    newAssg.items.splice(index, 1);
    setAssg(newAssg);
  };

  // Reload
  const onAddReload = () => {
    console.log("onAddReload");
    const newAssg = { ...assg };
    newAssg.items.push({ type: "reload" });
    setAssg(newAssg);
  };

  // Confirm
  const onAddConfirm = () => {
    console.log("onAddConfirm");
    const newAssg = { ...assg };
    newAssg.items.push({ type: "confirm", value: "yes" });
    setAssg(newAssg);
  };

  // Console
  const onAddConsole = () => {
    console.log("onAddConsole");
    const newAssg = { ...assg };
    newAssg.items.push({ type: "console", value: "", regex: false });
    setAssg(newAssg);
  };

  const onChangeConsoleRegex = (index) => {
    console.log("onChangeConsoleRegex");
    const newAssg = { ...assg };
    const value = newAssg.items[index].regex;
    newAssg.items[index].regex = !value;
    setAssg(newAssg);
  };

  // Script check
  const onAddScriptCheck = () => {
    console.log("onAddScriptCheck");
    const newAssg = { ...assg };
    newAssg.items.push({ type: "script", value: "" });
    setAssg(newAssg);
  };

  // Prompt
  const onAddPrompt = () => {
    console.log("onAddPrompt");
    const newAssg = { ...assg };
    newAssg.items.push({ type: "prompt", value: "" });
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

  const onChangeElementInput = (index, input) => {
    console.log("onChangeElementInput");
    const newAssg = { ...assg };
    newAssg.items[index].input = input;
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

  const onNullifyElementAttributeValue = (index, attrIndex) => {
    console.log("onNullifyElementAttributeValue");
    const newAssg = { ...assg };
    const value = newAssg.items[index].attrs[attrIndex].value;
    newAssg.items[index].attrs[attrIndex].value = value === null ? "" : null;
    setAssg(newAssg);
  };

  const onAddElementText = (index) => {
    console.log("onAddElementText");
    const newAssg = { ...assg };
    newAssg.items[index].texts.push({ value: "", regex: false });
    setAssg(newAssg);
  };

  const onRemoveElementText = (index, textIndex) => {
    console.log("onRemoveElementText");
    const newAssg = { ...assg };
    newAssg.items[index].texts.splice(textIndex, 1);
    setAssg(newAssg);
  };

  const onChangeElementTextValue = (index, textIndex, text) => {
    console.log("onChangeElementText");
    const newAssg = { ...assg };
    newAssg.items[index].texts[textIndex].value = text;
    setAssg(newAssg);
  };

  const onChangeElementTextRegex = (index, textIndex) => {
    console.log("onRegexifyElementText");
    const newAssg = { ...assg };
    const value = newAssg.items[index].texts[textIndex].regex;
    newAssg.items[index].texts[textIndex].regex = !value;
    setAssg(newAssg);
  };

  const onChangeDescription = (index, description) => {
    console.log("onChangeDescription");
    const newAssg = { ...assg };
    newAssg.items[index].description = description;
    setAssg(newAssg);
  };

  // Drag and Drop
  const onDragEnd = (result) => {
    const newAssg = { ...assg };
    const src = result.source.index;
    if (result.destination) {
      const dst = result.destination.index;
      const [removed] = newAssg.items.splice(src, 1);
      newAssg.items.splice(dst, 0, removed);
    } else {
      newAssg.items.splice(src, 1);
    }
    setAssg(newAssg);
  };

  if (!assg) return;

  return (
    <div className="m-3 w-1/2">
      <div id="assignment-controls">
        <Controls
          assg={assg}
          onChangeAssgName={onChangeAssgName}
          onChangeAssgPoints={onChangeAssgPoints}
          onAddPrompt={onAddPrompt}
          onAddElement={onAddElement}
          onAddReload={onAddReload}
          onAddConfirm={onAddConfirm}
          onAddConsole={onAddConsole}
          onAddScriptCheck={onAddScriptCheck}
          onSave={onSaveAssg}
          onCopy={onCopyAssg}
          onDelete={onDeleteAssg}
        />
      </div>
      <div id="assignment-items" className="mb-[100px]">
        {assg.items.length > 0 && (
          <DragDrop
            items={assg.items}
            onChangeValue={onChangeValue}
            onRemove={onRemoveItem}
            onChangeConsoleRegex={onChangeConsoleRegex}
            onChangeElementName={onChangeElementName}
            onChangeElementInput={onChangeElementInput}
            onChangeElementAction={onChangeElementAction}
            onAddElementAttribute={onAddElementAttribute}
            onRemoveElementAttribute={onRemoveElementAttribute}
            onChangeElementAttributeName={onChangeElementAttributeName}
            onChangeElementAttributeValue={onChangeElementAttributeValue}
            onNullifyElementAttributeValue={onNullifyElementAttributeValue}
            onAddElementText={onAddElementText}
            onRemoveElementText={onRemoveElementText}
            onChangeElementTextValue={onChangeElementTextValue}
            onChangeElementTextRegex={onChangeElementTextRegex}
            onChangeDescription={onChangeDescription}
            onDragEnd={onDragEnd}
          />
        )}
      </div>
    </div>
  );
};

export default Assignment;
