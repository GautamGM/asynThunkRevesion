import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./slices/userslice";
import { useEffect } from "react";
import { faker } from "@faker-js/faker";
import UserList from "./component/userList";
function App() {
  const { isLoading, userData } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <>
      <div className=" w-full flex justify-center items-center h-screen">
        <div className="h-[300px] overflow-auto">
          <UserList />
        </div>
      </div>
    </>
  );
}
export default App;
