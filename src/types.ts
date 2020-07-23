export interface MemberType {
  id: string;
  real_name: string;
  tz: string;
  activity_periods: Array<ActivityPeriod>;
}

export interface ActivityPeriod {
  start_time: string;
  end_time: string;
}

export interface UsersDataType {
  ok: boolean;
  members: Array<MemberType>;
}
