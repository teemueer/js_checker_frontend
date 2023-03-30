import "./App.css";
import { useState } from "react";
import DragDrop from "./components/DragDrop";
import useResource from "./hooks/useResource";

const App = () => {
  const [tests, testService] = useResource("/api/test");
  const [selectedTest, setSelectedTest] = useState(null);
  const [elements, setElements] = useState([]);
  const [testName, setTestName] = useState("");

  const selectTest = (event) => {
    const testName = event.target.value;

    if (testName === "__new_test") {
      setSelectedTest(null);
      setElements([]);
    } else {
      const test = tests.find((test) => test.name === testName);
      if (test) {
        setSelectedTest(test);
        setElements(test.elements);
      }
    }
  };

  const onSave = async () => {
    const newTest = {
      name: testName,
      json: { elements },
    };
    testService.post(newTest);
  };

  const onNewElement = () => {
    const newElements = [...elements, { name: "", attrs: [] }];
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
          <option value="__new_test">Create a new test</option>
          {tests.map((test) => (
            <option key={test.name} value={test.name}>
              {test.name}
            </option>
          ))}
        </select>
      </div>
      {!selectedTest && (
        <div>
          <label htmlFor="test-name">Test name: </label>
          <input
            id="test-name"
            onChange={(event) => setTestName(event.target.value)}
          />
        </div>
      )}
      <div>
        <button onClick={onNewElement}>New element</button>
        <button onClick={onSave}>Save</button>
      </div>
      <div>
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
};

export default App;
