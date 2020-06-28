const Emoji = ({ name, icon }) => (
  <div style={{ userSelect: 'none' }}>
    <span role="img" aria-label={name}>
      {icon}
    </span>
  </div>
);

export default Emoji;
