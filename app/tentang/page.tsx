'use client';

import { Users, Target, Award, Globe, Clock, Shield, Truck, Building, TrendingUp, Heart, Star, MapPin, Phone, Mail, CheckCircle, MessageSquare } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { Description } from '@radix-ui/react-toast';
import { describe } from 'node:test';

export default function TentangPage() {
  // WhatsApp contact handler
  const handleWhatsAppContact = () => {
    const whatsappNumber = "6285787014195";
    const message = "Halo Indah Express, saya ingin mengetahui lebih lanjut tentang perusahaan dan layanan Anda.";
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const values = [
    {
      icon: <Target className="h-10 w-10 text-orange-600" />,
      title: 'Misi Kami',
      description: 'Menyediakan layanan pengiriman terbaik yang menghubungkan seluruh Indonesia dengan pelayanan prima dan teknologi terdepan untuk mendukung pertumbuhan bisnis pelanggan.'
    },
    {
      icon: <Users className="h-10 w-10 text-orange-600" />,
      title: 'Tim Profesional',
      description: 'Didukung oleh tim yang berpengalaman dan terlatih untuk memberikan pelayanan terbaik kepada setiap pelanggan dengan dedikasi tinggi dan komitmen kualitas.'
    },
    {
      icon: <Award className="h-10 w-10 text-orange-600" />,
      title: 'Kualitas Terjamin',
      description: 'Komitmen terhadap standar kualitas tinggi dalam setiap aspek layanan pengiriman yang kami berikan dengan sertifikasi internasional.'
    },
    {
      icon: <Globe className="h-10 w-10 text-orange-600" />,
      title: 'Jangkauan Luas',
      description: 'Melayani pengiriman ke seluruh pelosok Indonesia dengan jaringan mitra yang terpercaya dan infrastruktur logistik yang modern.'
    }
  ];

  const stats = [
    { icon: <Users className="h-8 w-8 text-white" />, number: '15,000+', label: 'Pelanggan Setia' },
    { icon: <CheckCircle className="h-8 w-8 text-white" />, number: '75,000+', label: 'Paket Terkirim' },
    { icon: <MapPin className="h-8 w-8 text-white" />, number: '500+', label: 'Kota Tujuan' },
    { icon: <Star className="h-8 w-8 text-white" />, number: '99.8%', label: 'Tingkat Kepuasan' }
  ];

  const timeline = [
    {
      year: 'Pendirian Perusahaan',
      title: '',
      description: 'Indah Express Makassar didirikan dengan visi menjadi penyedia layanan logistik terdepan di Indonesia Timur dengan fokus pada pelayanan berkualitas tinggi.',
      innerWidth: 600,
      innerHeight: 400,
      image: '/image1.jpg'
    },
    {
      year: 'Ekspansi Jaringan',
      title: '',
      description: 'Memperluas jaringan ke berbagai kota besar di Sulawesi dan mulai melayani pengiriman antar pulau dengan armada yang lebih besar dan terpercaya.',
      innerWidth: 600,
      innerHeight: 400,
      image: '/image2.jpg'
    },
    {
      year: 'Teknologi Digital',
      title: '',
      description: 'Mengimplementasikan sistem tracking online dan aplikasi mobile untuk kemudahan pelanggan dalam memantau pengiriman secara real-time.',
      innerWidth: 600,
      innerHeight: 400,
      image: '/image3.jpg' 
    },
    {
      year: 'Sertifikasi ISO',
      title: '',
      description: 'Meraih sertifikasi ISO untuk standar kualitas dan keamanan dalam layanan logistik, memperkuat komitmen terhadap excellence.',
      innerWidth: 600,
      innerHeight: 400,
      image: '/image4.jpg' 
    },
    {
      year: 'Jangkauan Nasional',
      title: '',
      description: 'Indah Cargo melayani pengiriman barang, motor, hingga pindahan rumah ke seluruh Indonesia dengan pelayanan ramah, profesional, dan respon cepat.',
      describe: 'Kami menyediakan packing rapi & aman untuk motor maupun barang lainnya, sehingga tiba di tujuan dengan kondisi terbaik.',
      innerWidth: 600,
      innerHeight: 400,
      image: '/image5.png'
    }
  ];

  const leadership = [
    {
      title: 'Direktur Utama',
      experience: '20+ tahun pengalaman di industri logistik',
      description: 'Memimpin visi dan strategi perusahaan untuk menjadi market leader di Indonesia Timur dengan fokus pada inovasi dan pertumbuhan berkelanjutan.',
      icon: <Users className="h-12 w-12 text-white" />
    },
    {
      title: 'Manajer Operasional',
      experience: 'Ahli dalam optimasi rute dan manajemen armada',
      description: 'Memastikan setiap pengiriman berjalan efisien dengan tingkat keakuratan tinggi dan mengoptimalkan operasional untuk kepuasan pelanggan.',
      icon: <Truck className="h-12 w-12 text-white" />
    },
    {
      title: 'Head of Customer Service',
      experience: 'Spesialis dalam kepuasan pelanggan',
      description: 'Mengawasi kualitas pelayanan dan memastikan setiap pelanggan mendapat pengalaman terbaik dengan layanan 24/7 yang responsif.',
      icon: <Shield className="h-12 w-12 text-white" />
    }
  ];

  const achievements = [
    {
      icon: <Award className="h-8 w-8 text-orange-600" />,
      title: 'Penghargaan Best Service Provider',
      year: '2023',
      description: 'Diakui sebagai penyedia layanan logistik terbaik di Indonesia Timur'
    },
    {
      icon: <Star className="h-8 w-8 text-orange-600" />,
      title: 'Sertifikasi ISO',
      year: '2019',
      description: 'Standar internasional untuk sistem manajemen kualitas'
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-orange-600" />,
      title: 'Top Growth Company',
      year: '2022',
      description: 'Pertumbuhan tercepat dalam industri logistik regional'
    },
    {
      icon: <Heart className="h-8 w-8 text-orange-600" />,
      title: 'Customer Choice Award',
      year: '2024',
      description: 'Pilihan pelanggan untuk layanan pengiriman terpercaya'
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
              <div className="mb-8">
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                <span className="text-gray-800">Tentang</span>
                <br />
                <span className="gradient-text">Indah Express</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-xl">
                Sejak didirikan tahun 2009, <span className="font-semibold text-orange-600">Indah Express Makassar</span> 
                telah berkembang menjadi salah satu perusahaan logistik terpercaya di Indonesia Timur dengan 
                dedikasi tinggi dan inovasi berkelanjutan.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button 
                  size="lg" 
                  className="orange-gradient text-white px-8 py-4 text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  onClick={handleWhatsAppContact}
                >
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Hubungi Kami
                </Button>
                <Link href="/layanan">
                <Button variant="outline" size="lg" className="border-2 border-orange-300 text-orange-700 hover:bg-orange-50 px-8 py-4 text-lg font-semibold">
                  Lihat Layanan
                </Button>
                </Link>
              </div>
            </div>

            {/* Company Image - Fixed Implementation */}
            <div className="lg:pl-8">
              <div className="relative">
                <Image 
                  src="/logoindah.png" 
                  alt="Indah Express Company Building" 
                  width={600} 
                  height={400}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="orange-gradient text-white border-0 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.number}</div>
                  <div className="text-sm text-white/90 font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nilai & <span className="gradient-text">Komitmen Kami</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Prinsip-prinsip fundamental yang menjadi landasan dalam setiap aspek operasional dan layanan kami
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-white group">
                <CardContent className="p-8 text-center h-full">
                  <div className="orange-gradient-light p-4 rounded-2xl w-fit mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section - Fixed with proper images */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Perjalanan <span className="gradient-text">Kami</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Milestone penting dalam perjalanan Indah Express menjadi pemimpin industri logistik di Indonesia Timur
            </p>
          </div>
          
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="orange-gradient text-white px-6 py-3 rounded-full font-bold text-xl">
                      {item.year}
                    </div>
                    <div className="h-px bg-orange-300 flex-1"></div>
                  </div>
                  <Card className="border-0 shadow-lg bg-white">
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed text-lg">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Timeline Images - Fixed Implementation */}
                <div className="flex-1 max-w-md">
                  <div className="relative">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover rounded-2xl shadow-lg"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Pencapaian & <span className="gradient-text">Penghargaan</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pengakuan atas dedikasi dan komitmen kami dalam memberikan layanan logistik terbaik
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                <CardContent className="p-6 text-center">
                  <div className="orange-gradient-light p-3 rounded-xl w-fit mx-auto mb-4">
                    {achievement.icon}
                  </div>
                  <div className="text-sm text-orange-600 font-semibold mb-2">{achievement.year}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{achievement.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              <Users className="inline-block mr-3 h-8 w-8 text-orange-600" />
              Tim <span className="gradient-text">Kepemimpinan</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Para pemimpin berpengalaman yang mengarahkan visi dan misi perusahaan menuju masa depan yang gemilang
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-white group">
                <CardContent className="p-8 text-center">
                  <div className="orange-gradient rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    {leader.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{leader.title}</h3>
                  <p className="text-orange-600 font-medium mb-4">{leader.experience}</p>
                  <p className="text-gray-600 leading-relaxed">{leader.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 orange-gradient relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-2xl"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Visi & Misi</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Landasan filosofis yang mengarahkan setiap langkah perjalanan kami menuju keunggulan
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/15 transition-all duration-300">
              <CardHeader className="text-center">
                <Target className="h-12 w-12 text-white mx-auto mb-4" />
                <CardTitle className="text-3xl font-bold text-white">Visi</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-white/90 leading-relaxed text-lg">
                  Menjadi perusahaan logistik terdepan di Indonesia yang menghubungkan semua daerah 
                  dengan layanan berkualitas tinggi dan teknologi modern untuk mendukung kemajuan ekonomi bangsa.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/15 transition-all duration-300">
              <CardHeader className="text-center">
                <Award className="h-12 w-12 text-white mx-auto mb-4" />
                <CardTitle className="text-3xl font-bold text-white">Misi</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-white/90 leading-relaxed text-lg">
                  Memberikan solusi pengiriman terbaik dengan pelayanan ramah, profesional, 
                  dan inovatif untuk mendukung pertumbuhan ekonomi Indonesia melalui konektivitas logistik yang handal.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}