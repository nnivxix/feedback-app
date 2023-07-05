import { HeaderType } from "../types/schema";
import NavigationLink from "./NavigationLink";

function Header(props: HeaderType) {
  const { title } = props;

  return (
    <header>
      <h1 className="header">{title}</h1>
      <NavigationLink />
    </header>
  );
}

export default Header;
