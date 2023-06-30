import { CSSProperties } from "react";
import { HeaderType } from "../types/schema";

function Header(props: HeaderType) {
  const { title, version } = props;
  const HeaderStyle: CSSProperties = {
    textAlign: "center",
    color: "#BE5A83",
  };

  return (
    <header style={HeaderStyle}>
      <h1 className="header">
        {title} - {version}
      </h1>
    </header>
  );
}

export default Header;
