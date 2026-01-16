interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = "", hover = true }: CardProps) {
  return (
    <div
      className={`bg-white rounded-2xl shadow-soft border border-gray-100 overflow-hidden ${
        hover ? "hover-lift hover:shadow-medium" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
