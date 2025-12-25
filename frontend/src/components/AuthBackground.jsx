const circleSets = {
  login: [
    { top: "6%", left: "10%", size: 18, color: "bg-[rgba(198,180,220,0.26)]" },
    { top: "10%", left: "32%", size: 28, color: "bg-[rgba(198,180,220,0.22)]" },
    { top: "14%", left: "70%", size: 22, color: "bg-[rgba(198,180,220,0.24)]" },
    { top: "20%", left: "86%", size: 16, color: "bg-[rgba(198,180,220,0.26)]" },
    { top: "24%", left: "18%", size: 34, color: "bg-[rgba(198,180,220,0.20)]" },
    { top: "28%", left: "48%", size: 20, color: "bg-[rgba(198,180,220,0.22)]" },
    { top: "30%", left: "62%", size: 14, color: "bg-[rgba(198,180,220,0.24)]" },
    { top: "36%", left: "8%", size: 26, color: "bg-[rgba(198,180,220,0.24)]" },
    { top: "38%", left: "26%", size: 12, color: "bg-[rgba(198,180,220,0.26)]" },
    { top: "42%", left: "78%", size: 30, color: "bg-[rgba(198,180,220,0.20)]" },
    { top: "46%", left: "56%", size: 18, color: "bg-[rgba(198,180,220,0.24)]" },
    { top: "52%", left: "14%", size: 22, color: "bg-[rgba(198,180,220,0.22)]" },
    { top: "58%", left: "36%", size: 16, color: "bg-[rgba(198,180,220,0.26)]" },
    { top: "60%", left: "64%", size: 24, color: "bg-[rgba(198,180,220,0.22)]" },
    { top: "64%", left: "84%", size: 12, color: "bg-[rgba(198,180,220,0.26)]" },
    { top: "68%", left: "22%", size: 28, color: "bg-[rgba(198,180,220,0.20)]" },
    { top: "72%", left: "48%", size: 14, color: "bg-[rgba(198,180,220,0.26)]" },
    { top: "76%", left: "6%", size: 20, color: "bg-[rgba(198,180,220,0.24)]" },
    { top: "82%", left: "32%", size: 26, color: "bg-[rgba(198,180,220,0.24)]" },
    { top: "86%", left: "68%", size: 18, color: "bg-[rgba(198,180,220,0.22)]" },
    { top: "90%", left: "90%", size: 22, color: "bg-[rgba(198,180,220,0.22)]" }
  ],
  signup: [
    { top: "6%", left: "12%", size: 18, color: "bg-[rgba(198,180,220,0.26)]" },
    { top: "10%", left: "36%", size: 28, color: "bg-[rgba(198,180,220,0.22)]" },
    { top: "14%", left: "72%", size: 22, color: "bg-[rgba(198,180,220,0.24)]" },
    { top: "18%", left: "88%", size: 16, color: "bg-[rgba(198,180,220,0.26)]" },
    { top: "24%", left: "20%", size: 34, color: "bg-[rgba(198,180,220,0.20)]" },
    { top: "28%", left: "50%", size: 20, color: "bg-[rgba(198,180,220,0.22)]" },
    { top: "32%", left: "66%", size: 14, color: "bg-[rgba(198,180,220,0.24)]" },
    { top: "36%", left: "8%", size: 26, color: "bg-[rgba(198,180,220,0.24)]" },
    { top: "40%", left: "28%", size: 12, color: "bg-[rgba(198,180,220,0.26)]" },
    { top: "44%", left: "80%", size: 30, color: "bg-[rgba(198,180,220,0.20)]" },
    { top: "48%", left: "58%", size: 18, color: "bg-[rgba(198,180,220,0.24)]" },
    { top: "54%", left: "16%", size: 22, color: "bg-[rgba(198,180,220,0.22)]" },
    { top: "60%", left: "38%", size: 16, color: "bg-[rgba(198,180,220,0.26)]" },
    { top: "62%", left: "68%", size: 24, color: "bg-[rgba(198,180,220,0.22)]" },
    { top: "66%", left: "86%", size: 12, color: "bg-[rgba(198,180,220,0.26)]" },
    { top: "70%", left: "24%", size: 28, color: "bg-[rgba(198,180,220,0.20)]" },
    { top: "74%", left: "52%", size: 14, color: "bg-[rgba(198,180,220,0.26)]" },
    { top: "78%", left: "6%", size: 20, color: "bg-[rgba(198,180,220,0.24)]" },
    { top: "82%", left: "34%", size: 26, color: "bg-[rgba(198,180,220,0.24)]" },
    { top: "86%", left: "70%", size: 18, color: "bg-[rgba(198,180,220,0.22)]" },
    { top: "90%", left: "90%", size: 22, color: "bg-[rgba(198,180,220,0.22)]" }
  ]
};

const AuthBackground = ({ variant = "login" }) => {
  const circles = circleSets[variant] || circleSets.login;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {circles.map((circle, index) => (
        <span
          key={index}
          className={`absolute rounded-full blur-[0.5px] ${circle.color}`}
          style={{
            top: circle.top,
            left: circle.left,
            width: `${circle.size}px`,
            height: `${circle.size}px`
          }}
        />
      ))}
      <div className="absolute -top-16 left-10 w-56 h-56 rounded-full bg-[rgba(198,180,220,0.22)] blur-3xl" />
      <div className="absolute bottom-10 right-12 w-64 h-64 rounded-full bg-[rgba(198,180,220,0.22)] blur-3xl" />
    </div>
  );
};

export default AuthBackground;
