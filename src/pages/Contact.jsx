import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';

const Contact = () => {
    return (
        <div className="contact-page">
            <div style={{ background: 'var(--bg-accent)', padding: '80px 0 60px', textAlign: 'center' }}>
                <div className="container">
                    <h1 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>App Support & Enquiries</h1>
                    <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem', color: 'var(--text-body)' }}>
                        Need help with a booking or want to register as a partner? Contact our support team.
                    </p>
                </div>
            </div>

            <div className="container section-padding">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>

                    <div style={{ padding: '30px', border: '1px solid var(--border-light)', borderRadius: '16px', textAlign: 'center' }}>
                        <div style={{ width: '60px', height: '60px', background: 'var(--bg-surface)', borderRadius: '50%', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <MessageSquare size={28} color="var(--primary)" />
                        </div>
                        <h3>In-App Chat</h3>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '20px' }}>The fastest way to get help.</p>
                        <p style={{ fontWeight: '500' }}>Open App -> Profile -> Help</p>
                    </div>

                    <div style={{ padding: '30px', border: '1px solid var(--border-light)', borderRadius: '16px', textAlign: 'center' }}>
                        <div style={{ width: '60px', height: '60px', background: 'var(--bg-surface)', borderRadius: '50%', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Mail size={28} color="var(--accent)" />
                        </div>
                        <h3>Email Support</h3>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '20px' }}>For billing and account issues.</p>
                        <a href="mailto:support@sewasarthi.com" className="btn btn-outline">support@sewasarthi.com</a>
                    </div>

                    <div style={{ padding: '30px', border: '1px solid var(--border-light)', borderRadius: '16px', textAlign: 'center' }}>
                        <div style={{ width: '60px', height: '60px', background: 'var(--bg-surface)', borderRadius: '50%', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <MapPin size={28} color="var(--primary)" />
                        </div>
                        <h3>Corporate Office</h3>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '20px' }}>Visit us for partnerships.</p>
                        <p style={{ fontSize: '0.9rem' }}>Sector 62, Noida, India</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;
