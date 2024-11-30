import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./slices/userslice";
import { useEffect } from "react";
import UserList from "./component/userList";
import { createUser } from "./slices/userslice";
function App() {
  const { isLoading, userData } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const handelAddUser = () => {
    dispatch(createUser());
  };
  return (
    <>
      <div className="flex justify-center items-center flex-col h-screen border border-black" >
        <button
          onClick={handelAddUser}
          className="w-[100px] bg-blue-600 text-white p-2 rounded m-2 "
        >
          Add user +
        </button>
        <div className=" w-full flex justify-center items-center">
          <div className="h-[300px] overflow-auto">
            <UserList />
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
