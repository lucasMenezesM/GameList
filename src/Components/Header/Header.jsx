import { TfiGame } from "react-icons/tfi";
import { RiGameLine } from "react-icons/ri";

import "./Style.css";

export default function Header() {
  return (
    <header>
      <div className="container-header">
        <div className="title">
          <h1>
            {<RiGameLine />} Game List {<TfiGame />}
          </h1>
        </div>
      </div>
    </header>
  );
}
