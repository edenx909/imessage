const Onboard = ({ children }) => {
  return (
    <div className="w-full h-screen">
      <div className="flex justify-center  flex-col">
        <div className="flex-col flex items-center p-3 m-3">
          {/* IMG animation framrer */}
          <p className="font-semibold text-xl">Apple Account</p>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Onboard;
