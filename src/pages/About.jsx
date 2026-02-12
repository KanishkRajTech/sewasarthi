import { Smartphone, Shield, Users } from 'lucide-react';

const About = () => {
    return (
        <div className="about-page">
            <div className="container section-padding">
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h1 style={{ marginBottom: '20px' }}>About SewaSarthi App</h1>
                    <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.2rem', color: 'var(--text-body)' }}>
                        We are a technology company on a mission to simplify home management and empower blue-collar professionals through our mobile platform.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
                    <div style={{ padding: '30px', background: 'var(--bg-surface)', borderRadius: '16px' }}>
                        <Smartphone size={40} color="var(--primary)" style={{ marginBottom: '20px' }} />
                        <h3>Tech-First Approach</h3>
                        <p style={{ color: 'var(--text-muted)' }}>By moving everything to an app, we eliminate middlemen, ensuring fair pricing for you and better earnings for professionals.</p>
                    </div>
                    <div style={{ padding: '30px', background: 'var(--bg-surface)', borderRadius: '16px' }}>
                        <Shield size={40} color="var(--primary)" style={{ marginBottom: '20px' }} />
                        <h3>Safety & Trust</h3>
                        <p style={{ color: 'var(--text-muted)' }}>Technology enables us to track every service in real-time. Background verification data is integrated directly into the professional's profile.</p>
                    </div>
                    <div style={{ padding: '30px', background: 'var(--bg-surface)', borderRadius: '16px' }}>
                        <Users size={40} color="var(--primary)" style={{ marginBottom: '20px' }} />
                        <h3>Community Impact</h3>
                        <p style={{ color: 'var(--text-muted)' }}>We are creating digital identities for thousands of unorganized workers, giving them access to formal financial & insurance products.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
