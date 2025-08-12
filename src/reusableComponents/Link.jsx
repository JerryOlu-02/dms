export default function LinkComp({ className, url, children }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className={className}
      style={{
        // color: "#fff",
        fontWeight: "600",
        textDecoration: "none",
      }}
    >
      <p
        style={{
          // color: "#fff",
          fontWeight: "600",
          textDecoration: "none",
          fontSize: "14px",
        }}
      >
        {children}
      </p>
    </a>
  );
}
