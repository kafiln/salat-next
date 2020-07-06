const Base = ({
  children,
  baseClasses,
  baseStyles,
  className,
  tag,
  style,
  ...props
}) => {
  const TagName = tag || 'div';

  return (
    <TagName
      {...props}
      style={{ ...baseStyles, ...style }}
      className={`${baseClasses} ${className ? className : ''}`}
    >
      {children}
    </TagName>
  );
};

export default Base;
