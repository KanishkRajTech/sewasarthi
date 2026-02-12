import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Smartphone } from 'lucide-react';
import { useState, useEffect } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    // Active link styles
    const getLinkStyle = (path) => ({
        color: location.pathname === path ? 'var(--primary)' : 'var(--text-main)',
        fontWeight: location.pathname === path ? '600' : '500',
        fontSize: '0.95rem'
    });

    return (
        <nav className="navbar">
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{
                        width: '36px',
                        height: '36px',
                        background: 'linear-gradient(135deg, var(--primary), var(--accent))',
                        borderRadius: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: '1.2rem',
                        boxShadow: '0 4px 10px rgba(37, 99, 235, 0.2)'
                    }}>S</div>
                    <span style={{ fontSize: '1.5rem', fontWeight: '700', fontFamily: 'var(--font-heading)', color: 'var(--text-main)', letterSpacing: '-0.02em' }}>
                        Sewa<span style={{ color: 'var(--primary)' }}>Sarthi</span>
                    </span>
                </Link>

                <button
                    className="mobile-menu-btn"
                    onClick={() => setIsOpen(!isOpen)}
                    style={{ display: 'none', background: 'none', border: 'none' }}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Desktop Menu */}
                <ul className={`nav-links ${isOpen ? 'active' : ''}`} style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
                    <li><Link to="/" style={getLinkStyle('/')}>Home</Link></li>
                    <li><Link to="/services" style={getLinkStyle('/services')}>Home Services</Link></li>
                    <li><Link to="/hire" style={getLinkStyle('/hire')}>For Business</Link></li>
                    <li><Link to="/about" style={getLinkStyle('/about')}>About App</Link></li>
                    <li>
                        <button className="btn btn-primary" style={{ padding: '0.6rem 1.4rem', borderRadius: '50px', background: 'var(--primary)', boxShadow: '0 4px 12px rgba(37, 99, 235, 0.3)' }} onClick={() => window.open('https://play.google.com', '_blank')}>
                            <Smartphone size={18} style={{ marginRight: '8px' }} /> Download App
                        </button>
                    </li>
                </ul>
            </div>

            {/* Mobile Menu Styles */}
            <style>{`
                @media (max-width: 768px) {
                    .mobile-menu-btn { display: block !important; }
                    .nav-links {
                        position: fixed;
                        top: 80px;
                        left: 0;
                        width: 100%;
                        height: calc(100vh - 80px);
                        background: white;
                        flex-direction: column;
                        padding: 2rem;
                        box-shadow: 0 4px 20px rgba(0,0,0,0.1);
                        transform: translateX(100%);
                        transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                        align-items: flex-start !important;
                        gap: 15px !important;
                    }
                    .nav-links.active { transform: translateX(0); }
                    .nav-links li { width: 100%; padding-bottom: 10px; }
                    .nav-links li:last-child { margin-top: 10px; }
                    .btn-primary { width: 100%; justify-content: center; }
                }
            `}</style>
        </nav>
    );
};

export default Navbar;
