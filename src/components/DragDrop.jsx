import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Prompt from "./Prompt";
import Element from "./Element";
import Reload from "./Reload";
import Confirm from "./Confirm";
import Console from "./Console";

const DragDrop = (props) => {
  return (
    <DragDropContext onDragEnd={props.onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided, snapshot) => (
          <div
            className="assignment"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {props.items.map((item, index) => (
              <Draggable key={index} draggableId={`${index}`} index={index}>
                {(provided, snapshot) => (
                  <>
                    {item.type === "prompt" && (
                      <Prompt
                        prompt={item}
                        index={index}
                        onChangePrompt={props.onChangePrompt}
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
                        onChangeConfirm={props.onChangeConfirm}
                        provided={provided}
                      />
                    )}
                    {item.type === "console" && (
                      <Console
                        console={item}
                        index={index}
                        onChangeConsoleValue={props.onChangeConsoleValue}
                        onChangeConsoleRegex={props.onChangeConsoleRegex}
                        provided={provided}
                      />
                    )}
                    {item.type === "element" && (
                      <Element
                        element={item}
                        index={index}
                        onChangeElementName={props.onChangeElementName}
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
