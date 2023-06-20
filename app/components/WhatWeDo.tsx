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
    description: `We create artistic graphics works that communicates your intended messages and objectives.`,
    link: `/Graphics`,
  },
  {
    id: 2,
    header: "Software Development",
    icon: <FaLaptopCode />,
    description: `We design and build fully efficient working software solutions, that are customized to meet organizational needs.`,
    link: `/Software`,
  },
  // {
  //   id: 3,
  //   header: "Computer System Development",
  //   icon: <FaDesktop />,
  //   description: `Mauris volutpat urna tristique finibus iaculis. Morbi facilisis,
  //               justo eu vulputate elementum, est augue tincidunt ante, sed
  //               efficitur leo ligula vel velit.`,
  //   link: `#`,
  // },
  // {
  //   id: 4,
  //   header: "Mobile Applications Development",
  //   icon: <FaGooglePlay />,
  //   description: `Mauris volutpat urna tristique finibus iaculis. Morbi facilisis,
  //               justo eu vulputate elementum, est augue tincidunt ante, sed
  //               efficitur leo ligula vel velit.`,
  //   link: `#`,
  // },
  // {
  //   id: 5,
  //   header: "Database Development",
  //   icon: <FaDatabase />,
  //   description: `Mauris volutpat urna tristique finibus iaculis. Morbi facilisis,
  //               justo eu vulputate elementum, est augue tincidunt ante, sed
  //               efficitur leo ligula vel velit.`,
  //   link: `#`,
  // },
  {
    id: 6,
    header: "Web Design and Hosting",
    icon: <FaGlobeAfrica />,
    description: `We provide hosting services to systems, mobile applications and websites that have been built by our company. hosting services are free to our customers.`,
    link: `/Hosting`,
  },
  {
    id: 7,
    header: "Computer Networking",
    icon: <FaNetworkWired />,
    description: `We create networks that connect computers to share resources such as printers and scanners, we make your office fully autonomous.`,
    link: `/Networking`,
  },
  // {
  //   id: 8,
  //   header: "Software Installations",
  //   icon: <FaMicrosoft />,
  //   description: `Mauris volutpat urna tristique finibus iaculis. Morbi facilisis,
  //               justo eu vulputate elementum, est augue tincidunt ante, sed
  //               efficitur leo ligula vel velit.`,
  //   link: `#`,
  // },
];

const what = () => {
  return (
    <div id="services" className={styles.container}>
      <div className={styles.subContainer}>
        <h2>What We Do</h2>
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
