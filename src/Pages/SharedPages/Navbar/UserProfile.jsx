import { Link } from "react-router-dom";

const UserProfile = () => {
    const user = 'sagor';

    const handleLogOut = () => {
        
    };

  return (
    <div className="flex gap-4 items-center justify-center">
      {user ? (
        <div className="flex gap-4 items-center">
          <Link className="text-4xl">
            {user.photoURL ? (
              <div className="tooltip" data-tip={user.displayName}>
                <img
                  className="w-10 mask mask-circle tooltip"
                  src={user.photoURL}
                  alt=""
                />
              </div>
            ) : (
              <img
                className="w-10 mask mask-circle"
                src="https://i.ibb.co/9HpR0yB/Nice-Png-user-icon-png-1280406.png"
              />
            )}
          </Link>
          <button
            onClick={handleLogOut}
            className="my-btn btn-color hover:text-gray-800"
          >
            LogOut
          </button>
        </div>
      ) : (
        <div>
          <Link to="/login">
            <button className="my-btn btn-color hover:text-gray-800 mr-4">
              Login
            </button>
          </Link>
          <Link to="/signUp">
            <button className="my-btn btn-color hover:text-gray-800">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
