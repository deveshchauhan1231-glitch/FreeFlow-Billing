function Client({ register }) {
  const labelWidth = 160;

  const rowStyle = {
    display: "flex",
    alignItems: "center",
    gap: "24px",
  };

  const labelStyle = {
    width: `${labelWidth}px`,
    
  };

  const inputStyle = {
    flex: 1,
    padding: "8px",
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <div style={rowStyle}>
        <label style={labelStyle}>Client Name</label>
        <input
          {...register("client.name")}
          placeholder="Client Name"
          style={inputStyle}
        />
      </div>

      <div style={rowStyle}>
        <label style={labelStyle}>Email</label>
        <input
          {...register("client.email")}
          placeholder="Email"
          style={inputStyle}
        />
      </div>

      <div style={rowStyle}>
        <label style={labelStyle}>Phone</label>
        <input
          {...register("client.phone")}
          placeholder="Phone"
          style={inputStyle}
        />
      </div>

      <div style={rowStyle}>
        <label style={labelStyle}>Address</label>
        <input
          {...register("client.address")}
          placeholder="Address"
          style={inputStyle}
        />
      </div>
    </div>
  );
}

export default Client;
