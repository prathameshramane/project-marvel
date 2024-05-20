import React, { useContext, useState } from "react";
import MarvelSelect from "../../../utils/components/MarvelSelect/MarvelSelect";
import MarvelSelectOption from "../../../utils/components/MarvelSelect/MarvelSelectOption";
import dateDescriptors from "../../../fixtures/dateDescriptors";
import ComicFilterContext from "../../../contexts/ComicFilterContext";

const DateDescriptorFilter: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string | undefined>();
  const [currentQuery, setCurrentQuery] = useState<string | null>(null);
  const comicFilterContext = useContext(ComicFilterContext);

  const updateQuery = (updatedQuery: string | null): void => {
    comicFilterContext?.updateAppliedFilter({
        dateDescriptor: updatedQuery ?? undefined,
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

  return (
    <MarvelSelect selectedOption={currentQuery ? selectedOption : "Date Descriptor"}>
      <MarvelSelectOption
        label="Select"
        value={null}
        isSelected={currentQuery === null}
        onSelect={handleSelection}
      ></MarvelSelectOption>
      {dateDescriptors.map((field) => (
        <MarvelSelectOption
          key={field.slug}
          label={field.label}
          value={field.slug}
          onSelect={handleSelection}
          isSelected={isOptionSelected(field.label)}
        ></MarvelSelectOption>
      ))}
    </MarvelSelect>
  );
};

export default DateDescriptorFilter;
