export default function LinkComp({ className, url, children }) {
  return (
    <p className={className}>
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        style={{
          color: "#fff",
          fontWeight: "600",
          textDecoration: "none",
          fontSize: "14px",
        }}
      >
        {children}
      </a>
    </p>
  );
}
