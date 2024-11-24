import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {

    const {createNewUser, user, setUser} = useContext(AuthContext);
    const [error, setError] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = new FormData(e.target);
        const name = form.get("name");
        if (name.length <= 5) {
            setError({...error, name: `Name must be more than 5 characters`});
            return;
        }
        const photo = form.get("photo");
        const email = form.get("email");
        const password = form.get("password");
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        
        if (!passwordRegex.test(password)) {
            setError({
                ...error,
                password: `Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long.`,
            });
            return;
        };

        createNewUser(email, password)
        .then((result) => {
            const user = result.user;
            setUser(user);
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code
            const errorMessage = error.message
            console.log(errorMessage, errorCode);
        })
    }

    const [showPassword, setShowPassword] = useState(false);

    return (
        <form onSubmit={handleSubmit} className="card-body md:w-5/6 mx-auto my-12">
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

            {/* login btn & google auth */}
            <div className="form-control mt-6">
                <button className="btn btn-primary text-[#FFDEB6]">Login</button>
                <button type="button" className="btn text-[#FFDEB6] btn-secondary mt-4">Login with Google</button>
                <span className="text-xl font-semibold text-accent mt-4">
                    Already have an Account?{" "}
                    <Link className="underline text-primary" to={"/auth/login"}>
                        Register
                    </Link>
                </span>
            </div>
        </form>
    );
};

export default Register;