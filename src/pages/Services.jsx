import { Wrench, Droplet, Wind, Zap, Brush, Sparkles, Scissors, Smartphone, ChevronRight } from 'lucide-react';

const services = [
    { name: 'Cleaning', icon: <Sparkles size={32} />, desc: 'Deep home cleaning, sanitation, and pest control.' },
    { name: 'Electrical', icon: <Zap size={32} />, desc: 'Wiring, switchboard repair, appliance installation.' },
    { name: 'Plumbing', icon: <Droplet size={32} />, desc: 'Leak repair, fitting installation, basin cleaning.' },
    { name: 'AC Repair', icon: <Wind size={32} />, desc: 'AC servicing, gas filling, installation & uninstallation.' },
    { name: 'Painting', icon: <Brush size={32} />, desc: 'Full home painting, texture work, waterproofing.' },
    { name: 'Appliance', icon: <Wrench size={32} />, desc: 'Repair of washing machines, fridges, microwaves.' },
    { name: 'Salon', icon: <Scissors size={32} />, desc: 'Haircut, facial, waxing, and massage at home.' },
];

const Services = () => {
    return (
        <div className="services-page">
            <div style={{ background: 'var(--bg-accent)', padding: '60px 0' }}>
                <div className="container text-center">
                    <h1 style={{ marginBottom: '15px' }}>One App. All Services.</h1>
                    <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-body)' }}>
                        Select from a wide range of services on the SewaSarthi App and get verified professionals at your doorstep.
                    </p>
                </div>
            </div>

            <div className="container section-padding">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
                    {services.map((s, i) => (
                        <div key={i} style={{
                            padding: '24px',
                            background: 'white',
                            borderRadius: '16px',
                            border: '1px solid var(--border-light)',
                            boxShadow: 'var(--shadow-sm)',
                            textAlign: 'center',
                            transition: 'all 0.2s',
                            cursor: 'default'
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-4px)';
                                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                                e.currentTarget.style.borderColor = 'var(--accent)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                                e.currentTarget.style.borderColor = 'var(--border-light)';
                            }}
                        >
                            <div style={{
                                width: '60px', height: '60px',
                                background: 'var(--bg-surface)',
                                borderRadius: '50%',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                margin: '0 auto 16px',
                                color: 'var(--primary)'
                            }}>
                                {s.icon}
                            </div>
                            <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>{s.name}</h3>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{s.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Download CTA */}
                <div style={{ marginTop: '60px', background: 'white', border: '2px dashed var(--primary)', borderRadius: '20px', padding: '40px', textAlign: 'center' }}>
                    <Smartphone size={40} color="var(--primary)" style={{ marginBottom: '20px' }} />
                    <h3 style={{ marginBottom: '10px' }}>Need a service not listed here?</h3>
                    <p style={{ marginBottom: '20px', color: 'var(--text-body)' }}>Check the app for the full list of 50+ services available in your area.</p>
                    <button className="btn btn-primary" style={{ background: 'var(--primary)', color: 'white', borderRadius: '50px' }}>Download App <ChevronRight size={18} /></button>
                </div>
            </div>
        </div>
    );
};

export default Services;
