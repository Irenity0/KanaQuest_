import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {

    const { userLogin, setUser } = useContext(AuthContext);

    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        userLogin(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
            })
            .catch((err) => {
                alert(err);
            });
    }


    return (
        <form onSubmit={handleSubmit} className="card-body md:w-5/6 mx-auto my-12">
        <h1 className="text-5xl font-extrabold text-center text-primary">Login Page</h1>
            
            {/* email field */}
            <div className="form-control">
                <label className="label">
                    <span className="label-text text-accent font-semibold">Email</span>
                </label>
                <input
                    name="email"
                    type="email" 
                    placeholder="email"
                    className="input input-bordered border-accent"
                    required
                />
            </div>

            {/* password field */}
            <div className="form-control relative">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="password"
                    className="input input-bordered"
                    required
                />
                <button
                    type="button"
                    className="btn btn-sm absolute bg-accent/30 hover:bg-accent/30 border-none right-4 top-1/2 transform -translate-y-1/2"
                    onClick={() => setShowPassword(!showPassword)} >
                    <FaEye></FaEye>
                </button>
                <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
            </div>

             {/*register btn & google auth  */}
            <div className="form-control mt-6">
                <button className="btn btn-primary text-[#FFDEB6]">Login</button>
                <button type="button" className="btn btn-secondary text-[#FFDEB6] mt-4">Login with Google</button>
                <span className="text-xl font-semibold text-accent mt-4">
                    Don't have an Account?{" "}
                    <Link className="underline text-primary" to={"/auth/register"}>
                        Register
                    </Link>
                </span>
            </div>
        </form>
    );
};

export default Login;