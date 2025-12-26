import { useEffect, useState } from "react";

const NetflixLoader = ({ onComplete }: { onComplete: () => void }) => {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
      setTimeout(onComplete, 500);
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      className={`netflix-loader transition-opacity duration-500 ${
        !isAnimating ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="netflix-logo flex flex-col items-center">
        <svg
          viewBox="0 0 111 30"
          className="w-48 md:w-64 fill-primary"
          aria-hidden="true"
        >
          <path d="M105.062 14.28L111 30c-1.75-.25-3.499-.563-5.28-.845l-3.345-8.686-3.437 7.969c-1.687-.282-3.344-.376-5.031-.595l6.031-13.75L94.468 0h5.063l3.062 7.874L105.875 0h5.124l-5.937 14.28zM90.47 0h-4.594v27.25c1.5.094 3.062.156 4.594.343V0zM81.218 0h-4.687v27.656c1.562.156 3.125.344 4.687.562V0zM72.156 0h-4.656v28.406c1.562.25 3.125.469 4.656.718V0zM63.5 26.906V0h-4.656v27.625c1.562.188 3.156.406 4.656.594V26.906zM54.875 25.844V0h-4.656v26.562c1.531.25 3.125.469 4.656.719v-1.437zM45.656 0V24.625c-1.5-.469-3.062-.906-4.625-1.25V0h4.625zM36.281 0v22.406c-1.469-.313-3.031-.656-4.5-.938V0h4.5zM27.093 0v20.688c-1.5-.25-3.031-.5-4.593-.719V0h4.593zM18.219 0v19.281c-1.5-.156-3-.344-4.5-.469V0h4.5zM9.156 0v18.531c-1.5-.094-3.062-.219-4.562-.313V0h4.562zM0 0v18.031c.938.031 1.844.063 2.781.094C4.188 18.188 5.625 18.25 7.031 18.344V0H0z" />
        </svg>
        <div className="mt-8 flex gap-1">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-3 h-3 rounded-full bg-primary animate-bounce"
              style={{ animationDelay: `${i * 0.15}s` }}
            />
          ))}
        </div>
        <p className="mt-6 text-muted-foreground font-display text-xl tracking-widest">
          LOADING PORTFOLIO
        </p>
      </div>
    </div>
  );
};

export default NetflixLoader;
