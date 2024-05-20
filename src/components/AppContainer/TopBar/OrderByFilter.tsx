import React, { useContext, useState } from "react";
import MarvelSelect from "../../../utils/components/MarvelSelect/MarvelSelect";
import MarvelSelectOption from "../../../utils/components/MarvelSelect/MarvelSelectOption";
import { IconButton } from "@chakra-ui/react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import orderByFields from "../../../fixtures/orderBy";
import ComicFilterContext from "../../../contexts/ComicFilterContext";

const OrderByFilter: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string | undefined>();
  const [currentQuery, setCurrentQuery] = useState<string | null>(null);
  const comicFilterContext = useContext(ComicFilterContext);

  const updateQuery = (updatedQuery: string | null): void => {
    comicFilterContext?.updateAppliedFilter({
      orderBy: updatedQuery ?? undefined,
    });
    setCurrentQuery(updatedQuery);
  };

  const handleSelection = (values: {
    selectedValue: string | null;
    selectedLabel?: string;
  }): void => {
    setSelectedOption(values.selectedLabel);
    updateQuery(values.selectedValue);
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
      updateQuery(updatedQuery);
    } else {
      setSelectedOption(label);
      updateQuery("-" + query);
    }
  };

  return (
    <MarvelSelect selectedOption={currentQuery ? selectedOption : "Order By"}>
      <MarvelSelectOption
        label="Select"
        value={null}
        isSelected={currentQuery === null}
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
