import ContactForm from './ContactForm';

export const metadata = { title: 'Contact — Tran Phu Khang' };

export default function ContactPage() {
  return (
    <main className="section">
      <div className="container-narrow">
        <h1 className="section-title">Contact</h1>
        <ContactForm />
      </div>
    </main>
  );
}