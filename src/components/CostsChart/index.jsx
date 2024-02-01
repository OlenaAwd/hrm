import LearnMoreComponent from "../LearnMore";
import styles from "./CostsChart.module.scss";
import chart from "../../assets/chart.webp";

const CostsChart = ({ title }) => {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      <div className={styles.commonContainer}>
        <div className={styles.chartContainer}>
          <img src={chart} alt="chart" />
        </div>
        <p className={styles.chartText}>
          Become a House Relocation Marketplace member for just{" "}
          <span className={styles.textLineThrough}>$1900</span> $900 plus GST. Learn the end to end process for successful home relocation and meet the mortgage brokers who specialise in financing for house relocation.
        </p>
        <LearnMoreComponent children={<span>Learn More</span>} />
      </div>
    </section>
  );
};

export default CostsChart;
