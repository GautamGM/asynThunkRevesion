import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { createUser } from "../slices/userslice";

const UserList = () => {
  const { userData, isLoading } = useSelector((state) => state.user);
  const dispatch=useDispatch()
  const handelAddUser=()=>{
    dispatch(createUser())
  }
  return (
    <>
     <div >
     <button onClick={handelAddUser} className="w-[100px] bg-blue-600 text-white p-2 rounded m-2 ">
                Add user +
              </button>
      <div>
        {userData?.map((user) => {
            console.log(user,"user in map")
          return (
           <>
            <div className=" w-[700px] border p-2 rounded overflow-auto">
             
              <div className="text-[24px] m-2  border border-black p-2">
                {user.name}
              </div>
            </div>
           </>
          );
        })}
      </div>
     </div>
    </>
  );
};
export default UserList;
