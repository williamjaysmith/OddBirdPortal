function Spinner() {
  return (
    <div 
      className="mx-auto my-4.8 w-6.4 aspect-square rounded-full animate-spin"
      style={{
        background: `radial-gradient(farthest-side, var(--color-brand-600) 94%, transparent) top/10px 10px no-repeat, conic-gradient(transparent 30%, var(--color-brand-600))`,
        mask: `radial-gradient(farthest-side, transparent calc(100% - 10px), black 0)`,
        WebkitMask: `radial-gradient(farthest-side, transparent calc(100% - 10px), black 0)`,
      }}
    />
  );
}

export default Spinner;