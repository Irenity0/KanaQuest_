import { Link } from "react-router-dom";

const Register = () => {
    return (
        <form className="card-body md:w-5/6 mx-auto my-12">
        <h1 className="text-5xl font-extrabold text-center text-primary">Register Page</h1>
            
            {/* name field */}
            <div className="form-control">
                <label className="label">
                    <span className="label-text text-accent font-semibold">Name</span>
                </label>
                <input
                    name="name"
                    type="text" 
                    placeholder="name"
                    className="input input-bordered border-accent"
                    required
                />
            </div>

            {/* photoURL field */}
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Photo URL</span>
                </label>
                <input name="photo" type="text" placeholder="pfp url" className="input input-bordered border-accent" required />
            </div>

            {/* email field */}
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input name="email" type="email" placeholder="email" className="input input-bordered border-accent" required />
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

            {/* login btn & google auth */}
            <div className="form-control mt-6">
                <button className="btn btn-primary text-[#FFDEB6]">Login</button>
                <button type="button" className="btn text-[#FFDEB6] btn-secondary mt-4">Login with Google</button>
                <span className="text-xl font-semibold text-accent mt-4">
                    Already have an Account?{" "}
                    <Link className="underline text-primary" to={"/auth/login"}>
                        Login
                    </Link>
                </span>
            </div>
        </form>
    );
};

export default Register;