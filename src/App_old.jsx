import { useState } from "react";
import DragDrop from "./components/DragDrop";
import useResource from "../hooks/useResource";

const App = () => {
  const tests = useResource("/api/test");

  const [selectedTest, setSelectedTest] = useState(undefined);
  const [elements, setElements] = useState([]);

  const selectTest = (event) => {
    setElements(
      tests.find((test) => {
        if (test.name === event.target.value) return Array.from(test.elements);
      })
    );
  };

  /*
  const onSave = () => {
    console.log(elements);
  };

  const onNewElement = () => {
    const newElements = [...elements, {}];
    setElements(newElements);
  };

  const onDragEnd = (result) => {
    const newElements = Array.from(elements);
    const src = result.source.index;
    if (result.destination) {
      const dst = result.destination.index;
      [newElements[src], newElements[dst]] = [
        newElements[dst],
        newElements[src],
      ];
    } else {
      newElements.splice(src, 1);
    }
    setElements(newElements);
  };

  const onChangeName = (elementToChange, newName) => {
    console.log("onChangeName");
    const newElements = elements.map((element) => {
      if (element === elementToChange) {
        element.name = newName;
      }
      return element;
    });
    setElements(newElements);
  };

  const onSelectAction = (elementToChange, newAction) => {
    console.log("onSelectAction");
    const newElements = elements.map((element) => {
      if (element === elementToChange) {
        newAction ? (element.action = newAction) : delete element.action;
      }
      return element;
    });
    setElements(newElements);
  };

  const onAddAttribute = (elementToChange) => {
    console.log("onAddAttribute");
    const newElements = elements.map((element) => {
      if (element === elementToChange) {
        if (!element.attrs) element.attrs = [];
        element.attrs.push({ name: "", value: "" });
      }
      return element;
    });
    setElements(newElements);
  };

  const onChangeAttribute = (elementToChange, oldAttr, newAttr) => {
    console.log("onRemoveAttribute");
    const newElements = elements.map((element) => {
      if (element === elementToChange) {
        const attrIndex = element.attrs.findIndex((attr) => attr === oldAttr);
        element.attrs[attrIndex] = newAttr;
      }
      return element;
    });
    setElements(newElements);
  };

  const onRemoveAttribute = (elementToChange, attrToRemove) => {
    console.log("onRemoveAttribute");
    const newElements = elements.map((element) => {
      if (element === elementToChange)
        element.attrs = element.attrs.filter((attr) => attr !== attrToRemove);
      return element;
    });
    setElements(newElements);
  };

  return (
    <>
      <div>
        <label htmlFor="tests">Select test: </label>
        <select id="tests" onChange={selectTest}>
          <option>Create new test</option>
          {tests.map((test) => (
            <option key={test.name} value={test.name}>
              {test.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <div>
          <button onClick={onNewElement}>New element</button>
        </div>
        {elements && (
          <DragDrop
            elements={elements}
            onDragEnd={onDragEnd}
            onChangeName={onChangeName}
            onSelectAction={onSelectAction}
            onAddAttribute={onAddAttribute}
            onChangeAttribute={onChangeAttribute}
            onRemoveAttribute={onRemoveAttribute}
          />
        )}
      </div>
      <div>
        <pre>{elements && JSON.stringify(elements, null, "  ")}</pre>
      </div>
    </>
  );
  */
};

export default App;
