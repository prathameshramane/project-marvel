import React, { useState } from "react";
import MarvelSelect from "../../../utils/components/MarvelSelect/MarvelSelect";
import MarvelSelectOption from "../../../utils/components/MarvelSelect/MarvelSelectOption";
import { IconButton } from "@chakra-ui/react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import orderByFields from "../../../fixtures/orderBy";

const OrderByFilter: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string | undefined>(
    "select"
  );
  const [currentQuery, setCurrentQuery] = useState<string | null>();

  const handleSelection = (values: {
    selectedValue: string | null;
    selectedLabel?: string;
  }): void => {
    setSelectedOption(values.selectedLabel);
    setCurrentQuery(values.selectedValue);
  };

  const isOptionSelected = (currentOption: string): boolean => {
    return (
      selectedOption?.toLowerCase().includes(currentOption.toLowerCase()) ??
      false
    );
  };

  const handleDirection = (query: string, label: string) => {
    if (currentQuery && currentQuery.includes(query)) {
      const updatedQuery = currentQuery?.includes("-")
        ? currentQuery.slice(1)
        : "-" + currentQuery;
      const updatedLabel = updatedQuery.includes("-")
        ? label + " (DESC)"
        : label + " (ASC)";
      setSelectedOption(updatedLabel);
      setCurrentQuery(updatedQuery);
    } else {
      setSelectedOption(label);
      setCurrentQuery("-" + query);
    }
  };

  return (
    <MarvelSelect selectedOption={selectedOption}>
      <MarvelSelectOption
        label="select"
        value={null}
        onSelect={handleSelection}
      ></MarvelSelectOption>
      {orderByFields.map((field) => (
        <MarvelSelectOption
          key={field.slug}
          label={field.label}
          value={field.slug}
          onSelect={handleSelection}
          isSelected={isOptionSelected(field.label)}
          EndButton={() => (
            <IconButton
              aria-label="Add to friends"
              icon={
                currentQuery?.includes(field.slug) &&
                currentQuery.includes("-") ? (
                  <FaArrowUp />
                ) : (
                  <FaArrowDown />
                )
              }
              backgroundColor="inherit"
              borderRadius="100%"
              sx={{
                ":hover": {
                  backgroundColor: "inherit",
                  boxShadow: "lg",
                  border: "1px",
                  borderColor: "#dcdcdc",
                },
              }}
              onClick={() => handleDirection(field.slug, field.label)}
            />
          )}
        ></MarvelSelectOption>
      ))}
    </MarvelSelect>
  );
};

export default OrderByFilter;
