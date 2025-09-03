'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, Users, CheckCircle, Star, ArrowRight, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function KontakPage() {
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    telepon: '',
    pesan: ''
  });

  // WhatsApp and Phone handlers
  const handleWhatsAppContact = () => {
    const whatsappNumber = "6285787014195"; // Your actual WhatsApp Business number
    const message = "Halo Indah Express, saya ingin konsultasi pengiriman.";
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handlePhoneContact = () => {
    window.open('tel:+6285787014195', '_self'); // Your actual phone number
  };

  const handleWhatsAppConsultation = () => {
    const whatsappNumber = "6285787014195";
    const message = "Halo Indah Express, saya ingin jadwalkan konsultasi gratis.";
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    alert('Pesan Anda telah terkirim! Tim kami akan menghubungi Anda segera.');
    setFormData({ nama: '', email: '', telepon: '', pesan: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="h-8 w-8 text-orange-600" />,
      title: 'Telepon',
      content: '+6285787014195',
      subtitle: '24 Jam Setiap Hari',
      description: 'Layanan customer service yang siap membantu kapan saja',
      action: handlePhoneContact
    },
    {
      icon: <MapPin className="h-8 w-8 text-orange-600" />,
      title: 'Alamat Kantor',
      content: 'Indah Express BTP, Jl Keindahan AA, Biringkanaya',
      subtitle: 'Makassar, Sulawesi Selatan',
      description: 'Kunjungi kantor pusat kami untuk konsultasi langsung',
      action: () => window.open('https://maps.app.goo.gl/rS2W2C1WgLmcfHn86', '_blank')
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-orange-600" />,
      title: 'WhatsApp',
      content: '+6285787014195',
      subtitle: 'Chat Langsung',
      description: 'Respon cepat melalui WhatsApp business kami',
      action: handleWhatsAppContact
    }
  ];
 
  const operationalHours = [
    { hari: 'Senin - Jumat', jam: '08:00 - 18:00', layanan: 'Full Service', icon: <CheckCircle className="h-5 w-5 text-green-600" /> },
    { hari: 'Sabtu', jam: '08:00 - 18:00', layanan: 'Full Service', icon: <CheckCircle className="h-5 w-5 text-green-600 " /> },
    { hari: 'Minggu', jam: '08:00 - 15:00', layanan: 'Service Terbatas', icon: <CheckCircle className="h-5 w-5 text-red-600" /> },
  ];

  const cabangOffices = [
    {
      nama: 'Kantor Pusat Indah Express Makassar',
      alamat: 'Indah Express BTP, Jalan Keindahan AA No.123, Makassar, Sulawesi Selatan 90231',
      telepon: '+6285787014195',
      jam: 'Sen-Jum: 08:00-18:00, Sab: 08:00-15:00',
      status: 'Pusat',
      layanan: 'Semua Layanan'
    },
  ];

  const stats = [
    { icon: <Users className="h-8 w-8 text-white" />, number: '24/7', label: 'Customer Support' },
    { icon: <MessageSquare className="h-8 w-8 text-white" />, number: '< 2 Jam', label: 'Response Time' },
    { icon: <Star className="h-8 w-8 text-white" />, number: '4.9/5', label: 'Rating Pelayanan' },
    { icon: <CheckCircle className="h-8 w-8 text-white" />, number: '99%', label: 'Kepuasan Pelanggan' }
  ];

  const whyContactUs = [
    {
      icon: <Phone className="h-8 w-8 text-orange-600" />,
      title: 'Tim Profesional',
      description: 'Customer service berpengalaman dan terlatih'
    },
    {
      icon: <Clock className="h-8 w-8 text-orange-600" />,
      title: 'Respon Cepat',
      description: 'Tanggapan dalam hitungan menit, bukan jam'
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-orange-600" />,
      title: 'Solusi Terpadu',
      description: 'Bantuan komprehensif untuk semua kebutuhan'
    },
    {
      icon: <Star className="h-8 w-8 text-orange-600" />,
      title: 'Kepuasan Terjamin',
      description: 'Komitmen kepuasan pelanggan 100%'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-orange-50/30"></div>
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-orange-300/10 rounded-full blur-2xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              {/* Logo */}
              <div className="mb-10">
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                <span className="text-gray-800">Hubungi</span>
                <br />
                <span className="gradient-text">Tim Kami</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-xl">
                Tim customer service profesional kami siap membantu Anda 24/7. Dapatkan konsultasi gratis 
                dan solusi terbaik untuk kebutuhan pengiriman Anda.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button 
                  size="lg" 
                  className="orange-gradient text-white px-8 py-4 text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  onClick={handlePhoneContact}
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Hubungi Sekarang
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-orange-300 text-orange-700 hover:bg-orange-50 px-8 py-4 text-lg font-semibold"
                  onClick={handleWhatsAppContact}
                >
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Chat WhatsApp
                </Button>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="lg:pl-8">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <Card key={index} className="orange-gradient text-white border-0 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <CardContent className="p-6 text-center">
                      <div className="mb-4 flex justify-center">
                        {stat.icon}
                      </div>
                      <div className="text-2xl font-bold mb-2">{stat.number}</div>
                      <div className="text-sm text-white/90 font-medium">{stat.label}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Cara <span className="gradient-text">Menghubungi Kami</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Berbagai saluran komunikasi untuk kemudahan Anda dalam menghubungi tim support kami
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {contactInfo.map((info, index) => (
              <Card 
                key={index} 
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-white group cursor-pointer"
                onClick={info.action}
              >
                <CardContent className="p-8 text-center h-full">
                  <div className="orange-gradient-light p-4 rounded-2xl w-fit mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    {info.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{info.title}</h3>
                  <p className="text-orange-600 font-semibold mb-2">{info.content}</p>
                  <p className="text-gray-600 font-medium mb-3">{info.subtitle}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Contact Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Mengapa Memilih <span className="gradient-text">Support Kami?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Keunggulan layanan customer service yang membedakan kami dari yang lain
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyContactUs.map((item, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                <CardContent className="p-6 text-center">
                  <div className="orange-gradient-light p-3 rounded-xl w-fit mx-auto mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Office Info */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Kirim <span className="gradient-text">Pesan</span>
                </h2>
                <p className="text-lg text-gray-600">
                  Isi form di bawah ini dan tim kami akan merespon dalam waktu kurang dari 2 jam
                </p>
              </div>

              <Card className="border-0 shadow-lg bg-white">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        Nama Lengkap *
                      </label>
                      <Input
                        name="nama"
                        value={formData.nama}
                        onChange={handleChange}
                        placeholder="Masukkan nama lengkap Anda"
                        required
                        className="border-gray-300 focus:border-orange-500 focus:ring-orange-500 h-12"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        Email *
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="nama@email.com"
                        required
                        className="border-gray-300 focus:border-orange-500 focus:ring-orange-500 h-12"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        Nomor Telepon *
                      </label>
                      <Input
                        type="tel"
                        name="telepon"
                        value={formData.telepon}
                        onChange={handleChange}
                        placeholder="+62 8XX-XXXX-XXXX"
                        required
                        className="border-gray-300 focus:border-orange-500 focus:ring-orange-500 h-12"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        Pesan *
                      </label>
                      <Textarea
                        name="pesan"
                        value={formData.pesan}
                        onChange={handleChange}
                        placeholder="Tuliskan pertanyaan atau kebutuhan pengiriman Anda..."
                        rows={5}
                        required
                        className="border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                      />
                    </div>
                    
                    <Button type="submit" className="w-full orange-gradient text-white hover:shadow-lg transition-all duration-200 h-12 text-lg font-semibold">
                      <Send className="h-5 w-5 mr-2" />
                      Kirim Pesan
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Office Information */}
            <div className="space-y-8">
              {/* Operational Hours */}
              <Card className="border-0 shadow-lg bg-white">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                    <Clock className="mr-3 h-6 w-6 text-orange-600" />
                    Jam Operasional
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {operationalHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center py-4 border-b border-gray-100 last:border-b-0">
                        <div className="flex items-center space-x-3">
                          {schedule.icon}
                          <div>
                            <p className="font-semibold text-gray-800">{schedule.hari}</p>
                            <p className="text-sm text-gray-600">{schedule.layanan}</p>
                          </div>
                        </div>
                        <p className="text-orange-600 font-bold text-lg">{schedule.jam}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Branch Offices */}
              <Card className="border-0 shadow-lg bg-white">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                    <MapPin className="mr-3 h-6 w-6 text-orange-600" />
                    Kantor Cabang
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {cabangOffices.map((cabang, index) => (
                      <Card key={index} className="border border-orange-100 bg-orange-50/30">
                        <CardContent className="p-6">
                          <div className="flex justify-between items-start mb-4">
                            <h4 className="font-bold text-gray-800 text-lg">{cabang.nama}</h4>
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                              cabang.status === 'Pusat' 
                                ? 'bg-orange-100 text-orange-800' 
                                : 'bg-blue-100 text-blue-800'
                            }`}>
                              {cabang.status}
                            </span>
                          </div>
                          <div className="space-y-2 text-sm">
                            <p className="flex items-center text-gray-700">
                              <MapPin className="h-4 w-4 mr-2 text-orange-600" />
                              {cabang.alamat}
                            </p>
                            <p className="flex items-center text-gray-700">
                              <Phone className="h-4 w-4 mr-2 text-orange-600" />
                              {cabang.telepon}
                            </p>
                            <p className="flex items-center text-gray-700">
                              <Clock className="h-4 w-4 mr-2 text-orange-600" />
                              {cabang.jam}
                            </p>
                            <p className="flex items-center text-gray-700">
                              <CheckCircle className="h-4 w-4 mr-2 text-orange-600" />
                              {cabang.layanan}
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 orange-gradient relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-2xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Siap Untuk Memulai?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Hubungi tim kami sekarang untuk mendapatkan penawaran terbaik dan konsultasi gratis 
            sesuai kebutuhan pengiriman Anda. Dapatkan solusi logistik terpercaya hari ini!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary" 
              className="px-8 py-4 text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={handlePhoneContact}
            >
              <Phone className="h-5 w-5 mr-2" />
              Hubungi Sekarang
            </Button>
            <Button 
              size="lg" 
              variant="secondary" 
              className="px-8 py-4 text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={handleWhatsAppConsultation}
            >
              <Calendar className="h-5 w-5 mr-2" />
              Jadwalkan Konsultasi
            </Button>
            <Button
              size="lg"
              variant="secondary"
              className="px-8 py-4 text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={handleWhatsAppContact}
            >
              <MessageSquare className="h-5 w-5 mr-2" />
              Chat WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}