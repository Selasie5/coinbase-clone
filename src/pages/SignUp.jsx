import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Apple, Chrome } from "lucide-react";
import CoinbaseMark from "../components/common/CoinbaseMark";
import AuthPageLoader from "../components/common/AuthPageLoader";
import { useAuth } from "../context/AuthContext";

const SignUp = () => {
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { register } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 950);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const result = await register(name, email, password);
    if (!result.success) {
      setError(result.message);
    }
  };

  return (
    <>
      <AuthPageLoader loading={loading} />
      <section className="min-h-screen bg-[#05070c] px-6 py-5 text-white md:px-10">
        <div className="flex items-start justify-between">
          <CoinbaseMark className="h-8 w-8 text-white" />
        </div>

        <div className="mx-auto mt-16 w-full max-w-100">
          <h1 className="text-3xl font-semibold">Create your account</h1>
          <p className="mt-2 text-base text-[#96a1b7]">
            Demo app – do not use your real password.
          </p>

          {error && <p className="mt-4 text-red-500">{error}</p>}

          <form onSubmit={handleSubmit} className="mt-8">
            <div className="mb-6">
              <label className="mb-2 block text-base font-medium">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full Name"
                required
                className="w-full rounded-lg border border-[#3f4a5f] bg-transparent px-6 py-4 text-base outline-none placeholder:text-[#78839a] focus:border-[#5f7093]"
              />
            </div>
            <div className="mb-6">
              <label className="mb-2 block text-base font-medium">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="w-full rounded-lg border border-[#3f4a5f] bg-transparent px-6 py-4 text-base outline-none placeholder:text-[#78839a] focus:border-[#5f7093]"
              />
            </div>
            <div className="mb-6">
              <label className="mb-2 block text-base font-medium">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Create a password"
                required
                className="w-full rounded-lg border border-[#3f4a5f] bg-transparent px-6 py-4 text-base outline-none placeholder:text-[#78839a] focus:border-[#5f7093]"
              />
            </div>

            <button type="submit" className="w-full rounded-full bg-[#2f467f] py-4 text-base font-medium text-black">
              Continue
            </button>
          </form>

          <div className="my-6 flex items-center gap-5 text-[#7a869f]">
            <span className="h-px flex-1 bg-[#2f3648]" />
            <span className="text-lg">OR</span>
            <span className="h-px flex-1 bg-[#2f3648]" />
          </div>

          <button className="mb-3 flex w-full items-center justify-start gap-4 rounded-full bg-[#252b36] px-6 py-4 text-base font-semibold">
            <Chrome className="h-5 w-5" />
            <span className="w-full text-center">Sign up with Google</span>
          </button>
          <button className="mb-10 flex w-full items-center justify-start gap-4 rounded-full bg-[#252b36] px-6 py-4 text-base font-semibold">
            <Apple className="h-5 w-5" />
            <span className="w-full text-center">Sign up with Apple</span>
          </button>

          <p className="text-center text-base font-medium">
            Already have an account?{" "}
            <Link to="/SignIn" className="text-[#3972ff]">
              Sign in
            </Link>
          </p>

          <p className="mt-8 text-sm text-[#8994aa] text-center">
            By creating an account you certify that you are over the age of 18 and agree to our Privacy Policy
            and Cookie Policy.
          </p>
        </div>
      </section>
    </>
  );
};

export default SignUp;
