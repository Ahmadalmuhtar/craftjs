import { useEditor, useNode } from "@craftjs/core";
import React from "react";

const Container = () => {
  const {
    actions: { add },
    query: { createNode, node },
  } = useEditor();
  const {
    connectors: { drag, connect },
    id,
  } = useNode();

  return (
    <div ref={(dom) => connect(drag(dom))}>
      <a
        onClick={() => {
          const {
            data: { type, props },
          } = node(id).get();
          add(createNode(React.createElement(type, props)));
        }}
      >
        Make a Copy of me!!!
      </a>
    </div>
  );
};

export default Container;
