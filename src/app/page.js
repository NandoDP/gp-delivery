'use client';
import React, { useState } from 'react';
import { Package, Truck, MapPin, Clock, Phone, Mail, CheckCircle, ArrowRight } from 'lucide-react';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    pickup: '',
    delivery: '',
    packageType: 'standard'
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Truck className="h-8 w-8 text-indigo-600" />
              <h1 className="text-2xl font-bold text-gray-900">GP Delivery</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#services" className="text-gray-700 hover:text-indigo-600 transition">Services</a>
              <a href="#tracking" className="text-gray-700 hover:text-indigo-600 transition">Suivi</a>
              <a href="#contact" className="text-gray-700 hover:text-indigo-600 transition">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Livraison Rapide et Fiable
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Votre partenaire de confiance pour tous vos besoins de livraison au Sénégal
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center transform hover:scale-105 transition">
            <div className="bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Clock className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Livraison Express</h3>
            <p className="text-gray-600">Livraison en 24h dans toute la région de Dakar</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-center transform hover:scale-105 transition">
            <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Suivi en Temps Réel</h3>
            <p className="text-gray-600">Suivez votre colis à chaque étape de la livraison</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-center transform hover:scale-105 transition">
            <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Package className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Colis Sécurisés</h3>
            <p className="text-gray-600">Garantie de sécurité pour tous vos envois</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Demander une Livraison
          </h3>
          
          {submitted && (
            <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4 flex items-center">
              <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
              <span className="text-green-800 font-medium">
                Demande envoyée avec succès! Nous vous contacterons bientôt.
              </span>
            </div>
          )}

          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nom Complet
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Téléphone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="+221 XX XXX XX XX"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Adresse de Ramassage
              </label>
              <input
                type="text"
                name="pickup"
                value={formData.pickup}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="Pikine, Dakar, SN"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Adresse de Livraison
              </label>
              <input
                type="text"
                name="delivery"
                value={formData.delivery}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="Adresse de destination"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Type de Colis
              </label>
              <select
                name="packageType"
                value={formData.packageType}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              >
                <option value="standard">Standard (0-5kg)</option>
                <option value="express">Express (0-5kg)</option>
                <option value="large">Grand Colis (5-20kg)</option>
                <option value="fragile">Fragile</option>
              </select>
            </div>

            <button
              onClick={handleSubmit}
              className="w-full bg-indigo-600 text-white font-semibold py-4 rounded-lg hover:bg-indigo-700 transition flex items-center justify-center space-x-2"
            >
              <span>Commander maintenant</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div id="contact" className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Contactez-nous
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-center space-x-4">
              <div className="bg-indigo-100 rounded-full p-3">
                <Phone className="h-6 w-6 text-indigo-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Téléphone</p>
                <p className="text-gray-600">+221 33 XXX XX XX</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-indigo-100 rounded-full p-3">
                <Mail className="h-6 w-6 text-indigo-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Email</p>
                <p className="text-gray-600">contact@gpdelivery.sn</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2025 GP Delivery. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
}