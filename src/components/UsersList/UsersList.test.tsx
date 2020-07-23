import React from "react";
import { render, fireEvent } from "@testing-library/react";

import UsersList from ".";

const data = {
  members: [
    {
      id: "W012A3CDE",
      real_name: "Egon Spengler",
      tz: "America/Los_Angeles",
      activity_periods: [
        {
          start_time: "Feb 1 2020  1:33PM",
          end_time: "Feb 1 2020 1:54PM",
        },
        {
          start_time: "Jul 1 2020  11:11AM",
          end_time: "Jul 1 2020 2:00PM",
        },
        {
          start_time: "Jul 16 2020  5:33PM",
          end_time: "Jul 16 2020 8:02PM",
        },
      ],
    },
    {
      id: "W07QCRPA4",
      real_name: "Glinda Southgood",
      tz: "Asia/Kolkata",
      activity_periods: [
        {
          start_time: "Feb 1 2020  1:33PM",
          end_time: "Feb 1 2020 1:54PM",
        },
        {
          start_time: "Jul 1 2020  11:11AM",
          end_time: "Jul 1 2020 2:00PM",
        },
        {
          start_time: "Jul 16 2020  5:33PM",
          end_time: "Jul 16 2020 8:02PM",
        },
      ],
    },
    {
      id: "W012A3zAWCDEOUY",
      real_name: "Mattie Hardy",
      tz: "America/Los_Angeles",
      activity_periods: [
        {
          start_time: "Feb 1 2020  1:33PM",
          end_time: "Feb 1 2020 1:54PM",
        },
        {
          start_time: "Jul 1 2020  11:11AM",
          end_time: "Jul 1 2020 2:00PM",
        },
        {
          start_time: "Jul 16 2020  5:33PM",
          end_time: "Jul 16 2020 8:02PM",
        },
      ],
    },
  ],
};

describe("renders learn react link", () => {
  it("should test user name", () => {
    const { getByText } = render(<UsersList usersData={data.members} />);
    getByText("Egon Spengler");
    getByText("Glinda Southgood");
  });

  it("should test if content in modal opens when user name is clicked", () => {
    const { getByText } = render(<UsersList usersData={data.members} />);
    const user = getByText("Egon Spengler");
    fireEvent.click(user);
    getByText(`Active Periods of Egon Spengler`);
  });
});
