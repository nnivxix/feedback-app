import { CSSProperties } from "react";
import { HeaderType } from "../types/schema";
import NavigationLink from "./NavigationLink";
function Header(props: HeaderType) {
  const { title, version } = props;
  const HeaderStyle: CSSProperties = {
    textAlign: "center",
    color: "#BE5A83",
    padding: "2px 0px",
    background: "#0E2954",
  };

  return (
    <header style={HeaderStyle}>
      <h1 className="header">
        {title} - v.{version}
      </h1>
      <NavigationLink />
    </header>
  );
}

export default Header;
