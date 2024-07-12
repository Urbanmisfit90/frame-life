import React from 'react';
import Loader from '@/components/shared/Loader';
import { useGetUsers } from '@/lib/react-query/queriesAndMutations';
import { Models } from 'appwrite';

const AllUsers = () => {
  const { data: users, isLoading, error } = useGetUsers();

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error loading users</div>;
  }

  return (
    <div className="flex flex-1">
      <div className="user-list-container">
        <h1 className="h3-bold md:h2-bold text-left w-full">All Users</h1>
        {users && users.documents.length > 0 ? (
          <ul className="flex flex-col flex-1 gap-9 w-full">
            {users.documents.map((user: Models.Document) => (
              <div key={user.$id} className="user-card">
                <h2>{user.name}</h2>
                <p>Email: {user.email}</p>
                {/* Add more details as per your user schema */}
              </div>
            ))}
          </ul>
        ) : (
          <div>No users found.</div>
        )}
      </div>
    </div>
  );
};

export default AllUsers;