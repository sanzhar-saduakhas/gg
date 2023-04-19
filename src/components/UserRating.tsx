import { useEffect, useState } from "react";
import { UserI } from "../types";
import { Loading } from "./Loading";
import { Header } from "./Header";
import axios from "axios";

export const UserRating = () => {
  const [users, setUsers] = useState<UserI[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios.get("https://643ead4b6c30feced8300213.mockapi.io/user_rating")
      .then((res) => {
        setUsers(res.data);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <Header />
      <div className="mt-20 flex justify-center items-center">
        {isLoading ? (
          <Loading />
        ) : (
          <table className="w-1/3 text-sm text-left text-white">
            <thead className="text-xs text-white uppercase bg-blue-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Finished At
                </th>
              </tr>
            </thead>
            <tbody className="">
              {users.map((user, idx) => (
                <tr key={idx} className="bg-blue-300 border-b">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-white whitespace-nowrap"
                  >
                    {user.id}
                  </th>
                  <td className="px-6 py-4">{user.finishedAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};
