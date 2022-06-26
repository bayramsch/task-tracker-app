// import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, showAddTask, toggleShow }) => {
  // const handleClick = () => {
  //   console.log("Click with handle from HEader");
  // };
  return (
    <div className="header">
      <h1>{title}</h1>
      {/* <Button
        color="purple"
        text="Show Add Task Bar"
        handleClick={handleClick}
      /> */}
      <Button
        color={showAddTask ? "red" : "purple"}
        text={showAddTask ? "Close Add Task Bar" : "Show Add Task Bar"}
        toggleShow={toggleShow}
      />
    </div>
  );
};

// Header.propTypes = {
//   title: PropTypes.string.isRequired,
// };

// Header.defaultProps = {
//   title: "Task Tracker",
// };

// title = "Task Default"  in props area


//! number is required veya string is required ihtiyacimiz varsa props tarafinda bu yapiyi kullanabiliriz
/* Header.PropTypes = {
    title: PropTypes.string
} ; */

//! App.js den props gelmedi mi default olrak bunu kullanir
/* Header.defaultProps = {
    title:"Task Track Default"
}
 */
export default Header