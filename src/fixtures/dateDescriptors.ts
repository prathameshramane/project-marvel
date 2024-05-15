interface DateDescriptor {
  label: string;
  slug: string;
}

const dateDescriptors: DateDescriptor[] = [
  {
    label: "Last Week",
    slug: "lastWeek",
  },
  {
    label: "This Week",
    slug: "thisWeek",
  },
  {
    label: "Next Week",
    slug: "nextWeek",
  },
  {
    label: "Next Month",
    slug: "nextMonth",
  },
];

export default dateDescriptors;
