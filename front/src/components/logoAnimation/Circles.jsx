const Circles = ({ circleDots, spread, size }) => {
  const dots = Array.from({ length: circleDots });

  return (
    <>
      <div className="relative flex items-center justify-center">
        {dots.map((_, index) => (
          <div
            key={index}
            className="absolute rounded-full"
            style={{
              height: size,
              width: size,
              background: "linear-gradient(254deg, #e01fd7, #0066CC)",
              transform: `rotate(${(index / dots.length) * 360}deg) translate(${spread})`,
            }}
          />
        ))}
      </div>
    </>
  );
};

export default Circles;
