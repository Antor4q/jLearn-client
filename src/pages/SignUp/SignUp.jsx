import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";


const SignUp = () => {

    const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photo = e.target.photo.files[0];
    try {
      await axios.post("https://j-learn-server.vercel.app/register", { name, email, password,photo });
      toast.success("You have successfully register")
      navigate("/signIn");
    } catch (error) {
      console.error("Registration failed:", error.response?.data?.message || error.message);
    }
  };

    return (
        <div className="h-screen flex items-center justify-center">
        <form onSubmit={handleRegister} encType="multipart/form-data" className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
          <div className="form-group mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" id="name" name="name" placeholder="Name" required className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
  
          <div className="form-group mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" name="email" placeholder="Email" required className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
  
          <div className="form-group mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" id="password" name="password" placeholder="Password" required className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
  
          <div className="form-group mb-4">
            <label htmlFor="photo" className="block text-sm font-medium text-gray-700">Profile Photo</label>
            <input type="file" id="photo" name="photo" accept="image/*" required className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
  
          <button type="submit" className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Register</button>
          <Toaster/>
  
          <div className="mt-4 text-center">
            <span>Already have an account? <a href="/signIn" className="text-blue-500">Sign In</a></span>
          </div>
        </form>
      </div>
    );
};

export default SignUp;