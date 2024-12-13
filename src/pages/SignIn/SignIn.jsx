import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";


const SignIn = () => {

    const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const response = await axios.post("https://j-learn-server.vercel.app/singIn", { email, password });
      const { token } = response.data;

      localStorage.setItem("token", token);

      const user = JSON.parse(atob(token.split(".")[1]));
      const role = user.role;
      toast.success("You have successfully signIn")
      navigate(role === "admin" ? "/dashboard" : "/");
    } catch (error) {
      console.error("SignIn failed:", error.response?.data?.message || error.message);
    }
  };

    return (
        <div className="h-screen flex items-center justify-center">
      <form onSubmit={handleLogin} className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
        <div className="form-group mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" id="email" name="email" placeholder="Email" required className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <div className="form-group mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input type="password" id="password" name="password" placeholder="Password" required className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <button type="submit" className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Login</button> <Toaster/>

        <div className="mt-4 text-center">
          <span>Don`t have an account? <Link to="/signUp" className="text-blue-500">Sign Up</Link></span>
        </div>
      </form>
    </div>
    );
};

export default SignIn;