import Service from "./Service";
import styles from "../styles/whatWeDo.module.scss";
import { FaDatabase } from "react-icons/fa";
import { FaImages } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { FaGlobeAfrica } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import { FaDesktop } from "react-icons/fa";
import { FaNetworkWired } from "react-icons/fa";
import { FaMicrosoft } from "react-icons/fa";

const dataPoint = [
  {
    id: 1,
    header: "Graphics Designing",
    icon: <FaImages />,
    description: `Mauris volutpat urna tristique finibus iaculis. Morbi facilisis,
                justo eu vulputate elementum, est augue tincidunt ante, sed
                efficitur leo ligula vel velit.`,
    link: `#`,
  },
  {
    id: 2,
    header: "Website Development",
    icon: <FaLaptopCode />,
    description: `Mauris volutpat urna tristique finibus iaculis. Morbi facilisis,
                justo eu vulputate elementum, est augue tincidunt ante, sed
                efficitur leo ligula vel velit.`,
    link: `#`,
  },
  {
    id: 3,
    header: "Computer System Development",
    icon: <FaDesktop />,
    description: `Mauris volutpat urna tristique finibus iaculis. Morbi facilisis,
                justo eu vulputate elementum, est augue tincidunt ante, sed
                efficitur leo ligula vel velit.`,
    link: `#`,
  },
  {
    id: 4,
    header: "Mobile Applications Development",
    icon: <FaGooglePlay />,
    description: `Mauris volutpat urna tristique finibus iaculis. Morbi facilisis,
                justo eu vulputate elementum, est augue tincidunt ante, sed
                efficitur leo ligula vel velit.`,
    link: `#`,
  },
  {
    id: 5,
    header: "Database Development",
    icon: <FaDatabase />,
    description: `Mauris volutpat urna tristique finibus iaculis. Morbi facilisis,
                justo eu vulputate elementum, est augue tincidunt ante, sed
                efficitur leo ligula vel velit.`,
    link: `#`,
  },
  {
    id: 6,
    header: "Website Hosting",
    icon: <FaGlobeAfrica />,
    description: `Mauris volutpat urna tristique finibus iaculis. Morbi facilisis,
                justo eu vulputate elementum, est augue tincidunt ante, sed
                efficitur leo ligula vel velit.`,
    link: `#`,
  },
  {
    id: 7,
    header: "Computer Networking",
    icon: <FaNetworkWired />,
    description: `Mauris volutpat urna tristique finibus iaculis. Morbi facilisis,
                justo eu vulputate elementum, est augue tincidunt ante, sed
                efficitur leo ligula vel velit.`,
    link: `#`,
  },
  {
    id: 8,
    header: "Software Installations",
    icon: <FaMicrosoft />,
    description: `Mauris volutpat urna tristique finibus iaculis. Morbi facilisis,
                justo eu vulputate elementum, est augue tincidunt ante, sed
                efficitur leo ligula vel velit.`,
    link: `#`,
  },
];

const what = () => {
  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <h2>What we do</h2>
        <div className={styles.innerContainer}>
          {dataPoint.map((data) => (
            <Service
              key={data.id}
              header={data.header}
              icon={data.icon}
              description={data.description}
              link={data.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default what;
