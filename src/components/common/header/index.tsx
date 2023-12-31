import Button from "../../base/button";
import Typography from "../../base/typography";
import styles from "./index.module.scss";

interface IHeader {
  handleCLick: () => void;
}

const Header = (props: IHeader) => {
  const { handleCLick } = props;
  return (
    <div className={styles.container}>
      <div className={styles.primary}>
        <section className={styles.logo}>
          <Typography className={styles.typoGraphyPrimary}>
            Fake Data Generator
          </Typography>
        </section>
      </div>
      <div className={styles.secondary}>
        <section className={styles.info}>
          <Button variant="outlined" onClick={handleCLick}>
            Generate
          </Button>
        </section>
      </div>
    </div>
  );
};

export default Header;
