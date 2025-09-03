'use client';

import { useState } from 'react';
import { Search, Package, Truck, MapPin, CheckCircle, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function TrackingPage() {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [trackingData, setTrackingData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Simulated tracking data
  const simulateTracking = () => {
    if (!trackingNumber.trim()) return;
    
    setIsLoading(true);
    
    setTimeout(() => {
      setTrackingData({
        resi: trackingNumber,
        status: 'Dalam Perjalanan',
        estimasi: '2 Januari 2025',
        pengirim: 'Jakarta Pusat',
        penerima: 'Makassar, Sulsel',
        progress: [
          { 
            status: 'Paket Diterima', 
            waktu: '30 Des 2024, 10:00', 
            lokasi: 'Jakarta Pusat',
            completed: true,
            icon: <Package className="h-5 w-5" />
          },
          { 
            status: 'Dalam Proses Sorting', 
            waktu: '30 Des 2024, 14:30', 
            lokasi: 'Hub Jakarta',
            completed: true,
            icon: <Clock className="h-5 w-5" />
          },
          { 
            status: 'Dalam Perjalanan', 
            waktu: '31 Des 2024, 08:00', 
            lokasi: 'Menuju Makassar',
            completed: true,
            icon: <Truck className="h-5 w-5" />
          },
          { 
            status: 'Sampai Hub Tujuan', 
            waktu: '1 Jan 2025, 16:00', 
            lokasi: 'Hub Makassar',
            completed: true,
            icon: <MapPin className="h-5 w-5" />
          },
          { 
            status: 'Dalam Perjalanan Akhir', 
            waktu: '2 Jan 2025, 09:00', 
            lokasi: 'Kurir Delivery',
            completed: false,
            icon: <Truck className="h-5 w-5" />
          },
          { 
            status: 'Paket Diterima', 
            waktu: 'Estimasi: 2 Jan 2025', 
            lokasi: 'Alamat Tujuan',
            completed: false,
            icon: <CheckCircle className="h-5 w-5" />
          }
        ]
      });
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 orange-gradient-light">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold gradient-text mb-6">Lacak Paket Anda</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Pantau status pengiriman paket Anda secara real-time dengan sistem tracking terdepan
          </p>
        </div>
      </section>

      {/* Tracking Form */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <Card className="border-orange-100 shadow-lg bg-white">
            <CardHeader>
              <CardTitle className="text-2xl gradient-text text-center">
                Masukkan Nomor Resi
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4">
                <Input
                  placeholder="Contoh: IE2024123456789"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  className="flex-1 border-orange-200 focus:border-orange-500"
                />
                <Button 
                  onClick={simulateTracking}
                  disabled={isLoading}
                  className="orange-gradient text-white hover:shadow-lg transition-all duration-200"
                >
                  {isLoading ? (
                    <Clock className="h-5 w-5 animate-spin" />
                  ) : (
                    <Search className="h-5 w-5" />
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Tracking Results */}
      {trackingData && (
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Package Info */}
            <Card className="border-orange-100 shadow-lg bg-white mb-8">
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold gradient-text mb-4">Informasi Paket</h3>
                    <div className="space-y-2 text-gray-700">
                      <p><span className="font-medium">Nomor Resi:</span> {trackingData.resi}</p>
                      <p><span className="font-medium">Status:</span> 
                        <span className="ml-2 px-3 py-1 orange-gradient text-white rounded-full text-sm">
                          {trackingData.status}
                        </span>
                      </p>
                      <p><span className="font-medium">Estimasi Tiba:</span> {trackingData.estimasi}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold gradient-text mb-4">Rute Pengiriman</h3>
                    <div className="space-y-2 text-gray-700">
                      <p><span className="font-medium">Dari:</span> {trackingData.pengirim}</p>
                      <p><span className="font-medium">Ke:</span> {trackingData.penerima}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tracking Progress */}
            <Card className="border-orange-100 shadow-lg bg-white">
              <CardHeader>
                <CardTitle className="text-2xl gradient-text">Riwayat Perjalanan</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {trackingData.progress.map((step, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className={`p-3 rounded-full ${step.completed ? 'orange-gradient text-white' : 'bg-gray-200 text-gray-500'}`}>
                        {step.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                          <h4 className={`font-semibold ${step.completed ? 'text-gray-800' : 'text-gray-500'}`}>
                            {step.status}
                          </h4>
                          <span className={`text-sm ${step.completed ? 'text-orange-600' : 'text-gray-400'}`}>
                            {step.waktu}
                          </span>
                        </div>
                        <p className={`text-sm ${step.completed ? 'text-gray-600' : 'text-gray-400'}`}>
                          {step.lokasi}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* Instructions */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center gradient-text mb-12">
            Cara Menggunakan Tracking
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-orange-100 hover:shadow-lg transition-all duration-300 bg-white text-center">
              <CardContent className="p-6">
                <div className="orange-gradient text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold text-lg">1</span>
                </div>
                <h3 className="text-lg font-semibold gradient-text mb-3">Masukkan Nomor Resi</h3>
                <p className="text-gray-600">
                  Masukkan nomor resi yang Anda terima saat mengirim barang
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-orange-100 hover:shadow-lg transition-all duration-300 bg-white text-center">
              <CardContent className="p-6">
                <div className="orange-gradient text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold text-lg">2</span>
                </div>
                <h3 className="text-lg font-semibold gradient-text mb-3">Klik Tombol Cari</h3>
                <p className="text-gray-600">
                  Tekan tombol pencarian untuk mendapatkan informasi terkini paket Anda
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-orange-100 hover:shadow-lg transition-all duration-300 bg-white text-center">
              <CardContent className="p-6">
                <div className="orange-gradient text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold text-lg">3</span>
                </div>
                <h3 className="text-lg font-semibold gradient-text mb-3">Lihat Status</h3>
                <p className="text-gray-600">
                  Dapatkan informasi lengkap tentang lokasi dan status terkini paket Anda
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}