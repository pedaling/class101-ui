import React from "react";
import { RadioButtonGroup as RadioButtonGroupUi } from "@class101/ui";

export const RadioButtonGroup = () =>
  typeof window !== "undefined" && RadioButtonGroupUi && <RadioButtonGroupUi />;

export const handleAlert = (e) => {
  if (window) {
    window.alert(e);
  }
};
