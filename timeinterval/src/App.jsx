
import { useState } from "react";

function MyForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    age: "",
    city: "",
    bio: "",
    role: "developer",
  });

  // Get users from localStorage
  const [users, setUsers] = useState(() => {
    const savedUsers = localStorage.getItem("users");

    return savedUsers ? JSON.parse(savedUsers) : [];
  });

  // Store editing user's index
  const [editIndex, setEditIndex] = useState(null);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Submit / Update
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check duplicate email
    const emailExists = users.some(
      (user, index) =>
        user.email.toLowerCase().trim() ===
          formData.email.toLowerCase().trim() &&
        index !== editIndex
    );

    if (emailExists) {
      alert("Email already exists!");
      return;
    }

    // UPDATE
    if (editIndex !== null) {
      const updatedUsers = users.map((user, index) => {
        if (index === editIndex) {
          return formData;
        }

        return user;
      });

      setUsers(updatedUsers);

      localStorage.setItem(
        "users",
        JSON.stringify(updatedUsers)
      );

      alert("User updated successfully!");

      setEditIndex(null);
    }

    // CREATE
    else {
      const updatedUsers = [...users, formData];

      setUsers(updatedUsers);

      localStorage.setItem(
        "users",
        JSON.stringify(updatedUsers)
      );

      alert(`Welcome ${formData.username}`);
    }

    // Clear form
    setFormData({
      username: "",
      email: "",
      age: "",
      city: "",
      bio: "",
      role: "developer",
    });
  };

  // Edit user
  const handleEdit = (index) => {
    setFormData(users[index]);
    setEditIndex(index);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Delete user
  const handleDelete = (index) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );

    if (!confirmDelete) {
      return;
    }

    const updatedUsers = users.filter(
      (_, userIndex) => userIndex !== index
    );

    setUsers(updatedUsers);

    localStorage.setItem(
      "users",
      JSON.stringify(updatedUsers)
    );

    // If deleting the user currently being edited
    if (editIndex === index) {
      handleCancelEdit();
    }
  };

  // Cancel edit
  const handleCancelEdit = () => {
    setEditIndex(null);

    setFormData({
      username: "",
      email: "",
      age: "",
      city: "",
      bio: "",
      role: "developer",
    });
  };

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-10">

      <div className="mx-auto max-w-6xl">

        {/* HEADER */}

        <div className="mb-8 text-center">

          <h1 className="text-4xl font-bold text-slate-800">
            User Management
          </h1>

          <p className="mt-2 text-slate-500">
            Create, edit and manage your users
          </p>

        </div>


        {/* FORM CARD */}

        <div className="mb-10 rounded-2xl bg-white p-6 shadow-lg md:p-8">

          <div className="mb-6 flex items-center justify-between">

            <div>

              <h2 className="text-2xl font-bold text-slate-800">

                {editIndex !== null
                  ? "Edit User"
                  : "Add New User"}

              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Fill in the user information below
              </p>

            </div>

            {editIndex !== null && (
              <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700">
                Editing User
              </span>
            )}

          </div>


          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-5 md:grid-cols-2"
          >

            {/* USERNAME */}

            <div>

              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Username
              </label>

              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Enter username"
                required
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              />

            </div>


            {/* EMAIL */}

            <div>

              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Email
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email"
                required
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              />

            </div>


            {/* AGE */}

            <div>

              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Age
              </label>

              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                placeholder="Enter age"
                required
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              />

            </div>


            {/* CITY */}

            <div>

              <label className="mb-2 block text-sm font-semibold text-slate-700">
                City
              </label>

              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Enter city"
                required
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              />

            </div>


            {/* ROLE */}

            <div>

              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Role
              </label>

              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              >

                <option value="developer">
                  Developer
                </option>

                <option value="designer">
                  Designer
                </option>

                <option value="manager">
                  Manager
                </option>

              </select>

            </div>


            {/* BIO */}

            <div className="md:col-span-2">

              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Bio
              </label>

              <textarea
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                placeholder="Write something about the user..."
                rows="4"
                required
                className="w-full resize-none rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              />

            </div>


            {/* BUTTONS */}

            <div className="flex flex-wrap gap-3 md:col-span-2">

              <button
                type="submit"
                className="rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white shadow-md transition hover:bg-indigo-700 hover:shadow-lg"
              >

                {editIndex !== null
                  ? "Update User"
                  : "Add User"}

              </button>


              {editIndex !== null && (

                <button
                  type="button"
                  onClick={handleCancelEdit}
                  className="rounded-xl bg-slate-200 px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-300"
                >
                  Cancel
                </button>

              )}

            </div>

          </form>

        </div>


        {/* USERS TABLE */}

        <div className="overflow-hidden rounded-2xl bg-white shadow-lg">

          {/* TABLE HEADER */}

          <div className="flex flex-col gap-2 border-b border-slate-200 p-6 sm:flex-row sm:items-center sm:justify-between">

            <div>

              <h2 className="text-2xl font-bold text-slate-800">
                Users
              </h2>

              <p className="text-sm text-slate-500">
                Total users: {users.length}
              </p>

            </div>

          </div>


          {users.length === 0 ? (

            <div className="px-6 py-16 text-center">

              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 text-2xl">
                👤
              </div>

              <h3 className="text-lg font-semibold text-slate-700">
                No users yet
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Add your first user using the form above.
              </p>

            </div>

          ) : (

            <div className="overflow-x-auto">

              <table className="w-full min-w-[900px]">

                <thead className="bg-slate-50">

                  <tr>

                    <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-500">
                      #
                    </th>

                    <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-500">
                      User
                    </th>

                    <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-500">
                      Email
                    </th>

                    <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-500">
                      Age
                    </th>

                    <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-500">
                      City
                    </th>

                    <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-500">
                      Role
                    </th>

                    <th className="px-6 py-4 text-center text-xs font-bold uppercase tracking-wider text-slate-500">
                      Actions
                    </th>

                  </tr>

                </thead>


                <tbody className="divide-y divide-slate-200">

                  {users.map((user, index) => (

                    <tr
                      key={index}
                      className="transition hover:bg-slate-50"
                    >

                      {/* NUMBER */}

                      <td className="px-6 py-4 text-sm font-medium text-slate-500">
                        {index + 1}
                      </td>


                      {/* USER */}

                      <td className="px-6 py-4">

                        <div className="flex items-center gap-3">

                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 font-bold text-indigo-600">
                            {user.username
                              .charAt(0)
                              .toUpperCase()}
                          </div>

                          <div>

                            <p className="font-semibold text-slate-800">
                              {user.username}
                            </p>

                            <p className="text-xs text-slate-400">
                              User #{index + 1}
                            </p>

                          </div>

                        </div>

                      </td>


                      {/* EMAIL */}

                      <td className="px-6 py-4 text-sm text-slate-600">
                        {user.email}
                      </td>


                      {/* AGE */}

                      <td className="px-6 py-4 text-sm text-slate-600">
                        {user.age}
                      </td>


                      {/* CITY */}

                      <td className="px-6 py-4 text-sm text-slate-600">
                        {user.city}
                      </td>


                      {/* ROLE */}

                      <td className="px-6 py-4">

                        <span
                          className={`rounded-full px-3 py-1 text-xs font-semibold ${
                            user.role === "developer"
                              ? "bg-blue-100 text-blue-700"
                              : user.role === "designer"
                              ? "bg-purple-100 text-purple-700"
                              : "bg-green-100 text-green-700"
                          }`}
                        >
                          {user.role}
                        </span>

                      </td>


                      {/* ACTIONS */}

                      <td className="px-6 py-4">

                        <div className="flex justify-center gap-2">

                          {/* EDIT */}

                          <button
                            onClick={() =>
                              handleEdit(index)
                            }
                            className="rounded-lg bg-amber-100 px-3 py-2 text-sm font-semibold text-amber-700 transition hover:bg-amber-200"
                          >
                            Edit
                          </button>


                          {/* DELETE */}

                          <button
                            onClick={() =>
                              handleDelete(index)
                            }
                            className="rounded-lg bg-red-100 px-3 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-200"
                          >
                            Delete
                          </button>

                        </div>

                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

          )}

        </div>

      </div>

    </div>
  );
}

export default MyForm;

