import { Link } from 'react-router-dom';
import { Mail, Phone, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{ background: '#f8fafc', paddingTop: '80px', paddingBottom: '40px', borderTop: '1px solid var(--border-light)' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '50px', marginBottom: '60px' }}>

                    {/* Brand */}
                    <div>
                        <h2 style={{ fontSize: '1.8rem', fontWeight: '800', color: 'var(--text-main)', marginBottom: '20px' }}>
                            Sewa<span style={{ color: 'var(--primary)' }}>Sarthi</span>
                        </h2>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '30px' }}>
                            India's most trusted home services and workforce hiring app.
                        </p>
                        <div style={{ display: 'flex', gap: '15px' }}>
                            <div style={{ width: '36px', height: '36px', background: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-sm)' }}><Facebook size={18} /></div>
                            <div style={{ width: '36px', height: '36px', background: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-sm)' }}><Twitter size={18} /></div>
                            <div style={{ width: '36px', height: '36px', background: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-sm)' }}><Instagram size={18} /></div>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 style={{ marginBottom: '20px' }}>Company</h4>
                        <ul className="footer-links" style={{ display: 'flex', flexDirection: 'column', gap: '10px', color: 'var(--text-body)' }}>
                            <li><Link to="/about">About App</Link></li>
                            <li><Link to="/contact">Contact Support</Link></li>
                            <li><Link to="#">Privacy Policy</Link></li>
                            <li><Link to="#">Terms of Use</Link></li>
                        </ul>
                    </div>

                    {/* Download */}
                    <div>
                        <h4 style={{ marginBottom: '20px' }}>Get the App</h4>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '20px' }}>Available for iOS and Android.</p>
                        <button className="btn" style={{ width: '100%', marginBottom: '10px', background: 'black', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', borderRadius: '8px' }}>
                            Download on App Store
                        </button>
                        <button className="btn" style={{ width: '100%', background: 'black', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', borderRadius: '8px' }}>
                            Get it on Google Play
                        </button>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 style={{ marginBottom: '20px' }}>App Support</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '15px', color: 'var(--text-body)' }}>
                            <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}><Phone size={18} color="var(--primary)" /> +91 98765 43210</li>
                            <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}><Mail size={18} color="var(--primary)" /> support@sewasarthi.com</li>
                        </ul>
                    </div>

                </div>

                <div style={{ textAlign: 'center', borderTop: '1px solid var(--border-light)', paddingTop: '30px', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                    &copy; 2026 SewaSarthi Technologies Pvt Ltd. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
