import styles from "../styles/whatWeHaveDone.module.scss";
import CardProject from "./CardProject";

const whatWeHaveDone = () => {
  const datapoint = [
    {
      image: "/assets/data1.webp",
      link: "#",
      projectName: "Real Estate App",
      projectDesc:
        "Mobile application for real estate marketing, view properities that are availbale all over the country at lower price.",
      pages: 7,
      type: "Dynamic",
      database: "MySql",
      cost: "3 weeks",
      active: true,
    },
    {
      image: "/assets/data2.webp",
      link: "#",
      projectName: "Food Derivery",
      projectDesc:
        "Food derivery app for online food ordering, it offers users mobility and capability to order anywhere at any time",
      pages: 5,
      type: "Dynamic",
      database: "MySql",
      cost: "3 weeks",
      active: false,
    },
    {
      image: "/assets/data3.webp",
      link: "#",
      projectName: "XChain AI",
      projectDesc:
        "Website for AI that can adapt to learning while creating unique profile for users interacting.",
      pages: 13,
      type: "Dynamic",
      database: "MySQL",
      cost: "1 month",
      active: true,
    },
    {
      image: "/assets/data4.webp",
      link: "#",
      projectName: "Find My Place",
      projectDesc:
        "An application to save favorite places that you visit and are worth remembering.",
      pages: 5,
      type: "Dynamic",
      database: "MySql",
      cost: "7 days",
      active: false,
    },
    {
      image: "/assets/data5.webp",
      link: "#",
      projectName: "Photo Editor",
      projectDesc: "An application to quickly edit and manipilate photo.",
      pages: 3,
      type: "Static",
      database: "No",
      cost: "4 days",
      active: false,
    },
  ];
  return (
    <div className={styles.container} id="projects">
      <div className={styles.subContainer}>
        <h2>Recent Projects</h2>
        <div className={styles.innerContainer}>
          {datapoint.map((data, index) => (
            <CardProject
              key={index}
              image={data.image}
              link={data.link}
              projectName={data.projectName}
              projectDesc={data.projectDesc}
              pages={data.pages}
              type={data.type}
              database={data.database}
              cost={data.cost}
              active={data.active}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default whatWeHaveDone;
