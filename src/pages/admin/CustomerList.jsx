import { useEffect } from "react";
import AddCusmoterForm from "../../components/admin/AddCusmoterForm";
import { useAuth } from "../../hooks/useAuth";
import { useState } from "react";

const CustomerList = () => {
  const { registerUser } = useAuth();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(registerUser);
  }, [registerUser]);
  return (
    <div className="w-full flex flex-col-reverse md:flex-row justify-between items-start gap-10">
      <div className="w-full md:w-1/2">
        <h2 className="mb-6 font-medium text-lg">Customer Lists</h2>
        <table className="w-full mt-5 text-sm text-left text-gray-600 border border-borderColor rounded-lg">
          <thead className="text-xs text-gray-700 uppercase bg-white bg-opacity-50 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Mobile
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => {
              return (
                <tr key={i} className="bg-white bg-opacity-50 border-b">
                  <td className="px-6 py-4">
                    {user.fName} {user.lName}
                  </td>
                  <td className="px-6 py-4">{user.number}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="w-full md:w-1/2 ">
        <h2 className="mb-6 font-medium text-lg">Add new customer</h2>

        <AddCusmoterForm />
      </div>
    </div>
  );
};

export default CustomerList;
