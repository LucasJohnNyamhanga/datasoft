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
        <div className={styles.header}>
          <h2 style={{ marginBottom: 0, paddingBottom: 0 }}>
            Software Development Process
          </h2>
        </div>
        <div>
          <p>
            The software development process consists of four major steps. Each
            of these steps is detailed below.
          </p>{" "}
          <div className={styles.list}>
            <ol>
              <li>Planning </li>
              <li>Implementing</li>
              <li>Testing</li>
              <li>Deployment and Maintenance</li>
            </ol>
          </div>
          <h3>Step #1: Planning</h3>
          <p>
            An important task in creating a software program is Requirements
            Analysis. Customers typically have an abstract idea of what they
            want as an end result, but not what software should do. Skilled and
            experienced software engineers recognize incomplete, ambiguous, or
            even contradictory requirements at this point.
          </p>
          <p>
            Frequently demonstrating live code may help reduce the risk that the
            requirements are incorrect. Once the general requirements are
            gathered from the client, an analysis of the scope of the
            development should be determined and clearly stated. This is often
            called a Statement of Objectives (SOO).
          </p>
          <h3>Step #2: Implementation</h3>
          <p>
            Implementation is the part of the process where software engineers
            actually program the code for the project.
          </p>
          <h3>Step #3: Testing Software</h3>
          <p>
            Testing is an integral and important phase of the software
            development process. This part of the process ensures that defects
            are recognized as soon as possible. It can also provide an
            objective, independent view of the software to allow users to
            appreciate and understand the risks of software deployment.
          </p>
          <p>
            Software testing can be stated as the process of validating and
            verifying that a software program or application or product meets
            the requirements that guided its design and development, works as
            expected and can be implemented with the same characteristics.
          </p>
          <h3>Step #4: Deployment and Maintenance</h3>
          <p>
            Deployment starts after the code is appropriately tested, approved
            for release, and distributed into a production environment. This may
            involve installation, customization, testing, and possibly an
            extended period of evaluation.
          </p>
          <p>
            Software training and support are important, as the software is only
            effective if used correctly. Maintaining and enhancing software to
            cope with newly discovered faults or requirements can take
            substantial time and effort, as missed requirements may force
            software redesign.
          </p>
          <p>
            At DataSoft Technologies, we will smooth the process and make things
            as easy as possible for you, so the outcome results will be as
            desired and with complete transparency.
          </p>
        </div>
      </div>
    </div>
  );
};

export default whatWeHaveDone;
