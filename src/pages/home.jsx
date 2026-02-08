import Header from "../components/common/header.jsx"
import Footer from "../components/common/footer.jsx"
import "../styles/home.css"
import { useNavigate } from "react-router-dom"
function Home() {
    const navigate=useNavigate();
    return (
        <div className="frame">
            <Header />
            <div className="content">
                <div
                    className="mobile-alert"
                    onClick={(e) => e.currentTarget.style.display = 'none'}
                >
                    <h2>Desktop Recommended</h2>
                    <p>For the best experience, please use a desktop browser.</p>
                    <button>Dismiss</button>
                </div>
                {/* Hero Section */}
                <div className="Hero">
                    <h1>Create invoices, bills & estimates instantly</h1>
                    <p>No login. No signup. No friction.</p>
                </div>

                {/* Get Started Section */}
                <div className="getStarted">
                    <h2>Get started in seconds</h2>
                    <p>
                        Choose what you want to generate. Fill the details. Download instantly.
                    </p>

                    <div className="action-cards">
                        <div className="card">
                            <h3>Invoice</h3>
                            <p>Generate professional invoices for your clients.</p>
                            <button className="btn-invoice" onClick={() => navigate("/invoice")}>Create Invoice</button>
                        </div>

                        <div className="card">
                            <h3>Bill</h3>
                            <p>Create simple bills with automatic totals.</p>
                            <button className="btn-bill" onClick={() => navigate("/bill")}>Create Bill</button>
                        </div>

                        <div className="card">
                            <h3>Estimate</h3>
                            <p>Send clear cost estimates before starting work.</p>
                            <button className="btn-estimate" onClick={() => navigate("/estimate")}>Create Estimate</button>
                        </div>
                    </div>
                </div>

                {/* Why Section */}
                <div className="why">
                    <h2>Why this tool?</h2>

                    <ul>
                        <li>✔ Completely free</li>
                        
                        <li>✔ No data stored on servers</li>
                        <li>✔ Works directly in your browser</li>
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home;
