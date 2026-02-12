import { Link } from 'react-router-dom';
import { Smartphone, CheckCircle, ShieldCheck, Clock, Download, Star } from 'lucide-react';

const Home = () => {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <section style={{
                background: 'linear-gradient(180deg, #eff6ff 0%, #ffffff 100%)',
                padding: '100px 0 60px',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', alignItems: 'center', gap: '60px' }}>
                    <div style={{ position: 'relative', zIndex: 1 }}>
                        <span style={{
                            display: 'inline-block',
                            padding: '6px 16px',
                            background: '#dbeafe',
                            color: 'var(--primary)',
                            borderRadius: '50px',
                            fontSize: '0.9rem',
                            fontWeight: '600',
                            marginBottom: '20px'
                        }}>
                            ✨ #1 Home Services App
                        </span>
                        <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.8rem)', lineHeight: '1.2', marginBottom: '20px', color: 'var(--text-main)', fontWeight: '800' }}>
                            All Home Services & <br />
                            <span style={{ color: 'var(--primary)' }}>Workforce Hiring</span> <br />
                            In One App.
                        </h1>
                        <p style={{ fontSize: '1.2rem', color: 'var(--text-body)', marginBottom: '40px', maxWidth: '500px' }}>
                            From electricians to office helpers, SewaSarthi connects you with verified professionals instantly. Manage everything from your phone.
                        </p>
                        <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                            <button className="btn btn-primary" style={{ padding: '12px 24px', borderRadius: '10px', background: 'black', color: 'white' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <Smartphone size={24} />
                                    <div style={{ textAlign: 'left', lineHeight: '1.1' }}>
                                        <small style={{ fontSize: '0.7rem' }}>GET IT ON</small><br />
                                        <span style={{ fontWeight: '600' }}>Google Play</span>
                                    </div>
                                </div>
                            </button>
                            <button className="btn btn-primary" style={{ padding: '12px 24px', borderRadius: '10px', background: 'black', color: 'white' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <Download size={24} />
                                    <div style={{ textAlign: 'left', lineHeight: '1.1' }}>
                                        <small style={{ fontSize: '0.7rem' }}>Download on the</small><br />
                                        <span style={{ fontWeight: '600' }}>App Store</span>
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>

                    {/* Phone Mockup Placeholder */}
                    <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
                        <div style={{
                            width: '300px', height: '600px', background: 'white',
                            border: '12px solid #1e293b', borderRadius: '40px',
                            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                            overflow: 'hidden', position: 'relative'
                        }}>
                            <div style={{ background: 'var(--primary)', height: '100%', width: '100%', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                                <h3 style={{ color: 'white' }}>App Interface</h3>
                                <p>Service Booking Screen</p>
                            </div>
                            {/* Notch */}
                            <div style={{ position: 'absolute', top: '0', left: '50%', transform: 'translateX(-50%)', width: '120px', height: '24px', background: '#1e293b', borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px' }}></div>
                        </div>
                        {/* Floating Elements */}
                        <div style={{ position: 'absolute', top: '20%', right: '-20px', background: 'white', padding: '15px', borderRadius: '12px', boxShadow: 'var(--shadow-lg)', display: 'flex', gap: '10px', alignItems: 'center' }}>
                            <div style={{ background: '#dcfce7', padding: '8px', borderRadius: '50%' }}><CheckCircle size={20} color="#16a34a" /></div>
                            <div>
                                <div style={{ fontSize: '0.9rem', fontWeight: '700' }}>Booking Confirmed</div>
                                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Electrician Arriving in 15m</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose SewaSarthi */}
            <section className="section-padding">
                <div className="container">
                    <div className="text-center" style={{ marginBottom: '60px' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Why Use The App?</h2>
                        <p style={{ color: 'var(--text-body)', maxWidth: '600px', margin: '0 auto' }}>Experience the most convenient way to manage home services and hiring.</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
                        <div className="card" style={{ border: 'none', background: 'var(--bg-accent)', textAlign: 'center' }}>
                            <div style={{ margin: '0 auto 20px', width: '60px', height: '60px', background: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-sm)' }}>
                                <ShieldCheck size={32} color="var(--primary)" />
                            </div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '10px' }}>Verified Professionals</h3>
                            <p style={{ color: 'var(--text-body)', fontSize: '0.95rem' }}>Every pro on the app is background-checked and police verified for your safety.</p>
                        </div>
                        <div className="card" style={{ border: 'none', background: 'var(--bg-accent)', textAlign: 'center' }}>
                            <div style={{ margin: '0 auto 20px', width: '60px', height: '60px', background: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-sm)' }}>
                                <Smartphone size={32} color="var(--primary)" />
                            </div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '10px' }}>One-Tap Booking</h3>
                            <p style={{ color: 'var(--text-body)', fontSize: '0.95rem' }}>Book services or hire staff instantly. Track them in real-time on the map.</p>
                        </div>
                        <div className="card" style={{ border: 'none', background: 'var(--bg-accent)', textAlign: 'center' }}>
                            <div style={{ margin: '0 auto 20px', width: '60px', height: '60px', background: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-sm)' }}>
                                <Clock size={32} color="var(--primary)" />
                            </div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '10px' }}>Quick Turnaround</h3>
                            <p style={{ color: 'var(--text-body)', fontSize: '0.95rem' }}>Get help within 60 minutes for urgent repairs or next-day staff deployment.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Showcase */}
            <section className="section-padding" style={{ background: 'var(--bg-surface)' }}>
                <div className="container">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
                        <h2 style={{ fontSize: '2rem' }}>Available on App</h2>
                        <Link to="/services" className="btn btn-outline" style={{ borderRadius: '50px' }}>View All Services</Link>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: '20px' }}>
                        {['Home Cleaning', 'Electrician', 'Plumbing', 'AC Repair', 'Painting', 'Beauty/Salon'].map((s, i) => (
                            <div key={i} style={{ padding: '20px', background: 'white', borderRadius: '16px', textAlign: 'center', boxShadow: 'var(--shadow-sm)' }}>
                                <div style={{ width: '50px', height: '50px', background: '#f1f5f9', borderRadius: '50%', margin: '0 auto 15px' }}></div>
                                <h4 style={{ fontSize: '1rem' }}>{s}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* App Download CTA */}
            <section className="section-padding" style={{ textAlign: 'center' }}>
                <div className="container" style={{ background: 'var(--primary)', borderRadius: '24px', padding: '60px 20px', color: 'white' }}>
                    <h2 style={{ fontSize: '2.5rem', color: 'white', marginBottom: '20px' }}>Download SewaSarthi Today</h2>
                    <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.9)', marginBottom: '40px' }}>Join thousands of happy customers managing their homes smartly.</p>
                    <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <button className="btn" style={{ padding: '12px 24px', borderRadius: '10px', background: 'white', color: 'black' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <Smartphone size={24} />
                                <div style={{ textAlign: 'left', lineHeight: '1.1' }}>
                                    <small style={{ fontSize: '0.7rem' }}>GET IT ON</small><br />
                                    <span style={{ fontWeight: '600' }}>Google Play</span>
                                </div>
                            </div>
                        </button>
                        <button className="btn" style={{ padding: '12px 24px', borderRadius: '10px', background: 'white', color: 'black' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <Download size={24} />
                                <div style={{ textAlign: 'left', lineHeight: '1.1' }}>
                                    <small style={{ fontSize: '0.7rem' }}>Download on the</small><br />
                                    <span style={{ fontWeight: '600' }}>App Store</span>
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
