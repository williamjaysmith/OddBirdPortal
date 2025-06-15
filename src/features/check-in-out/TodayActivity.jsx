import Heading from "../../ui/Heading";
import Row from "../../ui/Row";
import { useTodayActivity } from "./useTodayActivity";
import Spinner from "../../ui/Spinner";
import TodayItem from "./TodayItem";

function TodayActivity() {
  const { activities, isLoading } = useTodayActivity();

  return (
    <div className="bg-grey-0 border border-grey-100 rounded-lg p-8 pt-6 flex flex-col gap-6 col-span-2">
      <Row type="horizontal">
        <Heading as="h2">Today</Heading>
      </Row>

      {!isLoading ? (
        activities?.length > 0 ? (
          <ul className="overflow-y-auto overflow-x-hidden scrollbar-none">
            {activities.map((activity) => (
              <TodayItem activity={activity} key={activity.id} />
            ))}
          </ul>
        ) : (
          <p className="text-center text-lg font-medium mt-2">
            No activity today...
          </p>
        )
      ) : (
        <Spinner />
      )}
    </div>
  );
}

export default TodayActivity;