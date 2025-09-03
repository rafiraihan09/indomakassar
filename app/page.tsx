'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Package, Clock, Shield, MapPin, Phone, Mail, CheckCircle, ArrowRight, Play, Star, Users, Truck, Globe, Award, DollarSign, Calculator, Calendar, MessageSquare, HeadphonesIcon, Target, TrendingUp, Zap, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

export default function Home() {
  const [currentText, setCurrentText] = useState('');
  const fullText = 'Mitra Terpercaya Pengiriman Ke Seluruh Indonesia';

  // WhatsApp and Phone handlers

  // aku sayang kok sama alfiah pebrianti bangatttt

  
  const handleWhatsAppContact = (serviceType = '') => {
    const whatsappNumber = "6285787014195";
    let message = '';
    
    if (serviceType) {
      message = `Halo Indah Express! Saya tertarik dengan layanan ${serviceType}. Mohon informasi lebih lanjut mengenai tarif dan prosedur pengiriman. Terima kasih.`;
    } else {
      message = "Halo Indah Express, saya tertarik dengan layanan pengiriman.";
    }
    
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handlePhoneContact = () => {
    window.open('tel:+6285787014195', '_self');
  };

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setCurrentText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 80);

    return () => clearInterval(timer);
  }, []);

  const features = [
    {
      icon: <Package className="h-10 w-10 text-orange-600" />,
      title: 'Pelayanan Ramah & Profesional',
      description: 'Tim kami selalu siap melayani dengan senyum, keramahan, dan sikap profesional sehingga Anda merasa nyaman dan aman dalam setiap transaksi.'
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-orange-600" />,
      title: 'Jemput Gratis',
      description: 'Tidak perlu repot mengantar barang ke kantor cabang. Nikmati layanan jemput barang gratis dari lokasi Anda, sehingga proses pengiriman lebih mudah dan praktis.'
    },
    {
      icon: <Clock className="h-10 w-10 text-orange-600" />,
      title: 'Respon Cepat',
      description: 'Kami memahami bahwa waktu adalah hal berharga. Karena itu, setiap pertanyaan dan permintaan Anda akan kami tanggapi dengan cepat dan solutif.'
    },
    {
      icon: <Shield className="h-10 w-10 text-orange-600" />,
      title: 'Jaringan Luas & Terpercaya',
      description: 'Dengan jaringan pengiriman yang luas, barang Anda dapat sampai ke berbagai daerah di Indonesia dengan aman, tepat waktu, dan terjamin.'
    }
  ];

  const stats = [
    { icon: <Users className="h-8 w-8 text-white" />, number: '15,000+', label: 'Pelanggan Setia' },
    { icon: <Package className="h-8 w-8 text-white" />, number: '75,000+', label: 'Paket Terkirim' },
    { icon: <MapPin className="h-8 w-8 text-white" />, number: '500+', label: 'Kota Terjangkau' },
    { icon: <Truck className="h-8 w-8 text-white" />, number: '99.8%', label: 'Tingkat Keberhasilan' },
  ];

  const services = [
    {
      icon: <Truck className="h-12 w-12 text-white" />,
      title: 'Ekspedisi Darat',
      description: 'Pengiriman ekonomis untuk paket besar dan berat ke seluruh pulau dengan armada terpercaya',
      features: ['Kapasitas besar', 'Harga ekonomis', 'Tracking real-time'],
      serviceKey: 'Ekspedisi Darat'
    },
    {
      icon: <Package className="h-12 w-12 text-white" />,
      title: 'Ekspedisi Laut',
      description: 'Solusi pengiriman antar pulau dengan kapasitas besar dan aman untuk semua jenis barang',
      features: ['Antar pulau', 'Kapasitas jumbo', 'Asuransi tersedia'],
      serviceKey: 'Ekspedisi Laut'
    },
    {
      icon: <Zap className="h-12 w-12 text-white" />,
      title: 'Express Delivery',
      description: 'Pengiriman cepat same-day dan next-day delivery untuk kebutuhan mendesak',
      features: ['Same day', 'Next day', 'Priority handling'],
      serviceKey: 'Express Delivery'
    }
  ];

  const testimonials = [
    {
      name: 'Andi Pratama',
      company: 'PT Maju Bersama',
      rating: 5,
      text: 'Pelayanan Indah Express sangat memuaskan. Paket selalu sampai tepat waktu dan dalam kondisi baik. Tim customer service juga sangat responsif.'
    },
    {
      name: 'Sari Dewi',
      company: 'Toko Online Berkah',
      rating: 5,
      text: 'Sudah 2 tahun menggunakan Indah Express untuk toko online saya. Tarif kompetitif dan pelayanan jemput gratis sangat membantu bisnis saya.'
    },
    {
      name: 'Muhammad Rizki',
      company: 'CV Sukses Mandiri',
      rating: 5,
      text: 'Pengiriman ke luar pulau sangat terpercaya. Barang industri yang berat dan besar selalu ditangani dengan profesional.'
    }
  ];

  const coverage = [
    { region: 'Sulawesi Selatan', cities: 24, },
    { region: 'Sulawesi Tengah', cities: 13, },
    { region: 'Sulawesi Utara', cities: 15, },
    { region: 'Sulawesi Tenggara', cities: 17, },
    { region: 'Gorontalo', cities: 6, },
    { region: 'Sulawesi Barat', cities: 8, }
  ];

  const whyChoose = [
    {
      icon: <Award className="h-8 w-8 text-orange-600" />,
      title: 'Berpengalaman 15+ Tahun',
      description: 'Pengalaman panjang dalam industri logistik di Indonesia Timur'
    },
    {
      icon: <Globe className="h-8 w-8 text-orange-600" />,
      title: 'Jaringan Nasional',
      description: 'Menjangkau lebih dari 500 kota di seluruh Indonesia'
    },
    {
      icon: <DollarSign className="h-8 w-8 text-orange-600" />,
      title: 'Tarif Kompetitif',
      description: 'Harga terjangkau dengan kualitas pelayanan premium'
    },
    {
      icon: <HeadphonesIcon className="h-8 w-8 text-orange-600" />,
      title: 'Customer Service 24/7',
      description: 'Tim support siap membantu Anda kapan saja'
    },
    {
      icon: <Target className="h-8 w-8 text-orange-600" />,
      title: 'On-Time Delivery',
      description: 'Komitmen pengiriman tepat waktu dengan tingkat akurasi 99.8%'
    },
    {
      icon: <Shield className="h-8 w-8 text-orange-600" />,
      title: 'Asuransi Barang',
      description: 'Perlindungan menyeluruh untuk barang berharga Anda'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Centered Large Logo */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-screen flex items-center">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-orange-50/30"></div>
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-orange-300/10 rounded-full blur-2xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto w-full">
          <div className="text-center mb-16">
    
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <div className="text-left">
              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                <span className="text-gray-800">Mitra Terpercaya</span>
                <br />
                <span className="gradient-text">Pengiriman</span>
                <br />
                <span className="text-gray-800">Ke Seluruh Indonesia</span>
              </h1>
              
              {/* Description */}
              <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-xl">
                Selamat datang di <span className="font-semibold text-orange-600">Indah Express</span>, 
                mitra terpercaya Anda dalam layanan pengiriman barang ke seluruh Indonesia dengan 
                pelayanan ramah, profesional, dan cepat.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button 
                  size="lg" 
                  className="orange-gradient text-white px-8 py-4 text-lg font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-0"
                  onClick={() => handleWhatsAppContact()}
                >
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Mulai Pengiriman
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-6 text-gray-500">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-sm font-medium">Jemput Gratis</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-sm font-medium">Respon Cepat</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-sm font-medium">Pelayanan 24/7</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-sm font-medium">Jaringan Nasional</span>
                </div>
              </div>
            </div>

            {/* Right Content - Stats Cards */}
            <div className="lg:pl-8">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <Card key={index} className="orange-gradient text-white border-0 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <CardContent className="p-6 text-center">
                      <div className="mb-4 flex justify-center">
                        {stat.icon}
                      </div>
                      <div className="text-2xl font-bold mb-2">{stat.number}</div>
                      <div className="text-sm text-white/90">{stat.label}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Layanan <span className="gradient-text">Pengiriman</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pilihan layanan lengkap untuk semua kebutuhan pengiriman Anda dengan jaminan kualitas terbaik
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-white group">
                <CardContent className="p-8">
                  <div className="orange-gradient p-4 rounded-2xl w-fit mx-auto mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{service.title}</h3>
                  <p className="text-gray-600 mb-6 text-center">{service.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-orange-600" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                
                  
                  <Button 
                    onClick={() => handleWhatsAppContact(service.serviceKey)}
                    className="w-full orange-gradient text-white hover:shadow-lg transition-all duration-200"
                  >
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Pilih Layanan
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Mengapa Memilih <span className="gradient-text">Indah Express?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kami berkomitmen memberikan layanan terbaik dengan keunggulan yang membedakan kami dari yang lain.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-white group">
                <CardContent className="p-8 text-center h-full">
                  <div className="orange-gradient-light p-4 rounded-2xl w-fit mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Extended */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Keunggulan Kompetitif Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Faktor-faktor yang membuat Indah Express menjadi pilihan utama pelanggan di seluruh Indonesia
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChoose.map((item, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white p-6">
                <div className="flex items-start space-x-4">
                  <div className="orange-gradient-light p-3 rounded-xl">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      
      {/* Process Steps */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              <FileText className="inline-block mr-3 h-8 w-8 text-orange-600" />
              Cara Mudah Mengirim
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proses pengiriman yang simpel dan efisien dalam 4 langkah mudah
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Hubungi Kami', desc: 'Telepon atau WhatsApp untuk konsultasi dan booking pickup', icon: <Phone className="h-8 w-8" /> },
              { step: '02', title: 'Packing & Pickup', desc: 'Tim kami datang untuk mengambil barang di lokasi Anda', icon: <Package className="h-8 w-8" /> },
              { step: '03', title: 'Proses Pengiriman', desc: 'Barang diproses dan dikirim sesuai rute terbaik', icon: <Truck className="h-8 w-8" /> },
              { step: '04', title: 'Barang Sampai', desc: 'Penerima mendapat barang dengan konfirmasi delivery', icon: <CheckCircle className="h-8 w-8" /> }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="orange-gradient text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    {process.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 bg-orange-600 text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center">
                    {process.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{process.title}</h3>
                <p className="text-gray-600">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 orange-gradient relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-2xl"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Siap Mengirim Paket Anda?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Tim ahli kami siap membantu Anda 24/7. Dapatkan konsultasi gratis dan penawaran terbaik untuk kebutuhan pengiriman Anda.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary" 
              className="px-8 py-4 text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={handlePhoneContact}
            >
              <Phone className="mr-2 h-5 w-5" />
              Hubungi Sekarang
            </Button>
            <Button 
              size="lg" 
              variant="secondary" 
              className="px-8 py-4 text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={() => handleWhatsAppContact()}
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              Konsultasi Gratis
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Pertanyaan yang Sering Ditanyakan
            </h2>
            <p className="text-xl text-gray-600">
              Temukan jawaban untuk pertanyaan umum seputar layanan pengiriman kami
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: 'Apakah ada layanan jemput barang gratis?',
                answer: 'Ya, kami menyediakan layanan jemput barang gratis di wilayah Makassar dan sekitarnya. Untuk wilayah lain, silakan konsultasi dengan tim customer service kami.'
              },
              {
                question: 'Berapa lama estimasi pengiriman ke luar pulau?',
                answer: 'Estimasi pengiriman bervariasi tergantung tujuan: Jawa (3-5 hari), Kalimantan (4-6 hari), Sumatera (5-7 hari), Papua (7-10 hari). Waktu dapat berubah tergantung kondisi cuaca dan transportasi.'
              },
              {
                question: 'Apakah barang saya diasuransikan?',
                answer: 'Kami menyediakan pilihan asuransi untuk barang berharga. Asuransi dapat ditambahkan dengan biaya tambahan sesuai dengan nilai barang yang dikirim.'
              },
              {
                question: 'Bagaimana cara melacak status pengiriman?',
                answer: 'Anda akan mendapat nomor resi yang dapat digunakan untuk tracking melalui website kami atau WhatsApp. Update status akan dikirim secara real-time.'
              },
              {
                question: 'Apa saja jenis barang yang tidak boleh dikirim?',
                answer: 'Barang terlarang meliputi: bahan peledak, cairan mudah terbakar, narkoba, senjata, makanan mudah busuk tanpa pengawet, dan barang ilegal lainnya sesuai peraturan.'
              },
              {
                question: 'Apakah ada diskon untuk pengiriman reguler/dalam jumlah banyak?',
                answer: 'Ya, kami memberikan harga khusus untuk pelanggan korporat dan pengiriman rutin. Silakan hubungi tim sales kami untuk penawaran terbaik.'
              }
            ].map((faq, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="orange-gradient text-white px-8 py-3 text-lg font-semibold hover:shadow-lg transition-all duration-200"
              onClick={() => handleWhatsAppContact()}
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              Punya Pertanyaan Lain?
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Hubungi Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tim customer service kami siap membantu Anda 24/7 melalui berbagai saluran komunikasi
            </p>
          </div>
        </div>

          <div className="flex justify-center">
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl">
              {[
                {
                  icon: <Phone className="h-8 w-8 text-orange-600" />,
                  title: 'Telepon',
                  info: '+6285787014195',
                  subtitle: '24 Jam Setiap Hari'
                },
                {
                  icon: <MessageSquare className="h-8 w-8 text-orange-600" />,
                  title: 'WhatsApp',
                  info: '+6285787014195',
                  subtitle: 'Chat Langsung'
                },
                {
                  icon: <MapPin className="h-8 w-8 text-orange-600" />,
                  title: 'Alamat Kantor',
                  info: 'Indah Express BTP, Jl Keindahan AA, Biringkanaya',
                  subtitle: 'Makassar, Sulawesi Selatan'
                }
              ].map((contact, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white text-center">
                <CardContent className="p-8">
                  <div className="orange-gradient-light p-4 rounded-2xl w-fit mx-auto mb-4">
                    {contact.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{contact.title}</h3>
                  <p className="text-gray-800 font-medium mb-1">{contact.info}</p>
                  <p className="text-gray-500 text-sm">{contact.subtitle}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            <div className="lg:col-span-2">
              
              <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
                Mitra terpercaya untuk layanan pengiriman barang ke seluruh Indonesia 
                dengan pelayanan ramah, profesional, dan cepat sejak 2009.
              </p>
              
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-orange-400 text-orange-400" />
                ))}
                <span className="text-gray-300 ml-2">4.9/5 dari 2000+ ulasan</span>
              </div>
            </div>
            
            <div>
              <h4 className="text-gray-300 hover:text-orange-400 transition-colors duration-200">Layanan</h4>
              <ul className="space-y-3">
                <li><Link href="/layanan" className="text-gray-300 hover:text-orange-400 transition-colors duration-200">Ekspedisi Darat</Link></li>
                <li><Link href="/layanan" className="text-gray-300 hover:text-orange-400 transition-colors duration-200">Ekspedisi Laut</Link></li>
                <li><Link href="/layanan" className="text-gray-300 hover:text-orange-400 transition-colors duration-200">Express Delivery</Link></li>
                <li><Link href="/layanan" className="text-gray-300 hover:text-orange-400 transition-colors duration-200">Cargo Khusus</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-6">Perusahaan</h4>
              <ul className="space-y-3">
                <li><Link href="/tentang" className="text-gray-300 hover:text-orange-400 transition-colors duration-200">Tentang Kami</Link></li>
                <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors duration-200">Karir</a></li>
                <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors duration-200">Berita</a></li>
                <li><Link href="/kontak" className="text-gray-300 hover:text-orange-400 transition-colors duration-200">Kontak</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              &copy; 2025 Indah Express Makassar. Semua hak dilindungi.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-200">Syarat & Ketentuan</a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-200">Kebijakan Privasi</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}