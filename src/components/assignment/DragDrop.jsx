import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Prompt from "./Prompt";
import Element from "./Element";
import Reload from "./Reload";
import Confirm from "./Confirm";
import Console from "./Console";
import Script from "./Script";

const DragDrop = (props) => {
  return (
    <DragDropContext onDragEnd={props.onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided, snapshot) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {props.items.map((item, index) => (
              <Draggable key={index} draggableId={`${index}`} index={index}>
                {(provided, snapshot) => (
                  <>
                    {item.type === "prompt" && (
                      <Prompt
                        prompt={item}
                        index={index}
                        onChangeValue={props.onChangeValue}
                        provided={provided}
                      />
                    )}
                    {item.type === "reload" && (
                      <Reload index={index} provided={provided} />
                    )}
                    {item.type === "confirm" && (
                      <Confirm
                        confirm={item}
                        index={index}
                        onChangeValue={props.onChangeValue}
                        provided={provided}
                      />
                    )}
                    {item.type === "console" && (
                      <Console
                        console={item}
                        index={index}
                        onChangeValue={props.onChangeValue}
                        onChangeConsoleRegex={props.onChangeConsoleRegex}
                        onChangeDescription={props.onChangeDescription}
                        provided={provided}
                      />
                    )}
                    {item.type === "script" && (
                      <Script
                        script={item}
                        index={index}
                        onChangeValue={props.onChangeValue}
                        onChangeDescription={props.onChangeDescription}
                        provided={provided}
                      />
                    )}
                    {item.type === "element" && (
                      <Element
                        element={item}
                        index={index}
                        onChangeElementName={props.onChangeElementName}
                        onChangeElementInput={props.onChangeElementInput}
                        onChangeElementAction={props.onChangeElementAction}
                        onAddElementAttribute={props.onAddElementAttribute}
                        onRemoveElementAttribute={
                          props.onRemoveElementAttribute
                        }
                        onChangeElementAttributeName={
                          props.onChangeElementAttributeName
                        }
                        onChangeElementAttributeValue={
                          props.onChangeElementAttributeValue
                        }
                        onNullifyElementAttributeValue={
                          props.onNullifyElementAttributeValue
                        }
                        onAddElementText={props.onAddElementText}
                        onRemoveElementText={props.onRemoveElementText}
                        onChangeElementTextValue={
                          props.onChangeElementTextValue
                        }
                        onChangeElementTextRegex={
                          props.onChangeElementTextRegex
                        }
                        onChangeDescription={props.onChangeDescription}
                        provided={provided}
                      />
                    )}
                  </>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default DragDrop;
