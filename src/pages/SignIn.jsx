import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Apple, Chrome, KeyRound } from "lucide-react";
import CoinbaseMark from "../components/common/CoinbaseMark";
import AuthPageLoader from "../components/common/AuthPageLoader";

const SignIn = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 950);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AuthPageLoader loading={loading} />
      <section className="min-h-screen bg-[#05070c] px-6 py-5 text-white md:px-10">
        <CoinbaseMark className="h-8 w-8 text-white" />

        <div className="mx-auto mt-20 w-full max-w-100">
          <h1 className="text-3xl font-semibold">Sign in to Coinbase</h1>

          <div className="mt-10">
            <label className="mb-2 block text-base font-medium font-coinbase-sans">Email</label>
            <input
              type="email"
              placeholder="Your email address"
              className="w-full rounded-lg border border-[#3f4a5f] bg-transparent px-6 py-4 text-base outline-none placeholder:text-[#78839a] focus:border-[#5f7093]"
            />
          </div>

          <button className="mt-6 w-full rounded-full bg-[#2f467f] py-4 text-base font-medium text-black">
            Continue
          </button>

          <div className="my-6 flex items-center gap-5 text-[#7a869f]">
            <span className="h-px flex-1 bg-[#2f3648]" />
            <span className="text-lg">OR</span>
            <span className="h-px flex-1 bg-[#2f3648]" />
          </div>

          <button className="mb-3 flex w-full items-center justify-start gap-4 rounded-full bg-[#252b36] px-6 py-4 text-base font-semibold">
            <KeyRound className="h-5 w-5" />
            <span className="w-full text-center">Sign in with Passkey</span>
          </button>
          <button className="mb-3 flex w-full items-center justify-start gap-4 rounded-full bg-[#252b36] px-6 py-4 text-base font-semibold">
            <Chrome className="h-5 w-5" />
            <span className="w-full text-center">Sign in with Google</span>
          </button>
          <button className="mb-10 flex w-full items-center justify-start gap-4 rounded-full bg-[#252b36] px-6 py-4 text-base font-semibold">
            <Apple className="h-5 w-5" />
            <span className="w-full text-center">Sign in with Apple</span>
          </button>

          <p className="text-center text-base font-medium">
            Don't have an account?{" "}
            <Link to="/SignUp" className="text-[#3972ff]">
              Sign up
            </Link>
          </p>
        </div>
        <div className="w-full flex  justify-center items-center">
          <p className="text-gray-300 text-sm flex justify-center items-center mt-10 w-1/3 text-center ">
            Not your device? Use a private window. See our Privacy Policy for more info.
          </p>
        </div>
      </section>
    </>
  );
};

export default SignIn;
