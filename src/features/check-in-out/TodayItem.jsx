import { Link } from "react-router-dom";

import Tag from "../../ui/Tag";
import { Flag } from "../../ui/Flag";
import Button from "../../ui/Button";
import CheckoutButton from "./CheckoutButton";

function TodayItem({ activity }) {
  const { id, status, guests, numNights } = activity;

  return (
    <li className="grid grid-cols-[9rem_2rem_1fr_7rem_9rem] gap-1.2 items-center text-small py-3 border-b border-grey-100 first:border-t first:border-grey-100">
      <div>
        {status === "unconfirmed" && <Tag type="green">Arriving</Tag>}
        {status === "checked-in" && <Tag type="blue">Departing</Tag>}
      </div>

      <div>
        <Flag src={guests.countryFlag} alt={`Flag of ${guests.country}`} />
      </div>
      
      <div className="font-medium">{guests.fullName}</div>
      
      <div>{numNights} nights</div>

      <div>
        {status === "unconfirmed" && (
          <Button
            size="small"
            variation="primary"
            as={Link}
            to={`/checkin/${id}`}
          >
            Check in
          </Button>
        )}
        {status === "checked-in" && <CheckoutButton bookingId={id} />}
      </div>
    </li>
  );
}

export default TodayItem;