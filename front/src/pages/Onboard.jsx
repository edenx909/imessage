const Onboard = ({ children }) => {
  return (
    <div className="flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center overflow-hidden p-3">
      {children}
    </div>
  );
};

export default Onboard;
