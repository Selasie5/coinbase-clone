import CoinbaseMark from "./CoinbaseMark";

const AuthPageLoader = ({ loading }) => {
  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black">
      <CoinbaseMark className="h-14 w-14 text-white animate-pulse" />
    </div>
  );
};

export default AuthPageLoader;
