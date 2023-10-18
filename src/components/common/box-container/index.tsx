import { randomColorGenerator } from "../../../helpers/utils";
import Typography from "../../base/typography";
import css from "./index.module.scss";

interface BoxContainerProps {
  title: string;
  className?: string;
  table: { title: string; type: string }[];
}

const BoxContainer = (props: BoxContainerProps) => {
  const { title, className, table } = props;
  return (
    <div className={[css.wrapper, className].join(" ")}>
      <section
        className={css.border}
        style={{ backgroundColor: randomColorGenerator() }}
      ></section>
      <section className={css.titleWrapper}>
        <Typography>{title}</Typography>
      </section>
      <section></section>
      <div className={css.contentWrapper}>
        {table.map((val, index) => {
          return (
            <div className={css.content} key={index}>
              <Typography className={css.text} variant="p">
                {val.title}
              </Typography>
              <Typography className={css.subText} variant="p">
                {val.type}
              </Typography>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BoxContainer;
