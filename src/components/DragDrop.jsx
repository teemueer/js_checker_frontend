import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Prompt from "./Prompt";
import Element from "./Element";
import Reload from "./Reload";

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
                        onChangeElementText={props.onChangeElementText}
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
