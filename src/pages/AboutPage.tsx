import Card from "../components/shared/Card";
import { Link } from "react-router-dom";
function AboutPage() {
  return (
    <Card cool={false}>
      <div>
        <h1>About Feedback App</h1>
        <Link to={"/"}>back to home</Link>
      </div>
    </Card>
  );
}

export default AboutPage;
