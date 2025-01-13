import "../styles/content.css";
const Information = ({ heading, detail }) => {
  return (
    <div className="info">
      <h4>{heading}</h4>
      <div>{detail}</div>
    </div>
  );
};

export default Information;
