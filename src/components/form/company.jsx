function Company({ register }) {
  const rowStyle = {
    display: "flex",
    alignItems: "center",
    gap: "24px",
  };

  const labelStyle = {
    width: "160px",
  };

  const inputStyle = {
    flex: 1,
    padding: "8px",
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <div style={rowStyle}>
        <label style={labelStyle}>Seller Name</label>
        <input
          {...register("company.name")}
          placeholder="Name"
          style={inputStyle}
        />
      </div>

      <div style={rowStyle}>
        <label style={labelStyle}>Email</label>
        <input
          {...register("company.email")}
          placeholder="Email"
          style={inputStyle}
        />
      </div>

      <div style={rowStyle}>
        <label style={labelStyle}>Phone</label>
        <input
          {...register("company.contact")}
          placeholder="Phone"
          style={inputStyle}
        />
      </div>

      <div style={rowStyle}>
        <label style={labelStyle}>Address</label>
        <input
          {...register("company.address")}
          placeholder="Address"
          style={inputStyle}
        />
      </div>
      <div style={rowStyle}>
        <label style={labelStyle}>Notes/Terms</label>
        <input
          {...register("company.notes")}
          placeholder="Notes"
          style={inputStyle}
        />
      </div>
    </div>
  );
}

export default Company;
