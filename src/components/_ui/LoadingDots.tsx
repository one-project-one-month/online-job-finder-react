const LoadingDots = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="relative h-5 w-10">
        <span className="dot bg-[#0D0140]"></span>
        <span className="dot bg-[#0D0140]"></span>
      </div>
      <style>{`
        .dot {
          position: absolute;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          animation: move 0.6s infinite alternate ease-in-out;
        }

        .dot:nth-child(2) {
          animation-delay: 0.3s;
        }

        @keyframes move {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(20px);
          }
        }
      `}</style>
    </div>
  )
}

export default LoadingDots
