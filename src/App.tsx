import React, { useState } from 'react';
import { MapPin, Phone, Clock, Star, Menu, X, Utensils, Users, Award, Heart } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const products = [
    {
      name: "Sempol Ayam Original",
      description: "Sempol ayam dengan bumbu rahasia yang gurih dan lezat",
      price: "Rp 2.000",
      image: "https://images.pexels.com/photos/5737513/pexels-photo-5737513.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Sempol Ikan Pedas",
      description: "Sempol ikan dengan balutan bumbu pedas yang menggugah selera",
      price: "Rp 2.500",
      image: "https://images.pexels.com/photos/7218637/pexels-photo-7218637.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Sempol Udang Spesial",
      description: "Sempol udang segar dengan tekstur yang lembut dan rasa yang khas",
      price: "Rp 3.000",
      image: "https://images.pexels.com/photos/9609865/pexels-photo-9609865.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Sempol Mix Combo",
      description: "Kombinasi sempol ayam, ikan, dan udang dalam satu paket hemat",
      price: "Rp 7.000",
      image: "https://images.pexels.com/photos/8879325/pexels-photo-8879325.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  const testimonials = [
    {
      name: "Ibu Sari",
      text: "Sempol Endul ini benar-benar enak! Bumbu meresap sempurna dan teksturnya pas. Sudah langganan 2 tahun!",
      rating: 5
    },
    {
      name: "Pak Budi",
      text: "Harga terjangkau tapi rasa premium. Sempol ayamnya juara, anak-anak suka banget!",
      rating: 5
    },
    {
      name: "Mbak Rina",
      text: "Pelayanan ramah, sempol selalu fresh. Lokasi strategis di Kemiri, mudah dijangkau!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Utensils className="h-8 w-8 text-red-600 mr-2" />
              <span className="text-xl font-bold text-gray-800">Sempol Endul</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#beranda" className="text-gray-700 hover:text-red-600 transition-colors duration-200">Beranda</a>
              <a href="#tentang" className="text-gray-700 hover:text-red-600 transition-colors duration-200">Tentang</a>
              <a href="#produk" className="text-gray-700 hover:text-red-600 transition-colors duration-200">Produk</a>
              <a href="#testimoni" className="text-gray-700 hover:text-red-600 transition-colors duration-200">Testimoni</a>
              <a href="#kontak" className="text-gray-700 hover:text-red-600 transition-colors duration-200">Kontak</a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-red-600 transition-colors duration-200"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#beranda" className="block px-3 py-2 text-gray-700 hover:text-red-600 transition-colors duration-200">Beranda</a>
              <a href="#tentang" className="block px-3 py-2 text-gray-700 hover:text-red-600 transition-colors duration-200">Tentang</a>
              <a href="#produk" className="block px-3 py-2 text-gray-700 hover:text-red-600 transition-colors duration-200">Produk</a>
              <a href="#testimoni" className="block px-3 py-2 text-gray-700 hover:text-red-600 transition-colors duration-200">Testimoni</a>
              <a href="#kontak" className="block px-3 py-2 text-gray-700 hover:text-red-600 transition-colors duration-200">Kontak</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="beranda" className="relative bg-gradient-to-br from-red-600 via-orange-500 to-yellow-400 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                <span className="block">UMKM</span>
                <span className="block text-yellow-200">Sempol Endul</span>
              </h1>
              <p className="text-xl sm:text-2xl mb-8 text-red-50 leading-relaxed">
                Sempol lezat dan berkualitas dengan cita rasa autentik Indonesia di Kemiri, Sidoarjo
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#produk" 
                  className="bg-white text-red-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-red-50 transition-all duration-300 transform hover:scale-105 text-center"
                >
                  Lihat Menu
                </a>
                <a 
                  href="#kontak" 
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-red-600 transition-all duration-300 text-center"
                >
                  Hubungi Kami
                </a>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/8879325/pexels-photo-8879325.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Sempol Endul" 
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="font-semibold text-gray-800">4.9/5</span>
                  <span className="text-gray-600">Rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="tentang" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Tentang Sempol Endul</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Usaha keluarga yang telah melayani masyarakat Kemiri dengan sempol berkualitas tinggi sejak 2018
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.pexels.com/photos/5737513/pexels-photo-5737513.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Proses pembuatan sempol" 
                className="rounded-2xl shadow-lg w-full h-80 object-cover"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800">Cerita Kami</h3>
              <p className="text-gray-600 leading-relaxed">
                UMKM Sempol Endul dimulai dari keinginan sederhana untuk menyajikan makanan jalanan Indonesia yang lezat dan terjangkau. 
                Berlokasi strategis di Kemiri, Sidoarjo, kami telah menjadi pilihan favorit masyarakat setempat.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Dengan resep rahasia keluarga dan bahan-bahan segar pilihan, setiap sempol dibuat dengan penuh cinta dan perhatian 
                untuk memberikan pengalaman kuliner yang tak terlupakan.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
                <div className="text-center">
                  <div className="bg-red-100 p-3 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                    <Users className="h-8 w-8 text-red-600" />
                  </div>
                  <h4 className="font-semibold text-gray-800">1000+</h4>
                  <p className="text-gray-600 text-sm">Pelanggan Setia</p>
                </div>
                <div className="text-center">
                  <div className="bg-yellow-100 p-3 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                    <Award className="h-8 w-8 text-yellow-600" />
                  </div>
                  <h4 className="font-semibold text-gray-800">6+</h4>
                  <p className="text-gray-600 text-sm">Tahun Berpengalaman</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 p-3 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                    <Heart className="h-8 w-8 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-gray-800">100%</h4>
                  <p className="text-gray-600 text-sm">Bahan Fresh</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="produk" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Menu Sempol Kami</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Berbagai pilihan sempol segar dengan cita rasa yang menggugah selera
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-red-600">{product.price}</span>
                    <span className="text-sm text-gray-500">per tusuk</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Penawaran Spesial!</h3>
              <p className="text-gray-600 mb-4">Beli 10 sempol, gratis 2 sempol pilihan Anda!</p>
              <div className="flex items-center justify-center space-x-2">
                <Clock className="h-5 w-5 text-yellow-600" />
                <span className="text-sm text-gray-700">Berlaku setiap hari</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimoni" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Kata Pelanggan</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kepuasan pelanggan adalah prioritas utama kami
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-red-600 font-semibold">{testimonial.name.charAt(0)}</span>
                  </div>
                  <span className="font-semibold text-gray-800">{testimonial.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontak" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Hubungi Kami</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Siap melayani Anda dengan sepenuh hati
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Informasi Kontak</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Alamat</h4>
                    <p className="text-gray-600">
                      Jl. Raya Kemiri No. 45<br />
                      Kemiri, Sidoarjo<br />
                      Jawa Timur 61261
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Telepon/WhatsApp</h4>
                    <p className="text-gray-600">+62 812-3456-7890</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Jam Operasional</h4>
                    <div className="space-y-1 text-gray-600">
                      <p>Senin - Jumat: 15.00 - 21.00 WIB</p>
                      <p>Sabtu - Minggu: 14.00 - 22.00 WIB</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Kirim Pesan</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Nama</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                    placeholder="Masukkan nama Anda"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Nomor HP</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                    placeholder="Masukkan nomor HP"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Pesan</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                    placeholder="Tulis pesan Anda..."
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-red-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-700 transition-all duration-200 transform hover:scale-105"
                >
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Utensils className="h-8 w-8 text-red-400 mr-2" />
                <span className="text-xl font-bold">Sempol Endul</span>
              </div>
              <p className="text-gray-300 leading-relaxed">
                UMKM terpercaya yang menyajikan sempol berkualitas tinggi dengan cita rasa autentik Indonesia di Kemiri, Sidoarjo.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Menu Populer</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Sempol Ayam Original</li>
                <li>Sempol Ikan Pedas</li>
                <li>Sempol Udang Spesial</li>
                <li>Sempol Mix Combo</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Kontak Cepat</h4>
              <div className="space-y-2 text-gray-300">
                <p className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  +62 812-3456-7890
                </p>
                <p className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  Kemiri, Sidoarjo
                </p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 UMKM Sempol Endul. Semua hak cipta dilindungi.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;