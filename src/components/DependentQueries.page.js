import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

const fetchUserbyEmail = (email) => {
  return axios.get(`http://localhost:4000/users/${email}`);
};

const fetchCoursesByChannelId = (channelId) => {
  return axios.get(`http://localhost:4000/channels/${channelId}`);
};

export const DependentQueriesPage = ({ email }) => {
  const { data: user } = useQuery(["user", email], () => fetchUserbyEmail(email));
  const channelId = user?.data.channelId;

  useQuery(["courses", channelId], () => fetchCoursesByChannelId(channelId), {
    enabled: !!channelId,
  });
  return <div>DependentQueriesPage</div>;
};
