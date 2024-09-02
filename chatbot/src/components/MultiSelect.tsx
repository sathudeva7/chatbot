import React, { useState } from "react";

import Select, { ActionMeta, OnChangeValue, StylesConfig } from "react-select";

const MultiSelect = ({ colourOptions }) => {
  const updatedItems = colourOptions.map((item) => ({
    ...item, // Spread the existing properties
    label: item.content, // Add the label field
    value: item.content, // Add the value field
  }));
  const styles: StylesConfig<ColourOption, true> = {
    multiValue: (base, state) => {
      return state.data.isFixed ? { ...base, backgroundColor: "gray" } : base;
    },
    multiValueLabel: (base, state) => {
      return state.data.isFixed
        ? { ...base, fontWeight: "bold", color: "white", paddingRight: 6 }
        : base;
    },
    multiValueRemove: (base, state) => {
      return state.data.isFixed ? { ...base, display: "none" } : base;
    },
  };

  const orderOptions = (values) => {
    return values
      .filter((v) => v.isFixed)
      .concat(values.filter((v) => !v.isFixed));
  };

  const [value, setValue] = useState<readonly ColourOption[]>(orderOptions([]));

  const onChange = (
    newValue: OnChangeValue<ColourOption, true>,
    actionMeta: ActionMeta<ColourOption>
  ) => {
    switch (actionMeta.action) {
      case "remove-value":
      case "pop-value":
        if (actionMeta.removedValue.isFixed) {
          return;
        }
        break;
      case "clear":
        newValue = updatedItems.filter((v) => v.isFixed);
        break;
    }

    setValue(orderOptions(newValue));
  };

  return (
    <Select
      value={value}
      isMulti
      styles={styles}
      isClearable={value.some((v) => !v.isFixed)}
      name="colors"
      className="basic-multi-select"
      classNamePrefix="select"
      onChange={onChange}
      options={updatedItems}
    />
  );
};

export default MultiSelect;
