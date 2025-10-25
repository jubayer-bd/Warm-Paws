import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";
import PageLoader from "../components/PageLoader";

const Profile = () => {
  const { user, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(user?.displayName || user?.name || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [pageLoading, setPageLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setPageLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!user) {
      navigate("/login", { state: { from: location }, replace: true });
    }
  }, [user, navigate, location]);

  if (!user) return null;

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await updateUser({
        displayName: name,
        photoURL: photoURL || "/user.png",
      });
      Swal.fire({
        icon: "success",
        title: "Profile Updated",
        text: "Your profile has been updated successfully!",
      });
      setEditing(false);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Update Failed",
        text: error.message,
      });
    }
  };
  if (pageLoading) return <PageLoader />;
  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded-xl shadow-lg text-center">
      <h2 className="text-2xl font-bold mb-4">My Profile</h2>

      <img
        src={user.photoURL || "/default-profile.png"}
        alt="Profile"
        className="w-32 h-32 mx-auto rounded-full mb-4 object-cover border-2 border-primary"
      />

      {editing ? (
        <form onSubmit={handleUpdate} className="flex flex-col gap-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="input input-bordered w-full"
            required
          />
          <input
            type="text"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
            placeholder="Enter image URL"
            className="input input-bordered w-full"
          />
          <div className="flex justify-center gap-3">
            <button
              type="submit"
              className="btn bg-primary text-white hover:bg-primary/90 transition-all duration-300"
            >
              Save
            </button>
            <button
              type="button"
              onClick={() => setEditing(false)}
              className="btn btn-outline hover:bg-gray-200 transition-all duration-300"
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <>
          <p className="text-lg font-medium">
            Name: {user.displayName || user.name}
          </p>
          <p className="text-md text-gray-600 mb-4">Email: {user.email}</p>
          <button
            onClick={() => setEditing(true)}
            className="mt-4 px-6 py-2 rounded-full bg-primary text-white hover:bg-primary/90 transition-all duration-300"
          >
            Update Profile
          </button>
        </>
      )}
    </div>
  );
};

export default Profile;
