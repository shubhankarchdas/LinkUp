// src/pages/FriendsPage.jsx

import { useQuery } from "@tanstack/react-query";
import { getOutgoingFriendReqs, getUserFriends } from "../lib/api";
import FriendCard from "../components/FriendCard";
import NoFriendsFound from "../components/NoFriendsFound";
import { UsersIcon } from "lucide-react";

const FriendsPage = () => {
  const { data: friends = [], isLoading: loadingFriends } = useQuery({
    queryKey: ["friends"],
    queryFn: getUserFriends,
  });

  const { data: outgoingRequests = [], isLoading: loadingOutgoing } = useQuery({
    queryKey: ["outgoingFriendReqs"],
    queryFn: getOutgoingFriendReqs,
  });

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="container mx-auto space-y-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight flex items-center gap-2">
            <UsersIcon className="w-6 h-6 text-primary" />
            Your Friends
          </h2>
        </div>

        {/* FRIENDS LIST */}
        {loadingFriends ? (
          <div className="flex justify-center py-12">
            <span className="loading loading-spinner loading-lg" />
          </div>
        ) : friends.length === 0 ? (
          <NoFriendsFound />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {friends.map((friend) => (
              <FriendCard key={friend._id} friend={friend} />
            ))}
          </div>
        )}

        {/* OUTGOING FRIEND REQUESTS */}
        <section>
          <h3 className="text-xl font-semibold mt-10 mb-4">Pending Friend Requests</h3>

          {loadingOutgoing ? (
            <div className="flex justify-center py-8">
              <span className="loading loading-spinner loading-md" />
            </div>
          ) : outgoingRequests.length === 0 ? (
            <p className="text-sm opacity-70">No pending friend requests sent.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {outgoingRequests.map((req) => (
                <FriendCard key={req._id} friend={req.recipient} isPending />
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default FriendsPage;
