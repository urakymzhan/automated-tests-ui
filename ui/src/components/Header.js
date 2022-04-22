export default function Header() {
  const styles = {
    "app-header": {
      borderBottom: "1px solid #E5E5E5",
    },
    heading: {
      marginBottom: 0,
      color: "#2682D7",
    },
    "sub-heading": {
      color: "#6F6A6A",
      marginLeft: "0.5rem",
      marginTop: "0.5rem",
    },
  };
  return (
    <header style={styles["app-header"]}>
      <h1 style={styles["heading"]}>Techglobal School</h1>
      <p style={styles["sub-heading"]}>Explore examples to test</p>
    </header>
  );
}
