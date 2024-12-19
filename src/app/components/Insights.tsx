import TitleBody from "@/components/TitleBody";
import { BaseCard } from "@/components/Card";
import Icon from "@/components/Icon";
import Typography from "@/components/Typography";
import Image from "@/components/Image";
import ConsulationsContainer from "@/app/components/Consulations";
import PastPeriodContainer from "@/app/components/PastPeriod";

interface InsightsProps {
  filter: string;
}

const Insights: React.FC<InsightsProps> = ({ filter }) => {
  return (
    <TitleBody title="Insights" className="mt-2 md:mt-4">
      <section className="flex flex-col lg:flex-row gap-2 md:gap-4 mt-2 md:mt-4">
        <section className="flex-[4] flex flex-col sm:flex-row gap-2 md:gap-4">
          <article className="flex-[2]">
            <BaseCard
              title={
                <header className="flex flex-row gap-2 items-center">
                  <Icon type="plan-chat" size={12} />
                  <Typography variant="caption" className="text-textCaption">
                    CONSULTATIONS
                  </Typography>
                </header>
              }
            >
              <ConsulationsContainer filter={filter} />
            </BaseCard>
          </article>
          <article className="flex-1">
            <BaseCard
              title={
                <header className="flex flex-row gap-2 items-center">
                  <Icon type="chart-bar" size={12} />
                  <Typography variant="caption" className="text-textCaption">
                    VS PAST PERIOD
                  </Typography>
                </header>
              }
            >
              <PastPeriodContainer />
            </BaseCard>
          </article>
        </section>
        <BaseCard
          title={
            <header className="flex flex-row gap-2 items-center">
              <Icon type="plan-chat" size={12} color="#CCFBEF" />
              <Typography variant="caption" className="text-secondary">
                FORECASTS
              </Typography>
            </header>
          }
          titleClassName="text-white"
          className="bg-gradient-to-b from-[#15B79F] to-[#0E9382] w-full flex-1 relative flex flex-col gap-4 overflow-hidden"
        >
          <Image
            src="/pulse-svg.svg"
            alt="trending-up"
            width={400}
            height={500}
            className="absolute top-[-80px] left-[-80px] scale-[2]"
          />
          <article className="flex flex-col gap-4">
            <header className="flex gap-2 justify-between">
              <Typography variant="h1" className="text-white text-shadow-small">
                +15%
              </Typography>
              <Icon type="trending-up" size={35} color="white" />
            </header>
            <Typography variant="body" className="text-white">
              forecasted increase in your sales closed by the end of the current
              month
            </Typography>
          </article>
          <article>
            <header className="flex gap-2 justify-between">
              <Typography variant="h1" className="text-white">
                +20%
              </Typography>
              <Icon type="trending-up" size={35} color="white" />
            </header>
            <Typography variant="body" className="text-white">
              forecasted increase in your sales closed by the end of the current
              month
            </Typography>
          </article>
        </BaseCard>
      </section>
    </TitleBody>
  );
};

export default Insights;
