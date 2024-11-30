import { useSelector } from "react-redux";



const UserList = () => {
  const { userData, isLoading } = useSelector((state) => state.user);
  
  return (
    <>
     <div >
     
      <div>
        {userData?.map((user) => {
            console.log(user,"user in map")
          return (
           <>
            <div className=" w-[700px] border p-2 rounded overflow-auto">
            
              <div className="text-[24px] m-2  border border-black p-2 ">
              <button className="rounded-[100%] bg-red-400 w-[50px] mr-1">X</button>
                {user.name}
                <button>expand</button>
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
