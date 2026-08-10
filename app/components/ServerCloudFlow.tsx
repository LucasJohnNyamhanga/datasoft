import styles from "../styles/serverCloudFlow.module.scss";

// The Hosting service page's signature visual — reuses the site's one
// recurring "device" chrome (dark sapphire glass window, traffic-light
// title bar, status bar) established by CodeEditor/CapabilityShowcase,
// but instead of an IDE it renders a live infrastructure diagram: your
// server on the left, DataSoft's cloud on the right, and two dashed
// traffic lanes between them — brass for outgoing data, cobalt for
// incoming — each carrying a stream of small animated packets. The dash
// "flow" texture is CSS (matching NetworkPattern's technique); the
// discrete packet dots ride the same curves via SMIL <animateMotion> so
// they visibly travel the exact path rather than just implying motion.

export type ServerCloudFlowLabels = {
  windowTitle: string;
  serverLabel: string;
  serverSub: string;
  cloudLabel: string;
  cloudSub: string;
  outLabel: string;
  inLabel: string;
  statusOnline: string;
  statusSecure: string;
  statusBackup: string;
};

type ServerCloudFlowProps = {
  labels: ServerCloudFlowLabels;
  className?: string;
};

const PACKET_BEGINS_OUT = [0, 0.9, 1.8];
const PACKET_BEGINS_IN = [0.5, 1.4, 2.3];

const ServerCloudFlow = ({ labels, className = "" }: ServerCloudFlowProps) => {
  return (
    <div className={`${styles.window} ${className}`} aria-hidden="true">
      <div className={styles.titleBar}>
        <div className={styles.trafficLights}>
          <span className={styles.dotRed} />
          <span className={styles.dotYellow} />
          <span className={styles.dotGreen} />
        </div>
        <div className={styles.titleText}>{labels.windowTitle}</div>
        <div className={styles.titleSpacer} />
      </div>

      <div className={styles.body}>
        <div className={styles.canvas}>
          <div className={styles.dotGrid} />

          <svg
            className={styles.wires}
            viewBox="0 0 100 60"
            preserveAspectRatio="none"
          >
            <path id="scf-path-out" className={styles.pathOut} d="M24,21 C46,7 54,7 76,21" />
            <path id="scf-path-in" className={styles.pathIn} d="M76,33 C54,49 46,49 24,33" />

            {PACKET_BEGINS_OUT.map((begin) => (
              <circle key={`out-${begin}`} r="1.5" className={styles.packetOut}>
                <animateMotion dur="2.6s" begin={`${begin}s`} repeatCount="indefinite">
                  <mpath href="#scf-path-out" />
                </animateMotion>
              </circle>
            ))}
            {PACKET_BEGINS_IN.map((begin) => (
              <circle key={`in-${begin}`} r="1.5" className={styles.packetIn}>
                <animateMotion dur="2.6s" begin={`${begin}s`} repeatCount="indefinite">
                  <mpath href="#scf-path-in" />
                </animateMotion>
              </circle>
            ))}
          </svg>

          <span className={`${styles.flowTag} ${styles.flowTagOut}`}>{labels.outLabel}</span>
          <span className={`${styles.flowTag} ${styles.flowTagIn}`}>{labels.inLabel}</span>

          <div className={`${styles.node} ${styles.serverNode}`}>
            <div className={styles.serverRack}>
              <span className={styles.rackUnit}>
                <i className={styles.ledGreen} />
                <i className={styles.ledDim} />
              </span>
              <span className={styles.rackUnit}>
                <i className={styles.ledGold} />
                <i className={styles.ledDim} />
              </span>
              <span className={styles.rackUnit}>
                <i className={styles.ledGreen} />
                <i className={styles.ledDim} />
              </span>
            </div>
            <p className={styles.nodeLabel}>{labels.serverLabel}</p>
            <p className={styles.nodeSub}>{labels.serverSub}</p>
          </div>

          <div className={`${styles.node} ${styles.cloudNode}`}>
            <div className={styles.cloudShape}>
              <span className={styles.cloudPuffLeft} />
              <span className={styles.cloudPuffRight} />
              <span className={styles.cloudBase} />
            </div>
            <p className={styles.nodeLabel}>{labels.cloudLabel}</p>
            <p className={styles.nodeSub}>{labels.cloudSub}</p>
          </div>
        </div>
      </div>

      <div className={styles.statusBar}>
        <div className={styles.statusLeft}>
          <span className={styles.statusItem}>
            <span className={styles.liveDot} />
            {labels.statusOnline}
          </span>
        </div>
        <div className={styles.statusRight}>
          <span className={styles.statusItem}>{labels.statusSecure}</span>
          <span className={styles.statusItem}>{labels.statusBackup}</span>
        </div>
      </div>
    </div>
  );
};

export default ServerCloudFlow;
