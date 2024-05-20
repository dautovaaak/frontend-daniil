interface Friend {
  id: string;
  name: string;
  // Other properties
}

export const setFriends = (friendsData: Friend[]) => {
  return {
    type: setFriends,
    payload: friendsData,
  };
};
