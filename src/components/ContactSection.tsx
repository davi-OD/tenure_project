import ContactUs from './ContactUs';
import ContactForm from './ContactForm';

const ContactSection: React.FC = () => {
    return (
        <section className="" id='contact-us'>
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <ContactUs />
                    </div>
                    <div className='bg-green'>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;