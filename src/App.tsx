import { useState, DragEvent } from "react";
import "./App.css";
import CalculateButton from "./components/constructor/calculate-button/calculate-button";
import Display from "./components/constructor/display/display";
import Numbers from "./components/constructor/numbers/numbers";
import Operators from "./components/constructor/operators/operators";
import Switch from "./components/canvas/switch/switch";
import CanvasEmpty from "./components/canvas/canvas-empty/canvas-empty";

type Item = {
  element: JSX.Element;
  name: string;
  blocked: boolean;
};

function App() {
  const [items, setItems] = useState<Item[]>([
    { element: <Display />, name: "display", blocked: false },
    { element: <Operators />, name: "operators", blocked: false },
    { element: <Numbers />, name: "numbers", blocked: false },
    { element: <CalculateButton />, name: "calculateButton", blocked: false },
  ]);

  const noDraggbleEl = "display";

  const [canvasItems, setCanvasItems] = useState<Item[]>([]);
  const [moveEl, setMoveEl] = useState<boolean>(false);
  const [currentItem, setCurrentItem] = useState<Item | null>(null);

  const dragStartHandler = (e: DragEvent<HTMLDivElement>, item: Item) => {
    setCurrentItem(item);
  };

  const dragEndHandler = (e: DragEvent<HTMLDivElement>) => {
    setMoveEl(false);
  };

  const dragOverHandler = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setMoveEl(true);
  };

  const dropHandler = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();

    if (!currentItem) {
      return;
    }

    if (canvasItems.length === 0) {
      setCanvasItems([currentItem]);
      return;
    }

    const duplicate = canvasItems.find(
      (item) => item.name === currentItem.name
    );

    if (duplicate === undefined) {
      setCanvasItems((items) => [...items, currentItem]);
    }
  };

  const dropCanvasHandler = (e: DragEvent<HTMLDivElement>, item: Item) => {
    if (!currentItem) {
      return;
    }

    const currentItemId = canvasItems.indexOf(currentItem);
    const itemId = canvasItems.indexOf(item);

    return canvasItems.splice(
      itemId,
      0,
      canvasItems.splice(currentItemId, 1)[0]
    );
  };

  const canvasTemplate = (item: Item) => {
    return (
      <div
        className="wrapper"
        key={item.name}
        onDragStart={(e) => dragStartHandler(e, item)}
        onDragEnd={(e) => dragEndHandler(e)}
        onDrop={(e) => dropCanvasHandler(e, item)}
        draggable={item.name !== noDraggbleEl}
      >
        {item.element}
      </div>
    );
  };

  const canvasBlockedTemplate = (item: Item) => {
    return (
      <div className="wrapper" key={item.name}>
        {item.element}
      </div>
    );
  };

  return (
    <div className="App">
      <main className="main">
        <div className="constructor">
          {items.map((item, index) => {
            return (
              <div
                className={item.blocked ? "wrapper blocked" : "wrapper"}
                key={index}
                onDragStart={(e) => dragStartHandler(e, item)}
                onDragEnd={(e) => dragEndHandler(e)}
                draggable={!item.blocked}
              >
                {item.element}
              </div>
            );
          })}
        </div>
        <section className={"canvas"}>
          <Switch />

          <div
            className={
              moveEl && canvasItems.length === 0
                ? "canvas__container canvas__container-hover"
                : "canvas__container"
            }
            onDrop={(e) => dropHandler(e)}
            onDragOver={(e) => dragOverHandler(e)}
            onDragLeave={(e) => dragEndHandler(e)}
          >
            {canvasItems.length > 0 ? (
              canvasItems.map((item) =>
                item.name === noDraggbleEl
                  ? canvasBlockedTemplate(item)
                  : canvasTemplate(item)
              )
            ) : (
              <CanvasEmpty />
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
