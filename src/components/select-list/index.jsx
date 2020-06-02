import React from "react";
import { Container, Select } from "./styles";

const byLabel = (a, b) => (a.label > b.label ? 1 : b.label > a.label ? -1 : 0);

const SelectList = ({ onChange, cities, id, lang }) => {
  const options = cities
    ? cities
        .map((e) => ({
          value: e.id,
          label: e.names[lang],
        }))
        .sort(byLabel)
    : [];

  const value = options.find((e) => e.value == id);

  const customStyles = {
    singleValue: (provided) => {
      const padding = "20px 10px";
      // const textAlign = "center";
      return { ...provided, padding, width: "100%" };
    },
  };

  return (
    <Container>
      <Select
        instanceId={id}
        styles={customStyles}
        options={options}
        // menuPlacement={"top"}
        value={value}
        isRtl={lang === "ar-ma"}
        onChange={onChange}
      />
    </Container>
  );
};

export default React.memo(SelectList);
