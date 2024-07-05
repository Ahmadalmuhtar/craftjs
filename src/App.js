import React from "react";
import { Editor, Frame, Element } from "@craftjs/core";
import TextComponent from "./components/TextComponent";
import Container from "./components/Container";
import { SaveButton } from "./components/SaveButton";

const App = () => {
  // Example JSON string representing your components
  const jsonString = JSON.stringify({
    ROOT: {
      type: "div",
      props: {},
      displayName: "Container",
      custom: {},
      hidden: false,
      nodes: ["node-1"],
      linkedNodes: {},
    },
    "node-1": {
      type: "TextComponent",
      props: { text: "Hello, world!" },
      displayName: "TextComponent",
      custom: {},
      hidden: false,
      nodes: [],
      linkedNodes: {},
    },
  });

  return (
    <Editor resolver={{ TextComponent, Container }}>
      <Frame json={jsonString}>
        <Element is={Container} canvas>
          <TextComponent text="Hello, world!" />
        </Element>
      </Frame>
      <SaveButton />
    </Editor>
  );
};

export default App;
