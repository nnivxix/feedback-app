import { HeaderType } from "../types/schema";

function Header(props: HeaderType) {
  const { title, version } = props;

  return (
    <header>
      <h1>
        {title} - {version}
      </h1>
    </header>
  );
}

export default Header;
