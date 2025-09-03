'use client';

import { Package, Truck, Ship, Plane, Shield, Clock, MapPin, Users, CheckCircle, Star, ArrowRight, MessageSquare, Phone, Mail } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function LayananPage() {
  // WhatsApp contact function
  const handleWhatsAppContact = (serviceType = '') => {
    // Replace with actual WhatsApp number
    const whatsappNumber = '6285787014195'; // Example: +62 812-3456-7890
    let message = '';
    
    if (serviceType) {
      message = `Halo Indah Express! Saya tertarik dengan layanan ${serviceType}. Mohon informasi lebih lanjut mengenai tarif dan prosedur pengiriman. Terima kasih.`;
    } else {
      message = 'Halo Indah Express! Saya ingin mengetahui informasi layanan pengiriman. Mohon bantuan untuk konsultasi. Terima kasih.';
    }
    
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  const shipmentTypes = [
    {
      icon: <Truck className="h-12 w-12 text-white" />,
      title: 'Ekspedisi Darat',
      description: 'Pengiriman melalui jalur darat dengan armada truk yang handal dan terpercaya untuk seluruh wilayah pulau',
      features: ['Ekonomis dan efisien', 'Cocok untuk barang besar', 'Jangkauan seluruh pulau', 'Tracking real-time'],
      estimasi: '2-5 hari kerja',
      popular: false,
      serviceKey: 'Ekspedisi Darat'
    },
    {
      icon: <Ship className="h-12 w-12 text-white" />,
      title: 'Ekspedisi Laut',
      description: 'Pengiriman antar pulau melalui jalur laut dengan kapal kargo terpercaya dan kapasitas besar',
      features: ['Biaya terjangkau', 'Kapasitas jumbo', 'Aman untuk semua barang', 'Asuransi tersedia'],
      estimasi: '3-7 hari kerja',
      popular: true,
      serviceKey: 'Ekspedisi Laut'
    },
    {
      icon: <Plane className="h-12 w-12 text-white" />,
      title: 'Ekspedisi Udara',
      description: 'Pengiriman express melalui jalur udara untuk kebutuhan mendesak dengan prioritas tinggi',
      features: ['Tercepat', 'Prioritas tinggi', 'Same day delivery', 'Handling khusus'],
      estimasi: '1-2 hari kerja',
      popular: false,
      serviceKey: 'Ekspedisi Udara'
    }
  ];

  const additionalServices = [
    {
      icon: <Package className="h-10 w-10 text-orange-600" />,
      title: 'Packing Professional',
      description: 'Layanan pengemasan barang dengan standar internasional untuk memastikan keamanan selama perjalanan dengan material berkualitas tinggi.'
    },
    {
      icon: <Shield className="h-10 w-10 text-orange-600" />,
      title: 'Asuransi Pengiriman',
      description: 'Perlindungan asuransi untuk barang berharga Anda dengan coverage hingga 100% nilai barang dan proses klaim yang mudah.'
    },
    {
      icon: <Clock className="h-10 w-10 text-orange-600" />,
      title: 'Layanan 24/7',
      description: 'Customer service yang siaga 24 jam untuk membantu setiap kebutuhan pengiriman Anda dengan respon cepat dan solutif.'
    },
    {
      icon: <Users className="h-10 w-10 text-orange-600" />,
      title: 'Dedicated Account',
      description: 'Account manager khusus untuk perusahaan dengan volume pengiriman besar dan reguler dengan layanan prioritas.'
    }
  ];

  const coverageAreas = [
    { name: 'Sulawesi Selatan', cities: 24, routes: 'Aktif' },
    { name: 'Sulawesi Tengah', cities: 13, routes: 'Aktif' },
    { name: 'Sulawesi Utara', cities: 15, routes: 'Aktif' },
    { name: 'Sulawesi Tenggara', cities: 17, routes: 'Aktif' },
    { name: 'Gorontalo', cities: 6, routes: 'Aktif' },
    { name: 'Sulawesi Barat', cities: 8, routes: 'Aktif' }
  ];

  const advantages = [
    {
      icon: <CheckCircle className="h-8 w-8 text-orange-600" />,
      title: 'Jemput Gratis',
      description: 'Layanan pickup di lokasi Anda tanpa biaya tambahan'
    },
    {
      icon: <Shield className="h-8 w-8 text-orange-600" />,
      title: 'Garansi Keamanan',
      description: 'Jaminan keamanan barang hingga 100%'
    },
    {
      icon: <Clock className="h-8 w-8 text-orange-600" />,
      title: 'On-Time Delivery',
      description: 'Komitmen ketepatan waktu dengan tingkat akurasi 99.8%'
    },
    {
      icon: <Star className="h-8 w-8 text-orange-600" />,
      title: 'Rating Terbaik',
      description: 'Rating 4.9/5 dari lebih dari 15,000 pelanggan'
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

        <div className="relative max-w-7xl mx-auto text-center py-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Layanan <span className="gradient-text">Pengiriman</span>
            <br />
            <span className="text-gray-800">Terpercaya</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Solusi lengkap pengiriman untuk semua kebutuhan logistik Anda dengan berbagai pilihan 
            jalur pengiriman yang disesuaikan dengan budget dan timeline bisnis Anda.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">500+</div>
              <div className="text-gray-600">Kota Terjangkau</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">99.8%</div>
              <div className="text-gray-600">On-Time Delivery</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">24/7</div>
              <div className="text-gray-600">Customer Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">15+</div>
              <div className="text-gray-600">Tahun Pengalaman</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Pilihan <span className="gradient-text">Jalur Pengiriman</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tiga pilihan utama jalur pengiriman dengan keunggulan masing-masing untuk memenuhi berbagai kebutuhan bisnis Anda
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {shipmentTypes.map((type, index) => (
              <Card key={index} className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-white relative ${type.popular ? 'ring-2 ring-orange-500' : ''}`}>
                {type.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Paling Populer
                    </span>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className="orange-gradient p-4 rounded-2xl w-fit mx-auto mb-6">
                    {type.icon}
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">{type.title}</CardTitle>
                </CardHeader>
                
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-6 leading-relaxed">{type.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {type.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-orange-600 flex-shrink-0" />
                        <span className="text-gray-700 text-left">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* <div className="bg-orange-50 p-4 rounded-lg mb-6">
                    <div className="text-2xl font-bold text-orange-600 mb-1">{type.price}</div>
                    <p className="text-sm text-gray-700 font-medium">
                      Estimasi: <span className="font-bold">{type.estimasi}</span>
                    </p>
                  </div> */}
                  
                  <Button 
                    onClick={() => handleWhatsAppContact(type.serviceKey)}
                    className="w-full orange-gradient text-white hover:shadow-lg transition-all duration-200 font-semibold"
                  >
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Pilih Layanan
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Area */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              <MapPin className="inline-block mr-3 h-8 w-8 text-orange-600" />
              Jangkauan <span className="gradient-text">Layanan</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Melayani pengiriman ke seluruh wilayah Indonesia Timur dengan jaringan yang luas dan terpercaya
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coverageAreas.map((area, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{area.name}</h3>
                    <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                      {area.routes}
                    </span>
                  </div>
                  <p className="text-gray-600 text-lg">
                    <span className="font-bold text-orange-600">{area.cities}</span> Kota Terjangkau
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Layanan <span className="gradient-text">Tambahan</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Paket layanan ekstra yang dirancang khusus untuk memberikan nilai tambah dalam setiap pengiriman Anda
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-white group">
                <CardContent className="p-8 text-center h-full">
                  <div className="orange-gradient-light p-4 rounded-2xl w-fit mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Mengapa Memilih <span className="gradient-text">Indah Express?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Keunggulan kompetitif yang membuat kami menjadi pilihan utama untuk kebutuhan logistik Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                <CardContent className="p-6 text-center">
                  <div className="orange-gradient-light p-3 rounded-xl w-fit mx-auto mb-4">
                    {advantage.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{advantage.title}</h3>
                  <p className="text-gray-600 text-sm">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
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
            Siap Memulai Pengiriman?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Tim ahli kami siap membantu Anda memilih layanan pengiriman yang paling sesuai 
            dengan kebutuhan dan budget bisnis Anda. Dapatkan konsultasi gratis sekarang!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary" 
              onClick={() => handleWhatsAppContact()}
              className="px-8 py-4 text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Phone className="mr-2 h-5 w-5" />
              Hubungi Sekarang
            </Button>
            <Button 
              size="lg" 
              variant="secondary" 
              onClick={() => handleWhatsAppContact()}
              className="px-8 py-4 text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              Kontak WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}