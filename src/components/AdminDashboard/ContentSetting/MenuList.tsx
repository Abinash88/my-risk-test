import React, { useContext, useState } from "react";
import ReactDOM from "react-dom";
import {
  DndContext,
  useSensor,
  useSensors,
  PointerSensor,
  closestCenter,
  TouchSensor,
} from "@dnd-kit/core";
import Context from "../../../context";
import {
  SortableContext,
  horizontalListSortingStrategy,
  useSortable,
  arrayMove,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { menuData } from "@/lib/fakedata";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useMediaQuery, useTheme } from "@mui/material";

// Define activation constraints
const pointerSensorOptions = {
  activationConstraint: {
    distance: 10, // Dragging will only start after moving 10 pixels
  },
};

const touchSensorOptions = {
  activationConstraint: {
    delay: 100, // Dragging starts only after holding for 250ms
    tolerance: 5, // Allow for 5 pixels of movement before drag starts
  },
};



// Sortable Item component
const SortableItem = ({ id, activeMenu, setActiveMenu }) => {
  const { data, setData } = useContext(Context);
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners} // Dragging is enabled for this wrapper div
    >
      {/* No drag listeners here to prevent dragging on button click */}
      <button
        className={`w-fit h-11 text-xs flex items-center justify-center ${
          activeMenu === id
            ? "mx-2 bg-[#3838F0] px-5 py-3 text-white"
            : "border border-[#C7C8C9] bg-[#ECECEE] mx-2 px-5 py-3 text-black"
        }`}
        onClick={(e) => {
          e.preventDefault(); // Prevent default behavior
          e.stopPropagation(); // Prevent propagation to drag events
          setActiveMenu(id);
          setData(id);
        }}
      >
        <LeftOutlined className="mr-3 w-2" />
        {id}
        <RightOutlined className="ml-3 w-2" />
      </button>
    </div>
  );
};


export default function MenuItems() {
  const [items, setItems] = useState(menuData);
  const [activeMenu, setActiveMenu] = useState(items[0].name);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // True if screen is small

  // Sensors with activation constraints
  const sensors = useSensors(
    useSensor(isMobile ? TouchSensor : PointerSensor, isMobile ? touchSensorOptions : pointerSensorOptions)
  );

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      setItems((prevItems) => {
        const oldIndex = prevItems.findIndex((item) => item.name === active.id);
        const newIndex = prevItems.findIndex((item) => item.name === over.id);
        return arrayMove(prevItems, oldIndex, newIndex);
      });
    }
  };

  return (
    <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
      <SortableContext
        items={items.map((item) => item.name)}
        strategy={horizontalListSortingStrategy}
      >
        <div
          style={{
            display: "flex",
            padding: 18,
            background: "transparent",
            overflowX: "auto",
          }}
          className="scrollBar"
        >
          {items.map((item) => (
            <SortableItem
              key={item.name}
              id={item.name}
              activeMenu={activeMenu}
              setActiveMenu={setActiveMenu}
            />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
}
