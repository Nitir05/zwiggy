const scrollFunction = (parent, child, direction, units) => {
  if (!parent || !child) {
    return new Error("Please provide both parent and child elements");
  }
  if (direction === "forward") parent.scrollLeft += child.offsetWidth * units;
  else if (direction === "back") parent.scrollLeft -= child.offsetWidth * units;
};

export { scrollFunction };
