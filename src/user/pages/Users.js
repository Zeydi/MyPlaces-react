import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'wess',
      image:
        'https://png.pngtree.com/element_our/png/20181206/users-vector-icon-png_260862.jpg',
      places: 3,
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;
