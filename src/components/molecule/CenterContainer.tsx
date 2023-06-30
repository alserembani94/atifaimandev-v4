import { cx } from "../../utils/styles";

type CenterContainerProps = {
  children: React.ReactNode;
  sectionClassName?: React.HTMLAttributes<HTMLElement>["className"];
  divClassName?: React.HTMLAttributes<HTMLElement>["className"];
};

const CenterContainer = ({
  children,
  sectionClassName,
  divClassName,
}: CenterContainerProps) => (
  <section className={cx([sectionClassName, "flex justify-center"])}>
    <div className={cx([divClassName, "w-full max-w-screen-lg"])}>
      {children}
    </div>
  </section>
);

export default CenterContainer;
