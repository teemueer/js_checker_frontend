import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Element from "./Element";

const DragDrop = (props) => (
  <DragDropContext onDragEnd={props.onDragEnd}>
    <Droppable droppableId="droppable">
      {(provided, snapshot) => (
        <div id="elements" ref={provided.innerRef} {...provided.droppableProps}>
          {props.elements.map((element, index) => (
            <Draggable key={index} draggableId={`${index}`} index={index}>
              {(provided, snapshot) => (
                <Element
                  element={element}
                  provided={provided}
                  onChangeName={props.onChangeName}
                  onSelectAction={props.onSelectAction}
                  onAddAttribute={props.onAddAttribute}
                  onChangeAttribute={props.onChangeAttribute}
                  onRemoveAttribute={props.onRemoveAttribute}
                />
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  </DragDropContext>
);

export default DragDrop;
