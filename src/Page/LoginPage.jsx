import { Link } from "react-router-dom";

const Login = () => {
    return (
        <form className="card-body md:w-5/6 mx-auto my-12">
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
            <div className="form-control">
                <label className="label">
                    <span className="label-text text-accent font-semibold">Password</span>
                </label>
                <input
                    name="password"
                    type="password"
                    placeholder="password"
                    className="input input-bordered border-accent"
                    required/>
                <label className="label">
                    <Link to="/auth/forgot-password" className="label-text-alt link link-hover text-black">Forgot password?</Link>
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