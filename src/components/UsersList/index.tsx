import React, { useState } from "react";
import moment from "moment";

import { MemberType } from "../../types";

import Modal from "../Modal";

import { UsersContainer, UserContainer, UserName } from "./styledComponents";

interface Props {
  usersData: MemberType[];
}
const UsersList = (props: Props) => {
  const [activeUser, setActiveUser] = useState<any>({});
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState(
    moment().format("YYYY-MM-DD")
  );
  const { usersData } = props;

  const onClose = (): void => {
    setShowModal(false);
  };

  const onUserClick = (activeUserDetails: MemberType): void => {
    setShowModal(true);
    setActiveUser(activeUserDetails);
  };

  const renderUsers = usersData.map((eachUser: MemberType) => {
    const { id, real_name: realName } = eachUser;
    return (
      <UserContainer
        key={id}
        onClick={() => {
          onUserClick(eachUser);
        }}
      >
        <UserName>{realName}</UserName>
      </UserContainer>
    );
  });

  const onDateTimeChange = (event: any) => {
    setSelectedDate(moment(event.target.value).format("YYYY-MM-DD"));
  };

  const getActivityPeriods = () => {
    const userActivityPeriodsBasedOnDate = activeUser.activity_periods.filter(
      (eachPeriod: any) =>
        moment(eachPeriod.start_time, "MMM D YYYY").format("YYYY-MM-DD") ===
        selectedDate
    );
    if (userActivityPeriodsBasedOnDate.length > 0) {
      return userActivityPeriodsBasedOnDate.map(
        (eachPeriod: any, index: number) => {
          return (
            <li key={index}>
              {moment(eachPeriod.start_time, "MMM D YYYY hh:mmA").format(
                "hh:mm A"
              )}
              -
              {moment(eachPeriod.end_time, "MMM D YYYY hh:mmA").format(
                "hh:mm A"
              )}
            </li>
          );
        }
      );
    }
    return `No Activity Periods found. Please choose another Date.`;
  };

  return (
    <>
      <Modal onClose={onClose} show={showModal}>
        <h3>Active Periods of {activeUser.real_name} </h3>
        <div>
          <label htmlFor="select-date">Select Date : </label>
          <input
            id="select-date"
            type="date"
            value={selectedDate}
            onChange={onDateTimeChange}
          />
          <ol>
            {activeUser.activity_periods
              ? getActivityPeriods()
              : `No Activity Periods found.`}
          </ol>
        </div>
      </Modal>

      <UsersContainer>
        <h1 style={{ textAlign: "center" }}>{`Users List`}</h1>
        {renderUsers}
      </UsersContainer>
    </>
  );
};

export default UsersList;
