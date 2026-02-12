import { Building, Home, ShoppingBag, Utensils, Smartphone, CheckCircle } from 'lucide-react';

const Hire = () => {
    return (
        <div className="workforce-page">
            <div style={{ background: 'var(--bg-active)', padding: '80px 0 60px', textAlign: 'center' }}>
                <div className="container">
                    <span style={{ color: 'var(--accent)', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase' }}>For Businesses & Households</span>
                    <h1 style={{ fontSize: '3rem', margin: '10px 0 20px' }}>Hiring Made Simple</h1>
                    <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-body)', fontSize: '1.2rem' }}>
                        Post your requirements on the SewaSarthi App and connect with verified staff in minutes.
                    </p>
                </div>
            </div>

            <div className="container section-padding">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '40px' }}>

                    {/* Business Segment */}
                    <div>
                        <h3 style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <Building color="var(--primary)" /> For Businesses
                        </h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <div className="card" style={{ padding: '24px', borderLeft: '4px solid var(--primary)' }}>
                                <div style={{ display: 'flex', gap: '15px' }}>
                                    <ShoppingBag size={24} color="var(--text-muted)" />
                                    <div>
                                        <h4 style={{ marginBottom: '5px' }}>Shop Owners</h4>
                                        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Hire helpers, sales staff, and cleaners instantly.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card" style={{ padding: '24px', borderLeft: '4px solid var(--primary)' }}>
                                <div style={{ display: 'flex', gap: '15px' }}>
                                    <Utensils size={24} color="var(--text-muted)" />
                                    <div>
                                        <h4 style={{ marginBottom: '5px' }}>Restaurants</h4>
                                        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Find waiters, kitchen helpers, and stewards.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card" style={{ padding: '24px', borderLeft: '4px solid var(--primary)' }}>
                                <div style={{ display: 'flex', gap: '15px' }}>
                                    <Building size={24} color="var(--text-muted)" />
                                    <div>
                                        <h4 style={{ marginBottom: '5px' }}>Offices</h4>
                                        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Recruit office boys, receptionists, and security.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Household Segment */}
                    <div>
                        <h3 style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <Home color="var(--accent)" /> For Households
                        </h3>
                        <div className="card" style={{ padding: '30px', background: 'var(--bg-accent)', height: '100%' }}>
                            <h4 style={{ marginBottom: '20px' }}>Domestic Staff Hiring</h4>
                            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '15px' }}>
                                {['Full-time Maids', 'Cooks & Chefs', 'Elderly Caretakers', 'Private Drivers'].map((role, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', background: 'white', padding: '12px', borderRadius: '8px' }}>
                                        <CheckCircle size={16} color="var(--accent)" /> {role}
                                    </li>
                                ))}
                            </ul>
                            <div style={{ marginTop: '30px', textAlign: 'center' }}>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '15px' }}>Post requirement via App 👇</p>
                                <button className="btn btn-primary" style={{ width: '100%', borderRadius: '8px' }}>Open App to Hire</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Hire;
