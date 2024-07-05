import { useEditor } from "@craftjs/core";
import React from "react";

export const SaveButton = () => {
  const { query } = useEditor();
  return <a onClick={() => console.log(query.serialize())}>Get JSON</a>;
};
