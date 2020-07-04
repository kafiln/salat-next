const Emoji = ({ name, icon }) => (
  <div style={{ userSelect: 'none' }}>
    <span className="text-center text-2xl" role="img" aria-label={name}>
      {icon}
    </span>
  </div>
);

export default Emoji;
