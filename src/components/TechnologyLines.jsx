// Preserve the desktop composition; smaller screens wrap the text naturally.
export const TechnologyLines = ({ lines, joinWithoutSpaceAfter = [] }) => (
  <span className="xl:block">
    {lines.map((line, index) => (
      <span key={index} className="xl:block xl:whitespace-nowrap">
        {line}
        {index < lines.length - 1 && !joinWithoutSpaceAfter.includes(index) && (
          <span className="xl:hidden"> </span>
        )}
      </span>
    ))}
  </span>
);
