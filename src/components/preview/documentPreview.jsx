import "./documentPreview.css";
function DocumentPreview({ type, data }) {
  const { company, client, items, tax } = data;

  const statusMap = {
    invoice: {
      label: "UNPAID",
      color: "#dc2525",
    },
    bill: {
      label: "PAID",
      color: "#16a34a",
    },
    estimate: {
      label: "ESTIMATED BILL",
      color: "#ca9d3b",
    },
  };

  const status = statusMap[type];

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const totaltax = tax.reduce(
  (sum, tax) => sum + (subtotal * tax.rate) / 100,
  0
);


  return (
    <div className="preview-container">

      <div className="preview-header">
        <h2>{type.toUpperCase()}</h2>

        <span
          className="status-badge"
          style={{ color: status.color, borderColor: status.color }}
        >
          {status.label}
        </span>
      </div>


      <div className="party-row">
        <div className="party-block">
          <h4>From</h4>
          <p>{company?.name}</p>
          <p>{company?.email}</p>
          <p>{company?.contact}</p>
          <p>{company?.address}</p>
        </div>

        <div className="party-block align-right">
          <h4>To</h4>
          <p>{client?.name}</p>
          <p>{client?.email}</p>
          <p>{client?.phone}</p>
          <p>{client?.address}</p>
        </div>
      </div>


      <table className="items-table">
        <thead>
          <tr>
            <th>Item/Service</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Total</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item, i) => (
            <tr key={i}>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.qty}</td>
              <td>{item.price * item.qty}</td>
            </tr>
          ))}
        </tbody>
        <tbody>
        {tax?.map((tax, i) => (
          tax.rate > 0 && (
            <tr key={`tax-${i}`}>
              <td colSpan="3" style={{ textAlign: "right" }}>
                {tax.name.toUpperCase()} ({tax.rate}%)
              </td>
              <td>
                {(subtotal * tax.rate) / 100}
              </td>
            </tr>
          
          )
          
        ))}
        </tbody>

      </table>


      <div className="total-row">
        
        <strong>{totaltax == 0 ? `Total: ${subtotal}` : "Total: " + (subtotal + totaltax)}</strong>

      </div>
      <div className="notes">
        <p>{company.notes != "" && company.notes}</p>
        <p>{company.notes === "" && "Thank you for your business"}</p>
      </div>
    </div>
  );
}

export default DocumentPreview;
