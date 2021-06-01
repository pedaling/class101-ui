import React from "react"
import { RadioButtonGroup } from '@class101/ui';

export default () => {
  return typeof window !== 'undefined' && RadioButtonGroup && <RadioButtonGroup/>
}
