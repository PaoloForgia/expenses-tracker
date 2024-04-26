import { monthName } from "@/utils/date";
import { useTranslations } from "next-intl";

const HomePage = () => {
  const t = useTranslations();

  return (
    <>
      {monthName(2)}
      <div>{t("title")}</div>
    </>
  );
};

export default HomePage;
