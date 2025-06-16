import React from 'react';
import { Mail, MessageCircle, Instagram, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "syifaulumam234@gmail.com",
      href: "mailto:syifaulumam234@gmail.com",
      color: "from-yellow-400 to-yellow-600"
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "+62 812-1785-1128",
      href: "https://wa.me/6281217851128",
      color: "from-green-400 to-green-600"
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@faul.um",
      href: "https://www.instagram.com/faul.um",
      color: "from-pink-400 to-purple-600"
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-950"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-yellow-400">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Let's connect and explore opportunities for collaboration in content creation, 
            finance, or social impact initiatives
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((contact, index) => {
                  const IconComponent = contact.icon;
                  return (
                    <a
                      key={index}
                      href={contact.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-4 bg-gray-700/30 rounded-lg border border-gray-600/30 hover:border-yellow-400/30 transition-all duration-300 hover:transform hover:scale-105 group"
                    >
                      <div className={`bg-gradient-to-br ${contact.color} p-3 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="text-white" size={24} />
                      </div>
                      <div>
                        <div className="text-gray-400 text-sm">{contact.label}</div>
                        <div className="text-white font-medium">{contact.value}</div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="bg-gradient-to-br from-yellow-400/10 to-yellow-600/10 p-8 rounded-2xl border border-yellow-400/20">
              <div className="flex items-center mb-4">
                <MapPin className="text-yellow-400 mr-3" size={24} />
                <h3 className="text-xl font-bold">Location</h3>
              </div>
              <div className="space-y-2">
                <p className="text-gray-300 text-lg font-semibold">Kost Putra Bu Yani</p>
                <p className="text-gray-300">Jalan Perjuangan, Jadan, Tamantirto</p>
                <p className="text-gray-300">Kasihan, Bantul, Yogyakarta ID 55183</p>
                <p className="text-gray-400 text-sm mt-2">Sebelah Masjid Jadda Al Aamiin</p>
                <p className="text-gray-400 mt-2">Available for remote collaboration worldwide</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50">
            <h3 className="text-2xl font-bold text-white mb-6">Location Map</h3>
            
            <div className="relative w-full h-96 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.6234567890123!2d110.3294567890123!3d-7.8804567890123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a578bd5b6bc5%3A0x21723fd4d3684f71!2sJl.%20Perjuangan%2C%20Jadan%2C%20Tamantirto%2C%20Kasihan%2C%20Bantul%2C%20Daerah%20Istimewa%20Yogyakarta%2055183!5e0!3m2!1sen!2sid!4v1699999999999!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe>
            </div>
            
            <div className="mt-4 p-4 bg-gray-700/30 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white font-medium">Kost Putra Bu Yani</p>
                  <p className="text-gray-400 text-sm">Jalan Perjuangan, Tamantirto, Kasihan, Bantul</p>
                </div>
                <a
                  href="https://maps.app.goo.gl/KRgmev442KSMZaU18"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-4 py-2 rounded-lg font-medium hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300"
                >
                  View on Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;