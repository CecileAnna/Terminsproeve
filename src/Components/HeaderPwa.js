import { usePWAInstall } from "react-use-pwa-install";
import Heading4 from "../subcomponents/texts/Heading4";

const HeaderPwa = () => {
  const install = usePWAInstall();

  return (
    <header
      style={{
        padding: "1rem",
        display: "flex",
        flexFlow: "column nowrap",
        backdropFilter: "invert(90%)",
        gap: "1rem",
      }}
    >
      <Heading4 text="Intall to use the app offline" />
      {install && (
        <button className="btn btn-long" onClick={install}>
          Install app
        </button>
      )}
    </header>
  );
};

export default HeaderPwa;
